import { Layout } from "@/components/layout/Layout";
import { PreInterface } from "@/components/home/PreInterface";
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
      <PreInterface />
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
