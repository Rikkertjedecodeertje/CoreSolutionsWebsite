type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-text">{title}</h2>
      {description ? <p className="mt-4 leading-7 text-muted">{description}</p> : null}
    </div>
  );
}

