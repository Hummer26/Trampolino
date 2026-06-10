export type ServiceItem = {
  id: string;
  title: string;
  shortText: string;
  longText: string;
  highlights: string[];
};

export type SiteContent = {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    badges: string[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  events: {
    title: string;
    subtitle: string;
    items: string[];
  };
  coverage: {
    title: string;
    text: string;
    cta: string;
  };
  safety: {
    title: string;
    text: string;
    points: string[];
    note: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  faq: {
    title: string;
    items: Array<{question: string; answer: string}>;
  };
  contact: {
    title: string;
    subtitle: string;
    buttons: {
      phone: string;
      whatsapp: string;
      email: string;
      facebook: string;
    };
    form: {
      name: string;
      email: string;
      phone: string;
      preferredLanguage: string;
      eventType: string;
      place: string;
      approximateDate: string;
      message: string;
      submit: string;
      success: string;
      error: string;
      selectPlaceholder: string;
    };
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
    placeholder: string;
  };
};
