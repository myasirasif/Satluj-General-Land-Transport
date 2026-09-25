import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({
    url: `${siteConfig.url}${l.href === "/" ? "" : l.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l.href === "/" ? 1 : 0.8,
  }));
}
