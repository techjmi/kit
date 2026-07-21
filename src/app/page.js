import Hero from "@/components/layout/Hero";
import FeaturesSection from "@/components/shared/FeaturesSection";
import Partner from "@/components/organisms/Partner";
import Testimonial from "@/components/organisms/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="-translate-y-1/2">
        <FeaturesSection />
      </div>
      <Partner />
      <Testimonial />
    </>
  );
}
