import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Camera, 
  KeyRound, 
  Flame, 
  Settings, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Einbruchmeldeanlagen",
    description: "Professionelle Alarmsysteme mit Aufschaltung auf Notruf- und Serviceleitstellen. Für maximalen Schutz rund um die Uhr.",
    href: "/leistungen#einbruch",
  },
  {
    icon: Camera,
    title: "Videoüberwachung",
    description: "Hochauflösende Kamerasysteme für Innen- und Außenbereiche. Auch per Smartphone abrufbar.",
    href: "/leistungen#video",
  },
  {
    icon: KeyRound,
    title: "Zutrittskontrolle",
    description: "Kontrollierter Zugang zu sensiblen Bereichen durch moderne Zutrittssysteme mit Code, Karte oder Biometrie.",
    href: "/leistungen#zutritt",
  },
  {
    icon: Flame,
    title: "Brandmeldeanlagen",
    description: "Frühzeitige Erkennung von Rauch und Feuer schützt Leben und Sachwerte. VdS-konforme Systeme.",
    href: "/leistungen#brand",
  },
  {
    icon: Settings,
    title: "Sicherheitskonzepte",
    description: "Individuelle Planung Ihrer Sicherheitslösung – exakt auf Ihre Anforderungen und Ihr Budget abgestimmt.",
    href: "/leistungen#konzepte",
  },
  {
    icon: Wrench,
    title: "Service & Wartung",
    description: "Fachgerechte Montage, Inbetriebnahme und regelmäßige Wartung durch zertifizierte Techniker.",
    href: "/leistungen#service",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Alles aus einer Hand für Ihre Sicherheit
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der Beratung über die Planung bis zur Installation und Wartung – 
            wir begleiten Sie auf dem Weg zu mehr Sicherheit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-large transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <Link to="/leistungen">
              Alle Leistungen ansehen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
