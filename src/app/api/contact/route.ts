import {getCloudflareContext} from "@opennextjs/cloudflare";
import {NextResponse} from "next/server";
import {Resend} from "resend";
import {ZodError} from "zod";

import {contactSchema} from "@/features/contact-form/schema";

async function getEmailConfig() {
  try {
    const {env} = await getCloudflareContext({async: true});
    const cloudflareEnv = env as CloudflareEnv & Record<string, string | undefined>;

    return {
      apiKey: cloudflareEnv.RESEND_API_KEY || process.env.RESEND_API_KEY,
      to: cloudflareEnv.CONTACT_EMAIL || process.env.CONTACT_EMAIL || "plazaswiss@gmail.com",
      from: cloudflareEnv.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL
    };
  } catch {
    return {
      apiKey: process.env.RESEND_API_KEY,
      to: process.env.CONTACT_EMAIL || "plazaswiss@gmail.com",
      from: process.env.RESEND_FROM_EMAIL
    };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ok: true});
    }

    const {apiKey, to, from} = await getEmailConfig();

    if (!apiKey || !from) {
      console.error("Contact form email service is not configured", {
        hasResendApiKey: Boolean(apiKey),
        hasResendFromEmail: Boolean(from),
        hasContactEmail: Boolean(to)
      });
      return NextResponse.json({ok: false, message: "Email service is not configured"}, {status: 500});
    }

    const resend = new Resend(apiKey);
    const {error} = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `New Salto Trampolino request${data.eventType ? ` - ${data.eventType}` : ""}`,
      text: `
New website request

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "-"}
Preferred language: ${data.preferredLanguage || "-"}
Event type: ${data.eventType || "-"}
Place / city: ${data.place || "-"}
Approximate date: ${data.approximateDate || "-"}

Message:
${data.message}
      `.trim()
    });

    if (error) {
      console.error("Resend rejected contact form submission", error);
      return NextResponse.json({ok: false, message: "Unable to send message"}, {status: 502});
    }

    return NextResponse.json({ok: true});
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof ZodError) {
      return NextResponse.json({ok: false, message: "Invalid request"}, {status: 400});
    }

    console.error("Contact form submission failed", error);
    return NextResponse.json({ok: false, message: "Unable to send message"}, {status: 502});
  }
}
