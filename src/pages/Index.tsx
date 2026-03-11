import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { GoogleReview } from "@/components/home/GoogleReview";
import { CareerTeaser } from "@/components/home/CareerTeaser";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <ProcessSection />
      <GoogleReview />
      <CareerTeaser />
      <CTASection />
    </Layout>
  );
};

export default Index;
