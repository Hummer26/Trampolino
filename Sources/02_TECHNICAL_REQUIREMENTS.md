# 02 — Technical Requirements

## Required stack

Use exactly this stack unless there is a strong reason not to:

```txt
Next.js 15
App Router
TypeScript
Tailwind CSS
shadcn/ui
next-intl
Resend
Vercel
React Hook Form
Zod
lucide-react
```

## Hosting
The website must be deployable on **Vercel**.

## Email sending
Contact form must send emails through **Resend**.

## Package manager
Prefer `pnpm`.

## Project name
Use the folder/project name:

```txt
Trampolino
```

## Basic app requirements

The website must:

- be responsive on smartphone, tablet/touchpad and desktop;
- use a video background in the hero section;
- support five languages;
- not show prices;
- not show fixed opening hours;
- not show fixed permanent locations;
- focus on contact and lead generation;
- use local content files rather than hardcoding all text inside components;
- be cleanly structured and easily extendable.

## Supported languages

```txt
it — Italian — default
en — English
fr — French
es — Spanish
de — German
```

Recommended routing:

```txt
/it
/en
/fr
/es
/de
```

## Content storage

Use structured content files.

Recommended:

```txt
src/content/it/site.json
src/content/en/site.json
src/content/fr/site.json
src/content/es/site.json
src/content/de/site.json
```

For UI labels and navigation:

```txt
src/messages/it.json
src/messages/en.json
src/messages/fr.json
src/messages/es.json
src/messages/de.json
```

## Environment variables

Create `.env.example`:

```env
RESEND_API_KEY=
CONTACT_EMAIL=plazaswiss@gmail.com
RESEND_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=41796152634
NEXT_PUBLIC_PHONE_DISPLAY=+41 79 61 52 634
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/saltotrampolino
```

Important:

- `CONTACT_EMAIL` is where website requests are received.
- `RESEND_FROM_EMAIL` must be a verified sender/domain in Resend.
- For local development, use `.env.local`.

## Contact form

The contact form must use:

- `react-hook-form`;
- `zod` validation;
- server-side validation in `/api/contact`;
- Resend for email sending;
- honeypot anti-spam field;
- loading state;
- success state;
- error state.

### Form fields

Required fields:

- name;
- email;
- message.

Recommended optional fields:

- phone;
- event type;
- city/place;
- approximate event date;
- preferred language.

### Event type options

```txt
Private party
Birthday party
Corporate event
School event
Public event
Festival / fair
Other
```

### Resend email content

Email sent to owner should include:

```txt
Name
Email
Phone
Preferred language
Event type
Place / city
Approximate date
Message
```

## Anti-spam

At minimum:

- hidden honeypot field;
- server-side schema validation;
- do not expose Resend API key to client;
- use a Route Handler.

Optional later:

- rate limiting;
- Turnstile/captcha;
- logging.

## SEO requirements

Each language page must have:

- localized title;
- localized description;
- Open Graph title;
- Open Graph description;
- Open Graph image;
- canonical URL;
- hreflang alternates;
- `robots.ts`;
- `sitemap.ts`.

Recommended SEO concepts:

Italian:

```txt
bungee trampoline Svizzera
trampolini con elastici Ticino
castelli gonfiabili Svizzera
attrazioni per bambini Svizzera
feste per bambini Svizzera
noleggio gonfiabili Svizzera
```

English:

```txt
bungee trampoline Switzerland
inflatable castles Switzerland
kids attractions Switzerland
children party attractions Switzerland
```

## Performance requirements

Target:

- Lighthouse Performance 90+;
- Accessibility 90+;
- Best Practices 90+;
- SEO 90+.

Technical rules:

- use `next/image` for images;
- compress images before final deployment;
- lazy-load gallery images;
- use `preload="metadata"` or optimized settings for video;
- provide fallback poster image for video;
- do not use huge JS animation libraries unless needed;
- use CSS animations or Framer Motion only if intentionally added and not heavy.

## Accessibility requirements

The website must include:

- semantic HTML;
- visible focus states;
- alt text for all meaningful images;
- keyboard-accessible navigation;
- accessible mobile menu;
- sufficient color contrast;
- aria labels for icon buttons;
- no text embedded only inside images.

## Responsive behavior

Breakpoints:

- mobile: 320–767px;
- tablet/touchpad: 768–1023px;
- desktop: 1024px+;
- large desktop: 1440px+.

Mobile priorities:

- fast hero loading;
- clear CTA buttons;
- sticky or easy-to-access contact action;
- readable service cards;
- compact FAQ;
- easy WhatsApp click.

## Browser support

Support modern versions of:

- Chrome;
- Safari;
- Firefox;
- Edge;
- mobile Safari;
- Android Chrome.

## Legal pages

Create placeholders for:

```txt
/[locale]/privacy
/[locale]/terms
```

Legal text can be placeholder/draft until confirmed by the client.

## Deployment readiness

The project should be deployable to Vercel with:

```bash
pnpm build
```

There must be no TypeScript errors, no missing environment variable crashes during static render, and no broken imports.
