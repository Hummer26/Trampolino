import {notFound} from "next/navigation";

import {LandingPage} from "@/components/sections/landing-page";
import {getSiteContent} from "@/lib/content";
import {isLocale, type Locale} from "@/i18n/routing";

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale: rawLocale} = await params;
  if (!isLocale(rawLocale)) notFound();

  const locale = rawLocale as Locale;
  const content = await getSiteContent(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saltotrampolino.ch";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Salto Trampolino",
    legalName: "PlazaSwiss SAGL",
    url: siteUrl,
    email: "plazaswiss@gmail.com",
    telephone: "+41796152634",
    areaServed: "Switzerland",
    description: content.seo.description,
    sameAs: ["https://www.facebook.com/saltotrampolino"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      <LandingPage content={content} locale={locale} />
    </>
  );
}
