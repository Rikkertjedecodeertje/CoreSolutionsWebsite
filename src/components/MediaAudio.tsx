'use client';

import { createContext, useContext, useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { CirclePlay, X } from 'lucide-react';
import styles from './MediaAudio.module.css';

type Recording = {
  src: string;
  title: string;
  date?: string;
  duration: string;
};

const OpenRecording = createContext<(recording: Recording) => void>(() => {});

export function MediaAudioButton({ recording, label }: { recording: Recording; label: string }) {
  const open = useContext(OpenRecording);
  return (
    <button
      className={styles.trigger}
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => {
        event.currentTarget.focus();
        open(recording);
      }}
    >
      <CirclePlay size={17} aria-hidden="true" />
      {label}
    </button>
  );
}

export function MediaAudio({ children, locale }: { children: ReactNode; locale: 'en' | 'nl' }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const player = useRef<HTMLAudioElement>(null);
  const titleId = useId();
  const [recording, setRecording] = useState<Recording | null>(null);
  const [failed, setFailed] = useState(false);
  const nl = locale === 'nl';

  useEffect(() => {
    if (recording && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [recording]);

  function closeRecording() {
    player.current?.pause();
    dialog.current?.close();
    setRecording(null);
    setFailed(false);
  }

  return (
    <OpenRecording.Provider value={setRecording}>
      {children}
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeRecording();
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeRecording();
        }}
      >
        {recording && (
          <div className={styles.panel}>
            <button className={styles.close} type="button" onClick={closeRecording} aria-label={nl ? 'Sluiten' : 'Close'}>
              <X size={22} aria-hidden="true" />
            </button>
            <h2 id={titleId} className={styles.title}>{recording.title}</h2>
            <p className={styles.meta}>
              {[recording.date, recording.duration, !nl && 'In Dutch'].filter(Boolean).join(' · ')}
            </p>
            <audio
              ref={player}
              className={styles.player}
              aria-labelledby={titleId}
              controls
              preload="none"
              src={recording.src}
              onError={() => setFailed(true)}
            />
            {failed && (
              <p className={styles.error} role="status">
                {nl ? 'Het afspelen is niet gelukt.' : 'Playback failed.'}{' '}
                <a href={recording.src} download>{nl ? 'Download het interview' : 'Download the interview'}</a>
              </p>
            )}
          </div>
        )}
      </dialog>
    </OpenRecording.Provider>
  );
}
