import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import WhatWeDo from "@/components/WhatWeDo";
import TechStack from "@/components/TechStack";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import PriceCalculator from "@/components/PriceCalculator";
import Testimonials from "@/components/Testimonials";
import DiscordWidget from "@/components/DiscordWidget";
import InteractiveDemo from "@/components/InteractiveDemo";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <WhatWeDo />
      <TechStack />
      <CaseStudy />
      <InteractiveDemo />
      <Process />
      <PriceCalculator />
      <Testimonials />
      <DiscordWidget />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
