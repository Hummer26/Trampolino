import {notFound} from "next/navigation";

import {getSiteContent} from "@/lib/content";
import {isLocale, type Locale} from "@/i18n/routing";

export default async function PrivacyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale: rawLocale} = await params;
  if (!isLocale(rawLocale)) notFound();
  const content = await getSiteContent(rawLocale as Locale);

  return <LegalPage title={content.legal.privacyTitle} text={content.legal.placeholder} />;
}

function LegalPage({title, text}: {title: string; text: string}) {
  return (
    <main className="bg-brand-cream py-32">
      <section className="section-shell max-w-3xl rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-black text-brand-blue">{title}</h1>
        <p className="mt-5 leading-8 text-slate-700">{text}</p>
        <p className="mt-5 rounded-2xl bg-yellow-50 p-4 text-sm font-bold text-brand-blue">Client confirmation required before launch.</p>
      </section>
    </main>
  );
}
