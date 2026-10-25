import type { ImgHTMLAttributes } from 'react';
import { getImageAsset } from '@/lib/images';
import { assetPath } from '@/lib/sitePath';

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & {
  src: string;
  alt: string;
};

export function ResponsiveImage({ src, alt, sizes, loading, decoding = 'async', width, height, ...props }: ResponsiveImageProps) {
  const image = getImageAsset(src);
  if (!image) {
    return <img {...props} alt={alt} decoding={decoding} height={height} loading={loading} sizes={sizes} src={src} width={width} />;
  }
  const responsiveSizes = sizes ?? image.sizes;
  const srcSet = (format: 'avif' | 'webp' | 'jpg' | 'png') =>
    image.variants.map((variant) => `${assetPath(variant[format]!)} ${variant.width}w`).join(', ');
  const fallbackFormat = image.fallback.endsWith('.png') ? 'png' : 'jpg';

  return (
    <picture className="contents">
      <source className="hidden" sizes={responsiveSizes} srcSet={srcSet('avif')} type="image/avif" />
      <source className="hidden" sizes={responsiveSizes} srcSet={srcSet('webp')} type="image/webp" />
      <img
        {...props}
        alt={alt}
        decoding={decoding}
        height={height ?? image.height}
        loading={loading ?? (src.includes('logo') ? 'eager' : 'lazy')}
        sizes={responsiveSizes}
        src={assetPath(image.fallback)}
        srcSet={srcSet(fallbackFormat)}
        width={width ?? image.width}
      />
    </picture>
  );
}
