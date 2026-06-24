import {notFound} from "next/navigation";

import {LegalDocumentPage} from "@/components/sections/legal-document-page";
import {isLocale, type Locale} from "@/i18n/routing";

export default async function CookiePolicyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: rawLocale} = await params;
  if (!isLocale(rawLocale)) notFound();

  return <LegalDocumentPage kind="cookie-policy" locale={rawLocale as Locale} />;
}
