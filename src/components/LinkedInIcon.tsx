type LinkedInIconProps = {
  className?: string;
};

export function LinkedInIcon({ className = 'h-5 w-5' }: LinkedInIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 22 22"
    >
      <path d="M5.06 3.25a1.72 1.72 0 1 1 0 3.44 1.72 1.72 0 0 1 0-3.44ZM3.57 8.08h2.98v9.58H3.57V8.08Zm4.87 0h2.86v1.31h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.58 1.99 3.58 4.57v5.26h-2.98V13c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.74H8.44V8.08Z" />
    </svg>
  );
}
