import type {Locale} from "@/i18n/routing";

const cookiePolicyLabels: Record<Locale, string> = {
  it: "Cookie policy",
  en: "Cookie policy",
  fr: "Politique relative aux cookies",
  es: "Politica de cookies",
  de: "Cookie-Richtlinie"
};

export function getCookiePolicyLabel(locale: Locale) {
  return cookiePolicyLabels[locale];
}
