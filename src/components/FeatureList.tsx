type FeatureListProps = {
  items: string[];
  columns?: boolean;
};

export function FeatureList({ items, columns = false }: FeatureListProps) {
  return (
    <ul className={`grid gap-3 ${columns ? 'md:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li className="flex gap-3 rounded-card border border-border bg-card p-4" key={item}>
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
          <span className="text-sm leading-6 text-muted">{item}</span>
        </li>
      ))}
    </ul>
  );
}

