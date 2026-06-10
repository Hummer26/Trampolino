"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {Send} from "lucide-react";
import type {ReactNode} from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {eventTypeOptions} from "@/lib/contact";
import type {Locale} from "@/i18n/routing";
import type {SiteContent} from "@/types/site";
import {contactSchema, type ContactFormValues} from "./schema";

type Props = {
  labels: SiteContent["contact"]["form"];
  locale: Locale;
};

export function ContactForm({labels, locale}: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting}
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {preferredLanguage: locale, honeypot: ""}
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset({preferredLanguage: locale, honeypot: ""});
  }

  const errorText = (field: keyof ContactFormValues) => errors[field] ? `${labels[field as keyof typeof labels] || field}` : "";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-white p-5 shadow-soft sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={labels.name} error={errorText("name")}>
          <Input {...register("name")} autoComplete="name" />
        </Field>
        <Field label={labels.email} error={errorText("email")}>
          <Input {...register("email")} type="email" autoComplete="email" />
        </Field>
        <Field label={labels.phone}>
          <Input {...register("phone")} type="tel" autoComplete="tel" />
        </Field>
        <Field label={labels.preferredLanguage}>
          <select {...register("preferredLanguage")} className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
            <option value="it">Italiano</option>
            <option value="en">English</option>
            <option value="fr">Francais</option>
            <option value="es">Espanol</option>
            <option value="de">Deutsch</option>
          </select>
        </Field>
        <Field label={labels.eventType}>
          <select {...register("eventType")} className="h-12 w-full rounded-xl border border-blue-100 bg-white px-4 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
            <option value="">{labels.selectPlaceholder}</option>
            {eventTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.labels[locale]}
              </option>
            ))}
          </select>
        </Field>
        <Field label={labels.place}>
          <Input {...register("place")} />
        </Field>
        <Field label={labels.approximateDate}>
          <Input {...register("approximateDate")} />
        </Field>
        <div className="hidden" aria-hidden="true">
          <label>
            Website
            <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
          </label>
        </div>
        <Field label={labels.message} error={errorText("message")} className="sm:col-span-2">
          <Textarea {...register("message")} />
        </Field>
      </div>
      <Button type="submit" size="lg" className="mt-5 w-full sm:w-auto" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? "..." : labels.submit}
      </Button>
      {status === "success" && <p className="mt-4 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-800">{labels.success}</p>}
      {status === "error" && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{labels.error}</p>}
    </form>
  );
}

function Field({label, error, className, children}: {label: string; error?: string; className?: string; children: ReactNode}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-bold text-slate-800">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs font-semibold text-brand-red">{error}</span> : null}
    </label>
  );
}
