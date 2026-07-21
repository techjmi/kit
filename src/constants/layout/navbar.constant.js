import { SITE_LOGO,  NAVIGATION_LINKS, SOCIAL_MEDIA_HANDLE } from "../global.constant";

export const NAVBAR_CONFIG = {
  logo: {
    src: SITE_LOGO,
    // name: BASIC_DETAILS.site_name,
    href: "/",
    imageSize: "h-10 w-auto",
  },
  navItems: NAVIGATION_LINKS.map(({ key, label, href }) => ({ key, label, href })),
//   social: SOCIAL_MEDIA_HANDLE,
  cta: {
    label: "Contact Us",
    href: (NAVIGATION_LINKS.find((l) => l.key === "contact") || {}).href || "/contact",
    external: false,
  },
};