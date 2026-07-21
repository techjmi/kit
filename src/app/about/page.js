import AboutSection from "@/components/pages/AboutPage";

export const metadata = {
  title: "About Us - Khalsa Institute of Technology",
  description:
    "Learn about Khalsa Institute of Technology, a charitable technical institute dedicated to empowering teenagers with Web Design, Software Development, Mobile App Development, and Data Science skills.",
  openGraph: {
    title: "About Us - Khalsa Institute of Technology",
    description:
      "Discover our mission and commitment to tech education and industry-standard training.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
