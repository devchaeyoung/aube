import { Hero } from "@/components/Hero";
import { HospitalIntro } from "@/components/HospitalIntro";
import { BrandingSection } from "@/components/BrandingSection";
import { MarketingSection } from "@/components/MarketingSection";
import { SalesSection } from "@/components/SalesSection";
import { MarketingBranding } from "@/components/MarketingBranding";
import { SalesGrowth } from "@/components/SalesGrowth";

export default function Home() {
  return (
    <main>
      <Hero />
      <HospitalIntro />
      <BrandingSection />
      <MarketingSection />
      <SalesSection />
      <MarketingBranding />
      <SalesGrowth />
    </main>
  );
}
