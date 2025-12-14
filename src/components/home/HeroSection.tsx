import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      </div>

      <div className="container-tight relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-up">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Über 30 Jahre Erfahrung
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
              Mit Sicherheit{" "}
              <span className="text-accent">ein gutes Gefühl!</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              <strong>Ihre Sicherheit steht bei uns im Fokus!</strong>
            </p>
            <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Wir entwickeln ein individuelles Konzept für einzigartige Kunden. 
              Sie zahlen nur das, was Sie wirklich benötigen – mit über 30 Jahren Markterfahrung.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 animate-fade-up animation-delay-300">
              {["Kostenlose Beratung", "Maßgeschneiderte Lösungen", "Regionale Nähe"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-primary-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-400">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">
                  Kostenlose Beratung anfragen
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/leistungen">Unsere Leistungen</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-fade-up animation-delay-300">
            <div className="relative">
              {/* Hero Image */}
              <div className="rounded-3xl overflow-hidden shadow-glow">
                <img 
                  src={`${import.meta.env.BASE_URL}images/sicherheit-gefuehl.png`}
                  alt="Mit Sicherheit ein gutes Gefühl - Schöche Alarm und Sicherheitstechnik"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-glow animate-float">
                <span className="font-bold text-lg">30+</span>
                <span className="block text-xs">Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
}
