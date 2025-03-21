import { Hero } from "@/components/hero/Hero";
import { HospitalIntro } from "@/components/hospital/HospitalIntro";
import { BrandingSection } from "@/components/branding/BrandingSection";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { SalesSection } from "@/components/sales/SalesSection";
import { MarketingBranding } from "@/components/marketing/MarketingBranding";
import { SalesGrowth } from "@/components/sales/SalesGrowth";
import { SalesIncrease } from "@/components/sales/SalesIncrease";
import { MarketingSection2 } from "@/components/marketing/MarketingSection2";
export default function Home() {
  return (
    <main>
      <Hero />
      <HospitalIntro />
      <BrandingSection />
      <MarketingSection2 />
      <SalesSection />
      <MarketingBranding />
      <SalesGrowth />
      <SalesIncrease />
      <MarketingSection />
    </main>
  );
}
