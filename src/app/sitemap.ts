import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { waitlistPaths } from '@/lib/pillenpopperWaitlist';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coresolutionsglobal.com';
  const staticRoutes = [
    '',
    '/portfolio',
    '/where-to-buy',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
  ];
  const projectRoutes = projects.map((project) => `/portfolio/${project.slug}`);
  const dutchStaticRoutes = staticRoutes.map((route) => `/nl${route}`);
  const dutchProjectRoutes = projects.map((project) => `/nl/portfolio/${project.slug}`);

  const waitlistRoutes = Object.values(waitlistPaths).map(path => path.replace(/\/$/, ''));

  return [...staticRoutes, ...projectRoutes, ...dutchStaticRoutes, ...dutchProjectRoutes, ...waitlistRoutes].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}

