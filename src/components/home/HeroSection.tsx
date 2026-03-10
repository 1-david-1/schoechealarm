import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import sicherheitGefuehlImage from "@/assets/sicherheit-gefuehl.png";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroSection() {
  return (
    <section className="relative gradient-hero overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 md:mb-8">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Über 30 Jahre Erfahrung in Sicherheitstechnik
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Mit Sicherheit{" "}
              <span className="text-accent">ein gutes Gefühl!</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Individuelle Alarm- und Sicherheitstechnik für Ihr Zuhause und Ihr Unternehmen –
              geplant, installiert und betreut aus einer Hand.
            </p>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-stretch">
          <div className="flex flex-col justify-center space-y-5 md:space-y-6">
            <p className="text-base md:text-lg text-primary-foreground/80">
              <strong>Ihre Sicherheit steht bei uns im Fokus.</strong> Seit über drei Jahrzehnten
              entwickeln wir maßgeschneiderte Lösungen für Einfamilienhäuser, Betriebe und
              öffentliche Einrichtungen im Vogtland und darüber hinaus.
            </p>
            <p className="text-base md:text-lg text-primary-foreground/70">
              Sie zahlen nur das, was Sie wirklich benötigen – transparent, normgerecht und
              mit einem festen Ansprechpartner vom ersten Gespräch bis zur Wartung.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Kostenlose Vor-Ort-Analyse", "VdS-konforme Systeme", "24/7-Service nach Bedarf"].map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 rounded-full bg-background/60 border border-border/70 px-3 py-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-xs md:text-sm text-primary-foreground/80">
                      {benefit}
                    </span>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="xl" asChild>
                <Link to="/kontakt">
                  Kostenlose Beratung anfragen
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/leistungen">Unsere Leistungen entdecken</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative h-full flex items-center">
              <div className="rounded-3xl overflow-hidden shadow-glow ring-1 ring-white/10 w-full">
                <img
                  src={sicherheitGefuehlImage}
                  alt="Mit Sicherheit ein gutes Gefühl - Schöche Alarm- und Sicherheitstechnik"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-glow">
                <span className="font-bold text-lg leading-none">30+</span>
                <span className="block text-xs leading-tight">
                  Jahre
                  <br />
                  Erfahrung
                </span>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2 bg-background/60 backdrop-blur">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
}
