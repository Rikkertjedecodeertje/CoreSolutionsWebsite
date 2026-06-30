type MetricCardProps = {
  value: string;
  label: string;
  description: string;
};

export function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <div className="rounded-card border border-border bg-card p-6">
      <p className="text-3xl font-semibold text-text">{value}</p>
      <p className="mt-2 font-semibold text-text">{label}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}

