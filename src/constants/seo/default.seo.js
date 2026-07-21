import { BASIC_DETAILS, SITE_LOGO, SITE_URL, SITE_CANONICAL, SITE_METADATA_BASE } from "../global.constant";

export const DEFAULT_SEO_CONSTANTS = {
  defaultTitle: `${BASIC_DETAILS.site_title}`,
  defaultDescription: `${BASIC_DETAILS.site_description_long}`,
  title: `${BASIC_DETAILS.site_title}`,
  description: `${BASIC_DETAILS.site_description_short}`,
  author: `${BASIC_DETAILS.site_name}`,
  email: `${BASIC_DETAILS.site_email}`,
  phone: `${BASIC_DETAILS.site_phone}`,
  address: `${BASIC_DETAILS.site_address}`,
  image: SITE_LOGO,
  keywords: `${BASIC_DETAILS.site_name}, training, placement, Gaya, career development, job readiness`,
  url: SITE_URL,
  canonical: SITE_CANONICAL,
  metadataBase: SITE_METADATA_BASE,
  type: "website",
  locale: "en_US",
};

export const DEFAULT_SEO_FAQ = [
  {
    question: `What services does ${BASIC_DETAILS.site_name} provide?`,
    answer: `${BASIC_DETAILS.site_name} offers training, placement support, career guidance, and interview preparation for students and job seekers.`,
  },
  {
    question: `How can I contact ${BASIC_DETAILS.site_name}?`,
    answer: `You can reach us at ${BASIC_DETAILS.site_phone} or ${BASIC_DETAILS.site_email}.`,
  },
  {
    question: `Where is ${BASIC_DETAILS.site_name} located?`,
    answer: `${BASIC_DETAILS.site_name} is located at ${BASIC_DETAILS.site_address} in Gaya.`,
  },
];

export const DEFAULT_SEO_ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${BASIC_DETAILS.site_name}`,
  url: "https://kitedu.org",
  logo: SITE_LOGO,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `${BASIC_DETAILS.site_phone}`,
      contactType: "Customer Service",
      email: `${BASIC_DETAILS.site_email}`,
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BASIC_DETAILS.site_address}`,
    addressLocality: "Gaya",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
};

export const DEFAULT_SEO_FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: DEFAULT_SEO_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};