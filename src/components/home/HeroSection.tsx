import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import sicherheitGefuehlImage from "@/assets/sicherheit-gefuehl.png";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroSection() {
  return (
    <section className="relative gradient-hero overflow-hidden pt-8 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20" />
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-900 mb-6 md:mb-8 bg-black/50">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Über 30 Jahre Erfahrung in Sicherheitstechnik
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Mit Sicherheit{" "}
              <span className="text-accent">ein gutes Gefühl!</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Individuelle Alarm- und Sicherheitstechnik für Ihr Zuhause und Ihr Unternehmen –
              geplant, installiert und betreut aus einer Hand.
            </p>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 h-full items-stretch w-full px-4 rounded-[20px] bg-black">
          <div className="flex flex-col justify-center space-y-5 md:space-y-6">
            <p className="text-base md:text-lg text-white">
              <strong>Ihre Sicherheit steht bei uns im Fokus.</strong> Seit über drei Jahrzehnten
              entwickeln wir maßgeschneiderte Lösungen für Einfamilienhäuser, Betriebe und
              öffentliche Einrichtungen im Vogtland und darüber hinaus.
            </p>
            <p className="text-base md:text-lg text-white/90">
              Sie zahlen nur das, was Sie wirklich benötigen – transparent, normgerecht und
              mit einem festen Ansprechpartner vom ersten Gespräch bis zur Wartung.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Kostenlose Vor-Ort-Analyse", "VdS-konforme Systeme", "24/7-Service nach Bedarf"].map(
                (benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 rounded-full bg-black/40 border border-blue-900 px-3 py-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-xs md:text-sm text-white font-medium">
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

          <div className="relative hidden md:block w-full">
            <div className="relative h-full flex items-center min-h-[400px]">
              <div className="rounded-3xl overflow-hidden shadow-glow ring-1 ring-white/10 w-full h-full scale-110">
                <img
                  src={sicherheitGefuehlImage}
                  alt="Mit Sicherheit ein gutes Gefühl - Schöche Alarm- und Sicherheitstechnik"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -top-4 -right-12 bg-accent text-accent-foreground px-5 py-3 rounded-2xl shadow-glow">
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
