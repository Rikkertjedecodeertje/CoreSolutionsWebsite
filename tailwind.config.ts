import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        steel: 'var(--color-steel)',
        graphite: 'var(--color-graphite)',
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(13, 27, 42, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
