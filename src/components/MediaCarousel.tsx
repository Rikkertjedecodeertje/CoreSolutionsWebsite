'use client';

import { Children, useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import styles from './MediaCarousel.module.css';

const ROTATION_INTERVAL = 3750;

export function MediaCarousel({ children, locale = 'en' }: { children: ReactNode; locale?: 'en' | 'nl' }) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const count = slides.length;
  const nl = locale === 'nl';
  const root = useRef<HTMLDivElement>(null);
  const positionRef = useRef(count);
  const busy = useRef(false);
  const motionTimer = useRef<ReturnType<typeof setTimeout>>();
  const touch = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const [position, setPosition] = useState(count);
  const [animated, setAnimated] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [perView, setPerView] = useState(3);

  const settle = useCallback(() => {
    clearTimeout(motionTimer.current);
    const normalized = count + ((positionRef.current % count) + count) % count;
    if (positionRef.current !== normalized) {
      setAnimated(false);
      positionRef.current = normalized;
      setPosition(normalized);
    }
    busy.current = false;
  }, [count]);

  const move = useCallback((direction: number) => {
    if (count < 2 || busy.current) return;
    const next = positionRef.current + direction;
    if (reducedMotion) {
      const normalized = count + ((next % count) + count) % count;
      setAnimated(false);
      positionRef.current = normalized;
      setPosition(normalized);
      return;
    }
    busy.current = true;
    setAnimated(true);
    positionRef.current = next;
    setPosition(next);
    motionTimer.current = setTimeout(settle, 900);
  }, [count, reducedMotion, settle]);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setReducedMotion(motion.matches);
      setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    sync();
    motion.addEventListener('change', sync);
    window.addEventListener('resize', sync);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) observer.observe(root.current);
    const visibility = () => setDocumentVisible(!document.hidden);
    visibility();
    document.addEventListener('visibilitychange', visibility);
    return () => {
      motion.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
      document.removeEventListener('visibilitychange', visibility);
      observer.disconnect();
      clearTimeout(motionTimer.current);
    };
  }, []);

  useEffect(() => {
    setAnimated(false);
    positionRef.current = count;
    setPosition(count);
    busy.current = false;
    clearTimeout(motionTimer.current);
  }, [count]);

  useEffect(() => {
    if (paused || hovered || reducedMotion || !visible || !documentVisible || count < 2) return;
    const timer = setInterval(() => move(1), ROTATION_INTERVAL);
    return () => clearInterval(timer);
  }, [count, documentVisible, hovered, move, paused, reducedMotion, visible]);

  if (count === 0) return null;

  const active = ((position % count) + count) % count;
  const repeated = [...slides, ...slides, ...slides];
  const manualMove = (direction: number) => {
    setPaused(true);
    move(direction);
  };

  return (
    <div
      ref={root}
      className={styles.carousel}
      role="region"
      aria-roledescription={nl ? 'carrousel' : 'carousel'}
      aria-label={nl ? 'Uitgelichte media' : 'Featured coverage'}
      style={{ '--available': count } as CSSProperties}
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest('[data-rotation-control]')) setPaused(true);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault();
          manualMove(event.key === 'ArrowRight' ? 1 : -1);
        }
      }}
    >
      <div
        className={styles.viewport}
        tabIndex={0}
        aria-label={nl ? 'Gebruik de pijltjestoetsen of veeg om te bladeren' : 'Use the arrow keys or swipe to browse'}
        onPointerDown={(event) => {
          swiped.current = false;
          if (event.pointerType === 'touch') touch.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerCancel={() => { touch.current = null; }}
        onPointerUp={(event) => {
          if (!touch.current) return;
          const dx = event.clientX - touch.current.x;
          const dy = event.clientY - touch.current.y;
          touch.current = null;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) {
            swiped.current = true;
            manualMove(dx < 0 ? 1 : -1);
          }
        }}
        onClickCapture={(event) => {
          if (swiped.current) {
            event.preventDefault();
            event.stopPropagation();
            swiped.current = false;
          }
        }}
      >
        <div
          className={`${styles.track}${animated ? ` ${styles.animated}` : ''}`}
          style={{ '--position': position } as CSSProperties}
          onTransitionEnd={(event) => { if (event.target === event.currentTarget && event.propertyName === 'transform') settle(); }}
          aria-live="off"
        >
          {repeated.map((slide, index) => {
            const inactive = index < position || index >= position + Math.min(perView, count);
            return (
              <div
                key={index}
                className={styles.slide}
                role="group"
                aria-roledescription={nl ? 'artikel' : 'slide'}
                aria-label={`${index % count + 1} / ${count}`}
                aria-hidden={inactive || undefined}
                ref={(element) => { if (element) element.inert = inactive; }}
              >
                {slide}
              </div>
            );
          })}
        </div>
      </div>
      {count > 1 && (
        <div className={styles.controls}>
          <p className={styles.counter} aria-live="off">
            <span className={styles.srOnly}>{nl ? 'Voorste artikel' : 'Leading story'}: </span>
            <span className={styles.current}>{active + 1}</span><span className={styles.divider}>/</span>{count}
          </p>
          <div className={styles.buttons}>
            {!reducedMotion && (
              <button
                type="button"
                data-rotation-control
                className={styles.rotation}
                onClick={() => setPaused((value) => !value)}
                aria-label={nl ? (paused ? 'Automatische rotatie starten' : 'Automatische rotatie pauzeren') : (paused ? 'Start automatic rotation' : 'Pause automatic rotation')}
              >
                {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                <span>{nl ? (paused ? 'Afspelen' : 'Pauzeren') : (paused ? 'Play' : 'Pause')}</span>
              </button>
            )}
            <button className={styles.arrow} type="button" onClick={() => manualMove(-1)} aria-label={nl ? 'Vorig artikel' : 'Previous story'}>
              <ArrowLeft size={19} aria-hidden="true" />
            </button>
            <button className={styles.arrow} type="button" onClick={() => manualMove(1)} aria-label={nl ? 'Volgend artikel' : 'Next story'}>
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
