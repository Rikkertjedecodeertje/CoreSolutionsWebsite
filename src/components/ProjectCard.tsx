import Link from 'next/link';
import type { Project } from '@/data/projects';
import { assetPath } from '@/lib/sitePath';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-card border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        href={`/portfolio/${project.slug}/`}
      >
        <img
          alt={project.gallery[0]?.alt ?? `${project.name} placeholder image`}
          className="h-56 w-full border-b border-border object-cover"
          src={assetPath(project.gallery[0]?.src ?? '/images/marketplace-placeholder.svg')}
        />
        <div className="p-6">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {[project.category, ...(project.extraTags ?? [])].map((tag) => (
              <span
                className="rounded-card border border-border bg-background px-3 py-1 text-xs font-semibold text-muted"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          {project.slug === 'iheel' || project.slug === 'batbox-battery-tester' ? (
            <div className="flex h-14 max-w-[210px] items-center overflow-hidden">
              <img
                alt={project.slug === 'iheel' ? 'iHeel logo' : 'BATBOX logo'}
                className={
                  project.slug === 'iheel'
                    ? 'h-12 w-auto max-w-[210px] object-contain object-left'
                    : 'h-14 w-[210px] origin-left -translate-x-8 scale-[1.28] object-contain object-left'
                }
                src={assetPath(
                  project.slug === 'iheel'
                    ? '/images/iheel-logo.svg'
                    : '/images/batbox-logo.svg',
                )}
              />
            </div>
          ) : (
            <h3 className="text-2xl font-semibold text-text">{project.name}</h3>
          )}
          {project.status ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-steel">
              {project.status}
            </p>
          ) : null}
          <p className="mt-3 leading-7 text-muted">{project.shortDescription}</p>
          <p className="mt-5 text-sm font-semibold text-steel group-hover:text-primary">
            View brand
          </p>
        </div>
      </Link>
    </article>
  );
}

