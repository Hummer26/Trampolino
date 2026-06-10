# 09 — Codex Implementation Prompt

Use this prompt inside Codex / AI coding agent after placing all files in `Trampolino/Source`.

---

You are a senior full-stack developer and technical lead.

Build a modern multilingual landing website for the project **Trampolino / Salto Trampolino**.

## Read first
Before coding, read all files in:

```txt
Trampolino/Source
```

Use them as the source of truth.

Important files:

```txt
01_PROJECT_BRIEF.md
02_TECHNICAL_REQUIREMENTS.md
03_SITE_STRUCTURE.md
04_CONTENT_IT.md
05_MULTILINGUAL_CONTENT_PLAN.md
06_DESIGN_DIRECTION.md
07_ASSETS_GUIDE.md
08_CONTACT_FORM_RESEND.md
10_QA_CHECKLIST.md
```

## Project goal
Create a visually impressive, responsive, multilingual business-card landing website for **Salto Trampolino**, a Swiss company providing bungee trampoline and inflatable castle attractions for private and public events across Switzerland.

## Hard technical requirements

Use:

```txt
Next.js 15
App Router
TypeScript
Tailwind CSS
shadcn/ui
next-intl
Resend
Vercel-ready deployment
React Hook Form
Zod
lucide-react
```

Use `pnpm`.

## Website type
This is a landing page / business-card website.

Do NOT build:

- online booking;
- online payment;
- customer account;
- fixed location directory;
- fixed opening-hours module;
- price table.

## Languages
Support:

```txt
it — default
en
fr
es
de
```

Routes:

```txt
/it
/en
/fr
/es
/de
```

Root `/` redirects to `/it`.

## Content
Use local structured files for content.

Create:

```txt
src/content/it/site.json
src/content/en/site.json
src/content/fr/site.json
src/content/es/site.json
src/content/de/site.json
```

Italian content should be based on `04_CONTENT_IT.md`.

For EN/FR/ES/DE, create good first-draft translations that preserve meaning and tone.

Also create:

```txt
src/messages/it.json
src/messages/en.json
src/messages/fr.json
src/messages/es.json
src/messages/de.json
```

## Main sections
Build the landing page with these sections:

1. Header
2. Hero with background video
3. About
4. Services
5. Events / use cases
6. Switzerland coverage
7. Safety
8. Gallery
9. FAQ
10. Contact
11. Footer

## Hero
Use `vid.mp4` as the homepage hero background video.

Final path should be:

```txt
public/videos/vid.mp4
```

Hero should include:

- video background;
- overlay gradient;
- logo;
- title;
- subtitle;
- primary CTA scroll to contact;
- secondary WhatsApp CTA;
- trust badges.

## Visual assets
Copy assets from `Trampolino/Source` into the proper `public/` folders.

Use supplied images:

```txt
logo.jpg
IMG_6334 2.jpg
IMG_6334.jpg
IMG_6343.jpg
IMG_6389.jpg
IMG_8932.jpg
IMG_9043.jpg
IMG_9213.jpg
IMG_2195.jpg
IMG_3347.jpg
IMG_3688-min.jpg
IMG_4137-min.jpg
IMG_5873-min.JPG
vid.mp4
```

If `vid.mp4` is not present yet, create the code expecting it and use a poster fallback image.

## Design direction
The site must feel:

- modern;
- bright;
- premium-playful;
- family-friendly;
- emotional;
- clean;
- Swiss outdoor inspired;
- mobile-first.

Use colors inspired by:

```txt
yellow
red
deep blue
sky blue
green
white/cream
```

Use rounded cards, strong CTA buttons, large photos and clean typography.

## Contact form
Create a contact form using:

- React Hook Form;
- Zod;
- `/api/contact` Route Handler;
- Resend;
- honeypot field.

Fields:

- name;
- email;
- phone;
- preferred language;
- event type;
- place/city;
- approximate event date;
- message;
- hidden honeypot.

Send email to:

```txt
plazaswiss@gmail.com
```

Use env var:

```txt
CONTACT_EMAIL=plazaswiss@gmail.com
```

Required env vars:

```txt
RESEND_API_KEY
CONTACT_EMAIL
RESEND_FROM_EMAIL
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_WHATSAPP_NUMBER
NEXT_PUBLIC_PHONE_DISPLAY
NEXT_PUBLIC_FACEBOOK_URL
```

Create `.env.example`.

## Contact links

WhatsApp:

```txt
https://wa.me/41796152634
```

Phone:

```txt
tel:+41796152634
```

Email:

```txt
mailto:plazaswiss@gmail.com
```

Facebook:

```txt
https://www.facebook.com/saltotrampolino
```

## No prices
Do not display prices anywhere.

Use wording like:

```txt
Preventivo su richiesta
Contattaci per informazioni
Soluzioni personalizzate per eventi
```

## No fixed locations or hours
Do not display fixed opening hours or permanent locations.

Use:

```txt
Operativi in tutta la Svizzera
Le località e gli orari possono variare in base alla stagione, agli eventi e alle richieste.
```

## SEO
Implement:

- localized metadata;
- Open Graph;
- canonical;
- hreflang alternates;
- sitemap;
- robots;
- JSON-LD for business if possible.

## Legal pages
Create placeholder pages:

```txt
/[locale]/privacy
/[locale]/terms
```

Add clear comment that legal text must be confirmed by the client.

## Code structure
Use clean architecture.

Recommended structure:

```txt
src/
├─ app/
│  ├─ [locale]/
│  ├─ api/contact/
│  ├─ globals.css
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ ui/
│  ├─ layout/
│  ├─ sections/
│  └─ shared/
├─ features/
│  └─ contact-form/
├─ content/
├─ i18n/
├─ lib/
├─ messages/
└─ types/
```

## Quality bar
Before finishing, ensure:

```bash
pnpm lint
pnpm build
```

must pass.

No TypeScript errors.

No broken imports.

No missing image crashes.

## Deliverables
When finished, provide:

1. Summary of implemented features.
2. Commands to run locally.
3. Required env variables.
4. Notes for Vercel deployment.
5. Any remaining client-confirmation items.

---

Start by creating the Next.js 15 app if it does not exist, then implement the website according to the files in `Trampolino/Source`.
