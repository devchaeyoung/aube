import { Hero } from "@/components/Hero";
import { HospitalIntro } from "@/components/HospitalIntro";
import { BrandingSection } from "@/components/BrandingSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HospitalIntro />
      <BrandingSection />
    </main>
  );
}
