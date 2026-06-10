import Image from "next/image";
import Link from "next/link";

import {contactLinks} from "@/lib/contact";
import {locales, type Locale} from "@/i18n/routing";
import type {SiteContent} from "@/types/site";

export function Footer({locale, content}: {locale: Locale; content: SiteContent}) {
  return (
    <footer className="bg-brand-blue py-12 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image src="/images/logo/logo.jpg" alt="Salto Trampolino" width={64} height={64} className="mb-4 rounded-full" />
          <p className="max-w-sm text-white/80">{content.seo.ogDescription}</p>
          <p className="mt-5 text-sm text-white/60">© Salto Trampolino / PlazaSwiss. Tutti i diritti riservati.</p>
        </div>
        <div className="grid gap-2 text-sm">
          <a href={contactLinks.phoneHref}>{contactLinks.phoneDisplay}</a>
          <a href={contactLinks.emailHref}>{contactLinks.email}</a>
          <a href={contactLinks.facebookHref}>Facebook</a>
        </div>
        <div className="grid gap-2 text-sm">
          <div className="flex flex-wrap gap-2">
            {locales.map((item) => (
              <Link key={item} href={`/${item}`} className="rounded-full bg-white/10 px-3 py-1 font-bold">{item.toUpperCase()}</Link>
            ))}
          </div>
          <Link href={`/${locale}/privacy`}>{content.legal.privacyTitle}</Link>
          <Link href={`/${locale}/terms`}>{content.legal.termsTitle}</Link>
        </div>
      </div>
    </footer>
  );
}
