import type { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio";

const siteUrl = "https://kandulalikhitha.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = portfolioData.projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    ...projectRoutes,
  ];
}
