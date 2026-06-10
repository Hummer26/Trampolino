export const locales = ["it", "en", "fr", "es", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "it";

export const localeLabels: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  fr: "Francais",
  es: "Espanol",
  de: "Deutsch"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
