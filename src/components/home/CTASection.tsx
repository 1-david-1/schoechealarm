import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Jetzt kostenlose Sicherheitsberatung anfragen
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
            Lassen Sie sich unverbindlich von uns beraten. Wir analysieren Ihre 
            Situation und erstellen ein individuelles Sicherheitskonzept für Sie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">
                Beratungstermin vereinbaren
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+493743480628">
                <Phone className="w-5 h-5 mr-2" />
                037434 80628
              </a>
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm">
            Kostenlos & unverbindlich • Persönliche Beratung vor Ort • Innerhalb von 48h Rückmeldung
          </p>
        </div>
      </div>
    </section>
  );
}
