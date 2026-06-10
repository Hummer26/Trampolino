export const contactLinks = {
  phoneHref: "tel:+41796152634",
  emailHref: "mailto:plazaswiss@gmail.com",
  whatsappHref: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "41796152634"}`,
  facebookHref: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/saltotrampolino",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+41 79 61 52 634",
  email: "plazaswiss@gmail.com"
};

export const eventTypeOptions = [
  {value: "private_party", labels: {it: "Festa privata", en: "Private party", fr: "Fete privee", es: "Fiesta privada", de: "Private Feier"}},
  {value: "birthday", labels: {it: "Compleanno", en: "Birthday party", fr: "Anniversaire", es: "Cumpleanos", de: "Geburtstag"}},
  {value: "corporate_event", labels: {it: "Evento aziendale", en: "Corporate event", fr: "Evenement d'entreprise", es: "Evento corporativo", de: "Firmenevent"}},
  {value: "public_event", labels: {it: "Evento pubblico", en: "Public event", fr: "Evenement public", es: "Evento publico", de: "Oeffentlicher Event"}},
  {value: "school_event", labels: {it: "Evento scolastico", en: "School event", fr: "Evenement scolaire", es: "Evento escolar", de: "Schulevent"}},
  {value: "festival", labels: {it: "Festival / sagra", en: "Festival / fair", fr: "Festival / foire", es: "Festival / feria", de: "Festival / Markt"}},
  {value: "other", labels: {it: "Altro", en: "Other", fr: "Autre", es: "Otro", de: "Andere"}}
] as const;
