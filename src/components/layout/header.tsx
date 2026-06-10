"use client";

import Image from "next/image";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {useTranslations} from "next-intl";

import {Button} from "@/components/ui/button";
import {localeLabels, locales, type Locale} from "@/i18n/routing";

const navItems = [
  ["home", "hero"],
  ["services", "services"],
  ["events", "events"],
  ["safety", "safety"],
  ["gallery", "gallery"],
  ["faq", "faq"],
  ["contact", "contact"]
] as const;

export function Header({locale}: {locale: Locale}) {
  const t = useTranslations("Navigation");
  const lang = useTranslations("LanguageSwitcher");
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
        <Link href={`/${locale}`} className="flex items-center gap-3 font-extrabold text-brand-blue">
          <Image src="/images/logo/logo.jpg" alt="Salto Trampolino" width={46} height={46} className="h-11 w-11 rounded-full object-cover" priority />
          <span className="hidden sm:inline">Salto Trampolino</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([key, target]) => (
            <a key={key} href={`#${target}`} className="rounded-full px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-brand-sky hover:text-brand-blue">
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <label className="sr-only" htmlFor="locale-switcher">{lang("label")}</label>
          <select
            id="locale-switcher"
            value={locale}
            onChange={(event) => {
              window.location.href = `/${event.target.value}`;
            }}
            className="rounded-full border border-blue-100 bg-white px-3 py-2 text-sm font-bold text-brand-blue"
          >
            {locales.map((item) => (
              <option key={item} value={item}>{localeLabels[item]}</option>
            ))}
          </select>
          <Button asChild>
            <a href="#contact">{t("contact")}</a>
          </Button>
        </div>
        <button type="button" className="rounded-full p-2 text-brand-blue lg:hidden" aria-label="Menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl bg-white p-4 shadow-soft lg:hidden">
          <nav className="grid gap-1">
            {navItems.map(([key, target]) => (
              <a key={key} href={`#${target}`} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-brand-sky">
                {t(key)}
              </a>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {locales.map((item) => (
              <Link key={item} href={`/${item}`} className="rounded-full bg-brand-sky px-3 py-2 text-center text-sm font-extrabold text-brand-blue">
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
