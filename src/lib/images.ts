import generatedImages from '@/data/images.generated.json';
import { assetPath, siteBasePath } from '@/lib/sitePath';

export type ImageVariant = { width: number; height: number; avif: string; webp: string; jpg?: string; png?: string };
export type ImageAsset = { width: number; height: number; sizes: string; fallback: string; variants: ImageVariant[] };
const images = generatedImages as Record<string, ImageAsset>;

export function getImageAsset(src: string) {
  const path = siteBasePath && src.startsWith(siteBasePath + '/') ? src.slice(siteBasePath.length) : src;
  return images[path];
}

export function imageFallback(src: string) {
  const image = getImageAsset(src);
  return image ? assetPath(image.fallback) : src;
}
