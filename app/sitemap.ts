import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/kabuklu-ceviz", changeFrequency: "weekly", priority: 0.9 },
    { path: "/ic-ceviz", changeFrequency: "weekly", priority: 0.9 },
    { path: "/toptan-ceviz", changeFrequency: "weekly", priority: 0.9 },
    { path: "/ceviz-fiyatlari", changeFrequency: "weekly", priority: 0.8 },
    { path: "/hakkimizda", changeFrequency: "monthly", priority: 0.6 },
    { path: "/iletisim", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog", changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
