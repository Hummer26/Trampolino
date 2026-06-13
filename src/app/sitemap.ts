import type {MetadataRoute} from "next";

import {locales} from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saltotrampolino.ch";
  const now = new Date();

  return locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: locale === "it" ? 1 : 0.9
    },
    {
      url: `${siteUrl}/${locale}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3
    },
    {
      url: `${siteUrl}/${locale}/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3
    }
  ]);
}
