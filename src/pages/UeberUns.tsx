import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  Users, 
  Award, 
  MapPin, 
  Heart,
  Target,
  Handshake,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Persönliche Betreuung",
    description: "Bei uns sind Sie keine Nummer. Wir nehmen uns Zeit für Ihre Anliegen und sind auch nach dem Projekt für Sie da.",
  },
  {
    icon: Target,
    title: "Höchste Qualität",
    description: "Wir arbeiten nur mit namhaften Herstellern und setzen auf bewährte, zuverlässige Technik.",
  },
  {
    icon: Handshake,
    title: "Ehrliche Beratung",
    description: "Wir empfehlen nur das, was Sie wirklich brauchen. Kein Upselling, keine versteckten Kosten.",
  },
];

const timeline = [
  { year: "1990", event: "Gründung des Unternehmens" },
  { year: "2000", event: "Erweiterung um Videoüberwachung" },
  { year: "2010", event: "Einführung von Smart-Home-Lösungen" },
  { year: "2020", event: "30-jähriges Jubiläum" },
  { year: "Heute", event: "Über 30 Jahre Erfahrung & moderne Technik" },
];

export default function UeberUns() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Über uns
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sicherheit aus Überzeugung
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Seit über 30 Jahren schützen wir, was Ihnen wichtig ist. 
              Lernen Sie uns und unsere Philosophie kennen.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vom Handwerksbetrieb zum Sicherheitspartner
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Was als kleiner Handwerksbetrieb begann, hat sich über die Jahrzehnte 
                  zu einem etablierten Sicherheitsunternehmen entwickelt. Seit 1990 
                  planen, installieren und warten wir Sicherheitstechnik für 
                  Privathaushalte und Gewerbebetriebe in der Region.
                </p>
                <p>
                  Dabei sind wir unseren Wurzeln treu geblieben: persönliche Beratung, 
                  handwerkliche Qualität und ein offenes Ohr für die Wünsche unserer 
                  Kunden. Keine anonymen Call-Center, keine Baumarkt-Lösungen – 
                  sondern individuelle Sicherheitskonzepte vom Fachmann.
                </p>
                <p>
                  Heute verbinden wir traditionelle Werte mit modernster Technik. 
                  Unsere Systeme sind zukunftssicher, erweiterbar und auf dem 
                  neuesten Stand der Technik.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "30+", label: "Jahre Erfahrung" },
                { icon: Award, value: "100%", label: "Qualitätsanspruch" },
                { icon: MapPin, value: "Regional", label: "Verwurzelt" },
                { icon: Heart, value: "Persönlich", label: "Für Sie da" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <span className="block text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground">
              Diese Grundsätze leiten uns bei jedem Projekt – Tag für Tag.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Unsere Geschichte
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-accent/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent font-bold">{item.year}</span>
                  <p className="text-foreground mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-slate-50">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Warum Schöche Alarm- und Sicherheitstechnik?
              </h2>
              <div className="space-y-4">
                {[
                  "Über 30 Jahre Erfahrung in der Sicherheitsbranche",
                  "Inhabergeführtes Unternehmen mit persönlichem Kontakt",
                  "Regionale Verwurzelung und schnelle Reaktionszeiten",
                  "Individuelle Lösungen statt Standard-Pakete",
                  "Langfristige Betreuung mit zuverlässigem Service",
                  "Faire Preise ohne versteckte Kosten",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
              <blockquote className="text-lg text-foreground italic mb-6">
                "Sicherheit ist Vertrauenssache. Deshalb nehmen wir uns Zeit für 
                jeden Kunden und jedes Projekt. Denn nur wer die individuellen 
                Anforderungen kennt, kann die passende Lösung finden."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">AS</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Andreas Schöche</span>
                  <span className="text-sm text-muted-foreground">Inhaber</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Lernen Sie uns persönlich kennen
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie einen unverbindlichen Beratungstermin und überzeugen 
            Sie sich selbst von unserer Arbeitsweise.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/kontakt">
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
