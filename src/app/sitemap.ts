import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

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

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}

