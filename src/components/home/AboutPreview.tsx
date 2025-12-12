import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Users, Award, MapPin } from "lucide-react";

const highlights = [
  "Über 30 Jahre Branchenerfahrung",
  "Individuelle Beratung vor Ort",
  "Regionale Nähe & schnelle Reaktionszeiten",
  "Zukunftssichere, erweiterbare Systeme",
  "Persönlicher Ansprechpartner",
  "Keine Baumarkt-Lösungen, sondern Profi-Qualität",
];

const stats = [
  { icon: Users, value: "30+", label: "Jahre Erfahrung" },
  { icon: Award, value: "100%", label: "Qualitätsanspruch" },
  { icon: MapPin, value: "Regional", label: "Vor Ort für Sie da" },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sicherheit ist Vertrauenssache
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Seit über 30 Jahren schützen wir Privathaushalte und Gewerbebetriebe 
              in der Region mit maßgeschneiderten Sicherheitslösungen. Als 
              inhabergeführtes Unternehmen setzen wir auf persönliche Beratung, 
              höchste Qualität und langjährige Partnerschaften.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              <Link to="/ueber-uns">
                Mehr über uns erfahren
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="grid gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300 flex items-center gap-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-foreground block">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
