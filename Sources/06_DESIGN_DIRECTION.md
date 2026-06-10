# 06 — Design Direction

## Design goal
Create a simple but visually impressive landing website that feels modern, joyful and trustworthy.

The old website is only a factual reference. The new design must be much better.

## Visual identity
The brand already has strong yellow and red elements in the logo and physical banners.

Use the logo as a base, but make the website cleaner and more premium.

## Suggested color palette

### Primary
Bright yellow inspired by the logo:

```txt
#FFD400
```

### Accent red
Inspired by the logo:

```txt
#EF2F2F
```

### Deep blue
For premium contrast and Swiss outdoor feeling:

```txt
#063B7A
```

### Sky blue
For light sections and playful accents:

```txt
#EAF6FF
```

### Green accent
Inspired by outdoor grass and inflatable castles:

```txt
#27B86A
```

### Text dark
```txt
#111827
```

### Background light
```txt
#FFFDF7
```

## Typography
Use a clean modern sans-serif.

Recommended options:

- Inter;
- Nunito Sans;
- Poppins for headings + Inter for body;
- Baloo 2 only for small playful accent text, not the whole website.

Recommended pairing:

```txt
Headings: Poppins
Body: Inter
```

## Layout style

Use:

- large hero video;
- bold headline;
- glassmorphism card over video;
- rounded cards;
- soft shadows;
- playful but controlled curves;
- large photo cards;
- bright CTA buttons;
- white space;
- strong mobile layout.

## Hero design

Hero should be the strongest part of the website.

Use `vid.mp4` as full-screen or near full-screen background.

Recommended structure:

- video background;
- dark/blue gradient overlay;
- logo in header;
- headline in white;
- subtitle in white/soft white;
- yellow primary button;
- WhatsApp secondary button;
- trust badges under CTA.

Hero height:

```txt
mobile: min-height 720px or 100svh
desktop: min-height 760px or 100vh
```

Video behavior:

```html
<video autoPlay muted loop playsInline />
```

Add poster image fallback.

## Section design

### About section
Use light background, rounded image card, short text.

### Services section
Use three large cards:

- Bungee Trampoline;
- Castelli gonfiabili;
- Eventi con operatore.

Each card should include:

- image;
- title;
- short text;
- highlights;
- CTA.

### Events section
Use icon grid or pill cards.

### Safety section
Use strong trust style:

- dark blue background;
- yellow/red accents;
- icons;
- concise safety points.

### Gallery section
Use masonry-like responsive layout.

### Contact section
Use two-column layout on desktop:

- left: contact information and CTA buttons;
- right: contact form.

On mobile stack vertically.

## Image usage

Use the supplied images strategically:

### Hero
Use `vid.mp4`; if video fails, use one strong outdoor image.

### Bungee service
Use:

```txt
IMG_8932.jpg
IMG_9043.jpg
IMG_9213.jpg
IMG_2195.jpg
IMG_3347.jpg
IMG_3688-min.jpg
IMG_4137-min.jpg
IMG_5873-min.JPG
```

### Inflatable castles
Use:

```txt
IMG_6343.jpg
IMG_6389.jpg
```

### Wide outdoor atmosphere
Use:

```txt
IMG_6334.jpg
IMG_6334 2.jpg
```

### Logo
Use:

```txt
logo.jpg
```

## Animation

Keep animations tasteful.

Allowed:

- fade in;
- slide up;
- subtle hover lift on cards;
- button hover scale;
- gentle background blobs;
- smooth scroll.

Avoid:

- too many bouncing animations;
- heavy parallax;
- chaotic movement;
- animations that reduce readability.

## Mobile design priorities

Mobile must be excellent.

On mobile:

- hero headline must be readable;
- CTA buttons must be large;
- WhatsApp must be easy to tap;
- images must not crop important content badly;
- contact form must be simple;
- menu must be clean and accessible.

## UX principles

The user journey should be:

1. See exciting hero.
2. Understand what the company offers.
3. Trust that the attractions are professional and safe.
4. See photos.
5. Understand that the company works across Switzerland.
6. Contact easily.

## Design keywords

```txt
joy
jump
motion
family
Swiss outdoors
safe fun
events
celebration
colorful but clean
premium playful
```
