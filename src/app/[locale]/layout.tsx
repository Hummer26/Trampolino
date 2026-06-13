import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";

import {Footer} from "@/components/layout/footer";
import {Header} from "@/components/layout/header";
import {getSiteContent} from "@/lib/content";
import {defaultLocale, isLocale, locales, type Locale} from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale: rawLocale} = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const content = await getSiteContent(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saltotrampolino.ch";
  const path = `/${locale}`;

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: `${siteUrl}${path}`,
      languages: {
        "it-CH": `${siteUrl}/it`,
        en: `${siteUrl}/en`,
        "fr-CH": `${siteUrl}/fr`,
        es: `${siteUrl}/es`,
        "de-CH": `${siteUrl}/de`,
        "x-default": `${siteUrl}/it`
      }
    },
    openGraph: {
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      url: `${siteUrl}${path}`,
      siteName: "Salto Trampolino",
      locale,
      type: "website",
      images: [{url: `${siteUrl}/images/og/salto-trampolino-og.jpg`, width: 1200, height: 630, alt: "Salto Trampolino"}]
    }
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale: rawLocale} = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const content = await getSiteContent(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale} navigation={messages.Navigation} languageLabel={messages.LanguageSwitcher.label} />
      {children}
      <Footer locale={locale} content={content} />
    </NextIntlClientProvider>
  );
}
