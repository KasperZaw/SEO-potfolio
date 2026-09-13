import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
import { projects } from "@/modules/projects/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    ...projects.map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
