import { Hero } from "@/components/hero/Hero";
import { HospitalIntro } from "@/components/hospital/HospitalIntro";
import { BrandingSection } from "@/components/branding/BrandingSection";
import { MarketingSection } from "@/components/marketing/MarketingSection";
import { SalesSection } from "@/components/sales/SalesSection";
import { MarketingBranding } from "@/components/marketing/MarketingBranding";
import { SalesGrowth } from "@/components/sales/SalesGrowth";
import { SalesIncrease } from "@/components/sales/SalesIncrease";
import { MarketingSection2 } from "@/components/marketing/MarketingSection2";
import { MarketingProcess } from "@/components/marketing/MarketingProcess";
import { MarketingTarget } from "@/components/marketing/MarketingTarget";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import AosInit from "@/components/AosInit";
export default function Home() {
  return (
    <>
      <AosInit />
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
        <MarketingProcess />
        <MarketingTarget />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
