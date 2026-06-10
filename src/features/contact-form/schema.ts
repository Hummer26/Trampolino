import {z} from "zod";

export const contactSchema = z.object({
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

export type ContactFormValues = z.infer<typeof contactSchema>;
