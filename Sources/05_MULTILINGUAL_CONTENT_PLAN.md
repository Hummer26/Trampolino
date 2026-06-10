# 05 — Multilingual Content Plan

## Languages

The website must support five languages:

```txt
it — Italian — default
en — English
fr — French
es — Spanish
de — German
```

## Routing

Use locale-prefixed routes:

```txt
/it
/en
/fr
/es
/de
```

The root `/` should redirect to `/it`.

## Recommended library
Use `next-intl`.

## Translation strategy

Use Italian as the source language. Translate all public content from Italian into English, French, Spanish and German.

Do not use automatic translation blindly in production. AI translation is acceptable for MVP, but the client should later review all language versions.

## Folder structure

Recommended content files:

```txt
src/content/it/site.json
src/content/en/site.json
src/content/fr/site.json
src/content/es/site.json
src/content/de/site.json
```

Recommended UI translation files:

```txt
src/messages/it.json
src/messages/en.json
src/messages/fr.json
src/messages/es.json
src/messages/de.json
```

## Content model

The `site.json` files should follow the same structure across languages.

Example:

```json
{
  "seo": {
    "title": "...",
    "description": "...",
    "ogTitle": "...",
    "ogDescription": "..."
  },
  "hero": {
    "eyebrow": "...",
    "title": "...",
    "subtitle": "...",
    "primaryCta": "...",
    "secondaryCta": "...",
    "badges": ["...", "...", "..."]
  },
  "about": {
    "title": "...",
    "paragraphs": ["...", "..."]
  },
  "services": {
    "title": "...",
    "subtitle": "...",
    "items": [
      {
        "id": "bungee-trampoline",
        "title": "...",
        "shortText": "...",
        "longText": "...",
        "highlights": ["...", "..."]
      }
    ]
  },
  "events": {
    "title": "...",
    "subtitle": "...",
    "items": ["...", "..."]
  },
  "coverage": {
    "title": "...",
    "text": "...",
    "cta": "..."
  },
  "safety": {
    "title": "...",
    "text": "...",
    "points": ["...", "..."]
  },
  "gallery": {
    "title": "...",
    "subtitle": "..."
  },
  "faq": {
    "title": "FAQ",
    "items": [
      {
        "question": "...",
        "answer": "..."
      }
    ]
  },
  "contact": {
    "title": "...",
    "subtitle": "...",
    "buttons": {
      "phone": "...",
      "whatsapp": "...",
      "email": "...",
      "facebook": "..."
    },
    "form": {
      "name": "...",
      "email": "...",
      "phone": "...",
      "eventType": "...",
      "place": "...",
      "date": "...",
      "message": "...",
      "submit": "...",
      "success": "...",
      "error": "..."
    }
  }
}
```

## UI messages

`messages/*.json` should be used for compact UI labels used across components.

Example:

```json
{
  "Navigation": {
    "home": "Home",
    "services": "Servizi",
    "events": "Eventi",
    "safety": "Sicurezza",
    "gallery": "Gallery",
    "faq": "FAQ",
    "contact": "Contatti"
  },
  "LanguageSwitcher": {
    "label": "Lingua"
  }
}
```

## Language-specific SEO

Use localized SEO titles and descriptions.

### Italian
```txt
Salto Trampolino | Bungee trampoline e castelli gonfiabili in Svizzera
```

### English
```txt
Salto Trampolino | Bungee trampoline and inflatable castles in Switzerland
```

### French
```txt
Salto Trampolino | Trampoline bungee et châteaux gonflables en Suisse
```

### Spanish
```txt
Salto Trampolino | Bungee trampoline y castillos hinchables en Suiza
```

### German
```txt
Salto Trampolino | Bungee-Trampolin und Hüpfburgen in der Schweiz
```

## Hreflang

Each language page should provide alternates:

```txt
it-CH
en
fr-CH
es
de-CH
x-default
```

## Language switcher

The language switcher should:

- show current language;
- allow switching between IT, EN, FR, ES, DE;
- preserve the current route if possible;
- be accessible from desktop header and mobile menu.

## Translation tone

Keep all translations:

- warm;
- family-friendly;
- simple;
- professional;
- not overly corporate;
- not too childish.

## Important wording rules

Avoid fixed promises:

- Do not say “always available”.
- Do not say “fixed locations”.
- Do not show fixed opening times.
- Do not show public prices.

Use flexible wording:

- “on request”;
- “availability depends on season and event”;
- “contact us for information”;
- “custom solution for your event”.
