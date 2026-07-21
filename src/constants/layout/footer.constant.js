import { BASIC_DETAILS, NAVIGATION_LINKS, SOCIAL_MEDIA_HANDLE, SITE_LOGO } from "../global.constant";

/**
 * Footer configuration for the application.
 * Uses shared values from `global.constant.js` where applicable.
 */
export const FOOTER_CONFIG = {
  brand: {
    // name: BASIC_DETAILS.site_name,
    logoUrl: SITE_LOGO,
    tagline: "Empowering teenagers with tomorrow's tech skills.",
    href: "/",
  },
  description:
    "A charitable technical institute that teaches Web Design, Software Development, Mobile App Development, and Data Science with AI & ML to the next generation.",
  sections: [
    {
      title: "Programs",
      links: [
        { label: "Web Design", href: "/courses/web-design" },
        { label: "Software Development", href: "/courses/software-development" },
        { label: "Mobile App Development", href: "/courses/mobile-app" },
        { label: "AI & ML", href: "/courses/data-science" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Courses", href: "/courses" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Admissions", href: "/admissions" },
        { label: "Scholarships", href: "/scholarships" },
        { label: "FAQs", href: "/faq" },
      ],
    },
  ],
  socials: [
    // Prefer values from SOCIAL_MEDIA_HANDLE when available, fallback to explicit URLs
    { platform: "linkedin", url: SOCIAL_MEDIA_HANDLE?.LINKED_URL || "https://www.linkedin.com/company/khalsa-institute-of-technology" },
    { platform: "twitter", url: SOCIAL_MEDIA_HANDLE?.TWITTER_URL || "https://twitter.com/khalsa_tech" },
    { platform: "facebook", url: "https://www.facebook.com/khalsainstitute" },
    { platform: "instagram", url: SOCIAL_MEDIA_HANDLE?.INSTA_URL || "https://www.instagram.com/khalsainstitute" },
  ],
  contact: {
    title: "Contact",
    email: BASIC_DETAILS.site_email || "info@kitedu.org",
    phone: BASIC_DETAILS.site_phone || "+91-8986339161",
    address: BASIC_DETAILS.site_address || "Tara Complex, Near Punjab National Bank, Nutan Nagar, Gaya, India",
  },
  // Use any shared legal/navigation links when possible
  legal: [
    // If NAVIGATION_LINKS contains privacy/terms entries use them, otherwise fallback to defaults
    ...(NAVIGATION_LINKS.filter((l) => ["privacy", "terms"].includes(l.key)) || []),
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  copyright: {
    text: `${BASIC_DETAILS.site_name}. All rights reserved.`,
  },
  madeWith: {
    text: "Made with love in India",
  },
};
