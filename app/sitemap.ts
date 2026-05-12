import type { MetadataRoute } from "next";
import { locales } from "@/i18n/routing";
import { services } from "@/lib/mockData";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}/`,
      changeFrequency: "weekly",
      priority: 1,
    });
    entries.push({
      url: `${BASE_URL}/${locale}/booking/`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
    for (const s of services) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${s.slug}/`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
