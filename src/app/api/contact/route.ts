import {NextResponse} from "next/server";
import {Resend} from "resend";
import {ZodError} from "zod";

import {contactSchema} from "@/features/contact-form/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    if (data.honeypot) {
      return NextResponse.json({ok: true});
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL || "plazaswiss@gmail.com";
    const from = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !from) {
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
