# Image sources and responsive delivery

- `originals/images/` contains the unmodified images that were already in the website, including previous product photos and SVG artwork.
- `originals/replacements/` contains the two new product photographs supplied on 25 October 2026.
- `source-images/pillenpopper-cleaned.png` is the working source with the white corner graphic removed. Product and person pixels are retained from the original photograph; the retouch is limited to the background.
- Originals live outside `public/` and are not included in the published website export. Keep them unchanged for future design work.
- `public/images/core-solutions-products-hero.png` remains byte-for-byte unchanged. Its responsive derivatives use the same composition.

## Rebuild

Install `scripts/requirements-images.txt`, then run `python scripts/optimize-images.py` from the repository. The script writes size variants in AVIF, WebP and JPEG (PNG where transparency is needed), legacy URL fallbacks, the image manifest and the audit JSON. Original SVG files stay as vectors. After regeneration, run the site production build.

`ResponsiveImage` uses native picture/source selection and width-based srcsets. Browsers choose AVIF, then WebP, then the JPEG/PNG fallback. Sizes reflect hero, card, portrait and logo use. Below-the-fold photos are lazy-loaded; hero images are eager with high fetch priority. Intrinsic dimensions reserve layout space. Open Graph uses the broadly compatible JPEG/PNG fallback.

## Audit

The archive contains 15 raster images plus the original SVGs. The table compares each previous asset with the largest AVIF derivative; mobile and card variants are usually smaller. New product-photo content is a replacement, so its comparison is indicative rather than a same-image compression ratio.

| Previous asset | Previous bytes | Widths | Largest AVIF bytes | Largest WebP bytes |
| --- | ---: | --- | ---: | ---: |
| /images/amazon-logo.png | 103221 | 160, 320, 600 | 16652 | 15776 |
| /images/batbox-product.png | 1980558 | 480, 800, 1200 | 53259 | 42598 |
| /images/bol-logo.png | 22665 | 160, 320, 600 | 9742 | 8870 |
| /images/core-solutions-logo.png | 471207 | 96, 192, 320 | 9322 | 30108 |
| /images/core-solutions-products-hero.png | 2250593 | 480, 800, 1200 | 98722 | 88688 |
| /images/iheel-logo-cropped.png | 197572 | 160, 320, 600 | 7479 | 6056 |
| /images/iheel-product.png | 2392860 | 480, 800, 1200 | 150235 | 150226 |
| /images/kaufland-logo.png | 5176 | 160, 304 | 3605 | 2616 |
| /images/pillenpopper-product.webp | 112654 | 480, 800, 1200 | 67636 | 59802 |
| /images/rik-van-wieren-profile.png | 54126 | 100, 200 | 6509 | 6422 |
| /images/stores/bennis.jpg | 241277 | 480, 800 | 68022 | 67652 |
| /images/stores/boost-lokaal.webp | 191676 | 480, 800 | 78744 | 87338 |
| /images/stores/de-malle-molen.jpg | 44194 | 480, 545 | 39195 | 45094 |
| /images/stores/sven.jpg | 87823 | 480, 709 | 69845 | 68172 |
| /images/the-hague-skyline.png | 19334005 | 640, 960, 1600 | 345943 | 368756 |
