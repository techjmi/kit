import { LOGO_LINK, WEBSITE_LINK,LINKEDIN_LINK } from "../../public/assets/link";

// global constant file
const SITE_NAME = "Khalsa Institute of Technology";

export const BASIC_DETAILS = {
  site_name: SITE_NAME,
  site_title: `${SITE_NAME} — Training and Placement Organization`,
  site_description_short: `${SITE_NAME} is a leading training and placement organization in Gaya.`,
  site_description_long: `${SITE_NAME} helps students and job seekers with career-ready training, placement support, and professional skill development.`,
  site_email: "info@kitedu.org",
  site_phone: "+91-8986339161",
  site_address: "Tara Complex, Near Punjab National Bank, Nutan Nagar, Gaya",
};
export const SOCIAL_MEDIA_HANDLE={
LINKED_URL:LINKEDIN_LINK,
TWITTER_URL:'',
INSTA_URL:'',
YOUTUBE_URL:''
}

export const NAVIGATION_LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "courses", label: "Courses", href: "/courses" },
  { key: "contact", label: "Contact", href: "/contact" },
];
export const SITE_LOGO = LOGO_LINK;
export const SITE_URL = WEBSITE_LINK;
export const SITE_CANONICAL = WEBSITE_LINK;
export const SITE_METADATA_BASE = WEBSITE_LINK;
