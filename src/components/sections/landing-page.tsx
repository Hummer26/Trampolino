import Image from "next/image";
import type {ReactNode} from "react";
import {ArrowRight, BadgeCheck, CalendarHeart, CheckCircle2, Facebook, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Star} from "lucide-react";

import {Button} from "@/components/ui/button";
import {ContactForm} from "@/features/contact-form/contact-form";
import {contactLinks} from "@/lib/contact";
import type {Locale} from "@/i18n/routing";
import type {SiteContent} from "@/types/site";

const serviceImages: Record<string, string> = {
  "bungee-trampoline": "/images/bungee/bungee-jump.jpg",
  "inflatable-castles": "/images/inflatable/inflatable-castle.jpg",
  "operator-events": "/images/gallery/lake-setup.jpg"
};

const gallery = [
  ["/images/gallery/lake-setup-wide.jpg", "Bungee trampoline by the lake"],
  ["/images/gallery/winter-jump.jpg", "Winter event attraction"],
  ["/images/gallery/inflatable-castle.jpg", "Colorful inflatable castle"],
  ["/images/gallery/event-jump.jpg", "Outdoor bungee trampoline event"],
  ["/images/gallery/family-jump.jpg", "Family attraction in Switzerland"],
  ["/images/gallery/snow-event.jpg", "Snow event with trampoline"],
  ["/images/gallery/inflatable-slide.jpg", "Inflatable slide for children"],
  ["/images/gallery/trampoline-park.jpg", "Elastic trampoline setup"]
] as const;

export function LandingPage({content, locale}: {content: SiteContent; locale: Locale}) {
  return (
    <main>
      <section id="hero" className="relative flex min-h-[760px] items-center overflow-hidden bg-brand-blue text-white">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/images/hero/hero-poster.jpg">
          <source src="/videos/vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/95 via-brand-blue/60 to-brand-red/45" />
        <div className="section-shell relative z-10 pt-28">
          <div className="max-w-3xl rounded-3xl p-5 sm:p-8 md:glass">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-yellow" />
              {content.hero.eyebrow}
            </div>
            <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">{content.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{content.hero.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#contact">{content.hero.primaryCta}<ArrowRight className="h-5 w-5" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={contactLinks.whatsappHref}><MessageCircle className="h-5 w-5" />{content.hero.secondaryCta}</a>
              </Button>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {content.hero.badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 rounded-full bg-white/12 px-4 py-3 text-sm font-bold backdrop-blur">
                  <BadgeCheck className="h-4 w-4 text-brand-yellow" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream py-20">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-soft">
            <Image src="/images/gallery/lake-setup.jpg" alt="Bungee trampoline all'aperto in Svizzera" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div>
            <p className="mb-3 font-extrabold uppercase tracking-wide text-brand-red">Salto Trampolino</p>
            <h2 className="text-4xl font-black text-brand-blue sm:text-5xl">{content.about.title}</h2>
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-lg leading-8 text-slate-700">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="section-shell">
          <SectionIntro title={content.services.title} subtitle={content.services.subtitle} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {content.services.items.map((service) => (
              <article key={service.id} className="overflow-hidden rounded-3xl bg-brand-cream shadow-soft transition hover:-translate-y-1">
                <div className="relative aspect-[4/3]">
                  <Image src={serviceImages[service.id]} alt={service.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-brand-blue">{service.title}</h3>
                  <p className="mt-3 font-semibold text-slate-700">{service.shortText}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.longText}</p>
                  <ul className="mt-5 grid gap-2">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm font-bold text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="bg-brand-sky py-20">
        <div className="section-shell">
          <SectionIntro title={content.events.title} subtitle={content.events.subtitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.events.items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-5 font-extrabold text-brand-blue shadow-sm">
                <CalendarHeart className="h-5 w-5 text-brand-red" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black text-brand-blue sm:text-5xl">{content.coverage.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{content.coverage.text}</p>
            <Button asChild className="mt-7" variant="blue"><a href="#contact">{content.coverage.cta}</a></Button>
          </div>
          <div className="rounded-3xl bg-brand-blue p-8 text-white shadow-soft">
            <MapPin className="h-10 w-10 text-brand-yellow" />
            <p className="mt-6 text-3xl font-black">CH</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold">
              {["Ticino", "Suisse romande", "Deutschschweiz", "Svizzera italiana"].map((item) => <span key={item} className="rounded-full bg-white/12 px-4 py-3">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="bg-brand-blue py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <ShieldCheck className="h-12 w-12 text-brand-yellow" />
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">{content.safety.title}</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">{content.safety.text}</p>
            <p className="mt-5 rounded-2xl bg-white/10 p-4 text-sm font-semibold text-white/80">{content.safety.note}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.safety.points.map((point) => (
              <div key={point} className="rounded-3xl bg-white p-6 text-brand-blue">
                <Star className="h-6 w-6 fill-brand-yellow text-brand-yellow" />
                <p className="mt-4 text-xl font-black">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-brand-cream py-20">
        <div className="section-shell">
          <SectionIntro title={content.gallery.title} subtitle={content.gallery.subtitle} />
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map(([src, alt], index) => (
              <div key={src} className="mb-5 break-inside-avoid overflow-hidden rounded-3xl shadow-soft">
                <Image src={src} alt={alt} width={520} height={index % 2 ? 680 : 440} className="h-auto w-full object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20">
        <div className="section-shell">
          <SectionIntro title={content.faq.title} subtitle="" />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.faq.items.map((item) => (
              <details key={item.question} className="rounded-2xl bg-brand-sky p-5">
                <summary className="cursor-pointer font-black text-brand-blue">{item.question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-brand-cream py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-black text-brand-blue sm:text-5xl">{content.contact.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{content.contact.subtitle}</p>
            <div className="mt-8 grid gap-3">
              <ContactButton href={contactLinks.phoneHref} icon={<Phone />} label={`${content.contact.buttons.phone} ${contactLinks.phoneDisplay}`} />
              <ContactButton href={contactLinks.whatsappHref} icon={<MessageCircle />} label={content.contact.buttons.whatsapp} />
              <ContactButton href={contactLinks.emailHref} icon={<Mail />} label={content.contact.buttons.email} />
              <ContactButton href={contactLinks.facebookHref} icon={<Facebook />} label={content.contact.buttons.facebook} />
            </div>
          </div>
          <ContactForm labels={content.contact.form} locale={locale} />
        </div>
      </section>
    </main>
  );
}

function SectionIntro({title, subtitle}: {title: string; subtitle: string}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black text-brand-blue sm:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-8 text-slate-700">{subtitle}</p> : null}
    </div>
  );
}

function ContactButton({href, icon, label}: {href: string; icon: ReactNode; label: string}) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-black text-brand-blue shadow-sm transition hover:-translate-y-0.5">
      <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-yellow text-brand-blue [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      {label}
    </a>
  );
}
