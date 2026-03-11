import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
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

const timelineData = [
  { 
    title: "1990", 
    content: (
      <div>
        <p className="text-muted-foreground text-sm font-normal mb-8 leading-relaxed">
          Gründung des Unternehmens als kleiner Handwerksbetrieb. Mit Leidenschaft für Elektrotechnik und Sicherheit legten wir den Grundstein für Schöche Alarm- und Sicherheitstechnik.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" alt="Gründung" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop" alt="Handwerk" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
        </div>
      </div>
    ) 
  },
  { 
    title: "2000", 
    content: (
      <div>
        <p className="text-muted-foreground text-sm font-normal mb-8 leading-relaxed">
          Erweiterung um Videoüberwachung. Wir integrieren die ersten hochauflösenden Kamerasysteme für Gewerbekunden und erweiteren unser Portfolio maßgeblich.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2660&auto=format&fit=crop" alt="Videoüberwachung" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
        </div>
      </div>
    ) 
  },
  { 
    title: "2010", 
    content: (
      <div>
        <p className="text-muted-foreground text-sm font-normal mb-8 leading-relaxed">
          Einführung von Smart-Home-Lösungen. Sicherheitstechnik wird vernetzt. Alarmanlagen lassen sich nun bequem per Smartphone App steuern und überwachen.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop" alt="Smart Home" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" alt="App Steuerung" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
        </div>
      </div>
    ) 
  },
  { 
    title: "2020", 
    content: (
      <div>
        <p className="text-muted-foreground text-sm font-normal mb-8 leading-relaxed">
          30-jähriges Jubiläum! Ein starker Meilenstein, der unsere Verbundenheit zur Region unterstreicht. Wir danken all unseren Kunden für das große Vertrauen.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop" alt="Team Jubiläum" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
        </div>
      </div>
    ) 
  },
  { 
    title: "Heute", 
    content: (
      <div>
        <p className="text-muted-foreground text-sm font-normal mb-8 leading-relaxed">
          Über 30 Jahre Erfahrung & modernste Technik. Wir entwickeln zukunftssichere VdS-zertifizierte Konzepte und wachsen kontinuierlich mit den Anforderungen des Marktes mit.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" alt="Zukunftsorientiert" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" alt="Data" className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md" />
        </div>
      </div>
    ) 
  },
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
      <Timeline data={timelineData} />

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
              <h3 className="text-xl font-bold text-foreground mb-4">Unser Versprechen</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Wir haben uns entschlossen, ein individuelles Konzept auf einzigartige Kunden zu entwickeln!
                </p>
                <p>
                  Wir bauen unsere Zentrale mit verschiedensten Komponenten ganz auf Ihre Bedürfnisse zusammen 
                  und Sie zahlen nur das, was Sie wirklich benötigen!
                </p>
                <p className="font-semibold text-foreground">
                  Von der Stange? Oder vom Baumarkt? – Das war Gestern!
                </p>
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
