import type {Locale} from "@/i18n/routing";
import legalDocuments from "@/content/legal.generated.json";

type LegalDocumentKind = "privacy" | "cookie-policy";

export function LegalDocumentPage({kind, locale}: {kind: LegalDocumentKind; locale: Locale}) {
  const paragraphs = legalDocuments[kind][locale];
  const [title, ...body] = paragraphs;

  return (
    <main className="bg-brand-cream py-32">
      <article className="section-shell max-w-4xl rounded-3xl bg-white p-6 shadow-soft sm:p-10">
        <h1 className="text-4xl font-black text-brand-blue sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-5">
          {body.map((paragraph) => (
            <LegalParagraph key={paragraph} text={paragraph} />
          ))}
        </div>
      </article>
    </main>
  );
}

function LegalParagraph({text}: {text: string}) {
  const isSectionHeading = /^\d+\.\s/.test(text);

  if (isSectionHeading) {
    return <h2 className="pt-4 text-2xl font-black text-brand-blue">{text}</h2>;
  }

  return <p className="leading-8 text-slate-700">{text}</p>;
}
