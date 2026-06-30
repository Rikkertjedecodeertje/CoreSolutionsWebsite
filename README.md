# Core Solutions Global Website

Static portfolio website for `coresolutionsglobal.com`, built with Next.js App Router,
TypeScript and Tailwind CSS.

## Deployment

The site is configured for static export:

- `output: 'export'` in `next.config.js`
- `trailingSlash: true` so pages export as folders with `index.html`
- `images.unoptimized: true`
- No API routes, Server Actions, `getServerSideProps`, or runtime Node.js server requirements
- Contact uses `mailto:contact@coresolutionsglobal.com`

Build the production export:

```bash
npm install
npm run build
```

Next.js will generate the static site in `/out`. Upload the contents of `/out`
directly into `public_html` on Vimexx shared hosting.

## Editing Content

Portfolio content lives in `src/data/projects.ts`. Add future public products there
and create matching static images in `public/images`.

Placeholder sales links are marked with `isPlaceholder: true`. Replace `href: '#'`
entries with the final marketplace or product URLs when available.

## Assets To Replace Later

- Core Solutions Global logo file, if a finished logo should replace the text mark
- Real iHeel Pads product photos and packaging images
- Real BatBox Battery Tester product renders or photos
- Final Bol.com, iHeelPads.com and Amazon URLs
- Any genuine media mentions or publication links
