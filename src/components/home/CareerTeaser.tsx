import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Heart } from "lucide-react";

const benefits = [
  { icon: Briefcase, text: "Abwechslungsreiche Aufgaben" },
  { icon: Users, text: "Familiäres Team" },
  { icon: Heart, text: "Faire Konditionen" },
];

export function CareerTeaser() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-3xl p-8 md:p-12 lg:p-16 border border-accent/20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
                <Briefcase className="w-4 h-4" />
                Wir suchen Verstärkung
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Werden Sie Teil unseres Teams
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Wir suchen einen engagierten <strong>Techniker/in (m/w/d)</strong> für 
                die Installation und Wartung von Sicherheitssystemen.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-2">
                    <benefit.icon className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="accent" size="lg" asChild>
                <Link to="/karriere">
                  Stellenangebote ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-accent/30 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center">
                      <Users className="w-16 h-16 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-card px-4 py-2 rounded-xl shadow-medium">
                  <span className="font-bold text-accent">Team</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card px-4 py-2 rounded-xl shadow-medium">
                  <span className="font-bold text-accent">Karriere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
