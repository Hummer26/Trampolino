# 10 — QA Checklist

Use this checklist before delivering the website to the client or deploying to production.

## 1. General

- [ ] Website opens correctly on `/it`.
- [ ] Root `/` redirects to `/it`.
- [ ] All language routes work: `/it`, `/en`, `/fr`, `/es`, `/de`.
- [ ] No 404 errors on main pages.
- [ ] Header navigation scrolls to correct sections.
- [ ] Footer links work.
- [ ] Logo appears correctly.
- [ ] Website does not show prices.
- [ ] Website does not show fixed opening hours.
- [ ] Website does not show outdated fixed locations.

## 2. Responsive design

Test on:

- [ ] mobile 320px;
- [ ] mobile 375px;
- [ ] mobile 390px;
- [ ] tablet 768px;
- [ ] tablet/touchpad 1024px;
- [ ] desktop 1440px.

Check:

- [ ] hero text is readable;
- [ ] buttons are easy to tap;
- [ ] mobile menu works;
- [ ] gallery does not break layout;
- [ ] contact form is usable;
- [ ] no horizontal scroll.

## 3. Hero video

- [ ] `vid.mp4` is in `public/videos/vid.mp4`.
- [ ] Video autoplays muted.
- [ ] Video loops.
- [ ] Video works on mobile Safari.
- [ ] Poster image appears if video cannot load.
- [ ] Text remains readable over video.
- [ ] Video does not make the page too slow.

## 4. Content

- [ ] Italian content is correct.
- [ ] English content is present.
- [ ] French content is present.
- [ ] Spanish content is present.
- [ ] German content is present.
- [ ] No placeholder lorem ipsum remains.
- [ ] No unconfirmed prices appear.
- [ ] No unconfirmed opening hours appear.
- [ ] Legal company information is marked for confirmation if not final.

## 5. Contact links

- [ ] Phone link works: `tel:+41796152634`.
- [ ] WhatsApp link works: `https://wa.me/41796152634`.
- [ ] Email link works: `mailto:plazaswiss@gmail.com`.
- [ ] Facebook link opens correct page.

## 6. Contact form

- [ ] Required fields validate correctly.
- [ ] Invalid email shows error.
- [ ] Short message shows error.
- [ ] Loading state appears after submit.
- [ ] Success message appears after successful submit.
- [ ] Error message appears if API fails.
- [ ] Honeypot field exists and is hidden.
- [ ] Resend API key is not exposed to client.
- [ ] Email is received by `plazaswiss@gmail.com` or configured contact inbox.
- [ ] Reply-to is set to user email.

## 7. Vercel environment variables

- [ ] `RESEND_API_KEY` added.
- [ ] `CONTACT_EMAIL` added.
- [ ] `RESEND_FROM_EMAIL` added.
- [ ] `NEXT_PUBLIC_SITE_URL` added.
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` added.
- [ ] `NEXT_PUBLIC_PHONE_DISPLAY` added.
- [ ] `NEXT_PUBLIC_FACEBOOK_URL` added.

## 8. SEO

- [ ] Each language has localized title.
- [ ] Each language has localized description.
- [ ] Open Graph metadata exists.
- [ ] OG image exists or fallback exists.
- [ ] `robots.ts` works.
- [ ] `sitemap.ts` works.
- [ ] Canonical URLs are correct.
- [ ] Language alternates/hreflang are correct.
- [ ] No accidental `noindex` in production.

## 9. Accessibility

- [ ] All buttons have accessible names.
- [ ] Mobile menu is keyboard accessible.
- [ ] Language switcher has accessible label.
- [ ] Images have alt text.
- [ ] Color contrast is acceptable.
- [ ] Focus states are visible.
- [ ] Form errors are readable and associated with fields.

## 10. Performance

- [ ] Images optimized.
- [ ] No unnecessarily huge images loaded above the fold.
- [ ] Gallery images lazy-load.
- [ ] Video file size is acceptable.
- [ ] Lighthouse Performance target: 90+ if possible.
- [ ] Lighthouse SEO target: 90+.
- [ ] Lighthouse Accessibility target: 90+.

## 11. Build checks

Run:

```bash
pnpm lint
pnpm build
```

- [ ] `pnpm lint` passes.
- [ ] `pnpm build` passes.
- [ ] No TypeScript errors.
- [ ] No missing import errors.
- [ ] No runtime env crashes during build.

## 12. Client confirmation before launch

Confirm with client:

- [ ] legal company name;
- [ ] legal address;
- [ ] UID/CHE number if needed;
- [ ] VAT/MWST number if needed;
- [ ] permission to use images with children;
- [ ] final email inbox for contact form;
- [ ] final sender email/domain for Resend;
- [ ] final privacy policy;
- [ ] final terms/disclaimer;
- [ ] final phone/WhatsApp number;
- [ ] final Facebook link.
