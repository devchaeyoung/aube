import { Hero } from "@/components/Hero";
import { HospitalIntro } from "@/components/HospitalIntro";
import { BrandingSection } from "@/components/BrandingSection";
import { MarketingSection } from "@/components/MarketingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HospitalIntro />
      <BrandingSection />
      <MarketingSection />
    </main>
  );
}
