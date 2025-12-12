import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CareerTeaser } from "@/components/home/CareerTeaser";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <ProcessSection />
      <TrustSection />
      <CareerTeaser />
      <CTASection />
    </Layout>
  );
};

export default Index;
