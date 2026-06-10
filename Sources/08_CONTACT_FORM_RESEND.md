# 08 — Contact Form and Resend Implementation

## Goal
Create a simple, reliable contact form that sends website requests to the business email through Resend.

## Business email

```txt
plazaswiss@gmail.com
```

## Phone / WhatsApp

```txt
+41 79 61 52 634
```

WhatsApp link:

```txt
https://wa.me/41796152634
```

Phone link:

```txt
tel:+41796152634
```

Email link:

```txt
mailto:plazaswiss@gmail.com
```

Facebook:

```txt
https://www.facebook.com/saltotrampolino
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

Create `.env.local` during development.

## Recommended form fields

### Required

- name;
- email;
- message.

### Optional

- phone;
- event type;
- city/place;
- approximate event date;
- preferred language.

## Event type options

Italian labels:

```txt
Festa privata
Compleanno
Evento aziendale
Evento pubblico
Evento scolastico
Festival / sagra
Altro
```

Internal values:

```txt
private_party
birthday
corporate_event
public_event
school_event
festival
other
```

## Validation rules

Use Zod.

Recommended schema:

```ts
import {z} from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  preferredLanguage: z.string().optional(),
  eventType: z.string().optional(),
  place: z.string().optional(),
  approximateDate: z.string().optional(),
  message: z.string().min(10, 'Message is too short'),
  honeypot: z.string().optional()
});

export type ContactFormValues = z.infer<typeof contactSchema>;
```

## API route

Recommended path:

```txt
src/app/api/contact/route.ts
```

Example implementation:

```ts
import {NextResponse} from 'next/server';
import {Resend} from 'resend';
import {z} from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  preferredLanguage: z.string().optional(),
  eventType: z.string().optional(),
  place: z.string().optional(),
  approximateDate: z.string().optional(),
  message: z.string().min(10),
  honeypot: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ok: true});
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL || !process.env.RESEND_FROM_EMAIL) {
      return NextResponse.json(
        {ok: false, message: 'Email service is not configured'},
        {status: 500}
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New Salto Trampolino request${data.eventType ? ` — ${data.eventType}` : ''}`,
      text: `
New website request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || '-'}
Preferred language: ${data.preferredLanguage || '-'}
Event type: ${data.eventType || '-'}
Place / city: ${data.place || '-'}
Approximate date: ${data.approximateDate || '-'}

Message:
${data.message}
      `.trim()
    });

    return NextResponse.json({ok: true});
  } catch (error) {
    return NextResponse.json(
      {ok: false, message: 'Invalid request'},
      {status: 400}
    );
  }
}
```

## Client behavior

The form must show:

- idle state;
- validation errors;
- loading state;
- success state;
- error state.

Success message in Italian:

```txt
Grazie! La tua richiesta è stata inviata. Ti risponderemo il prima possibile.
```

Error message in Italian:

```txt
Si è verificato un problema durante l’invio. Riprova o contattaci direttamente via email o WhatsApp.
```

## UX recommendation

The contact section should show both direct contacts and the form.

Desktop layout:

```txt
Left: contact cards and CTA buttons
Right: contact form
```

Mobile layout:

```txt
Top: short text and WhatsApp button
Then: form
Then: phone/email/Facebook links
```

## Resend setup checklist

1. Create Resend account.
2. Add and verify sending domain if possible.
3. Create API key.
4. Add `RESEND_API_KEY` to Vercel environment variables.
5. Add `CONTACT_EMAIL` to Vercel environment variables.
6. Add `RESEND_FROM_EMAIL` to Vercel environment variables.
7. Test contact form in Preview deployment.
8. Test production after domain is connected.

## Free-tier note

The expected volume for this landing website should fit within Resend's free tier at the beginning.
