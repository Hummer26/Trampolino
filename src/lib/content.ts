import "server-only";

import type {Locale} from "@/i18n/routing";
import type {SiteContent} from "@/types/site";

const loaders = {
  it: () => import("@/content/it/site.json"),
  en: () => import("@/content/en/site.json"),
  fr: () => import("@/content/fr/site.json"),
  es: () => import("@/content/es/site.json"),
  de: () => import("@/content/de/site.json")
} satisfies Record<Locale, () => Promise<{default: SiteContent}>>;

export async function getSiteContent(locale: Locale) {
  const content = await loaders[locale]();
  return content.default;
}
