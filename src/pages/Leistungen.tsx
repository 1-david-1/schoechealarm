import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Camera, 
  KeyRound, 
  Flame, 
  Settings, 
  Wrench,
  ArrowRight,
  CheckCircle2,
  Phone
} from "lucide-react";

const services = [
  {
    id: "einbruch",
    icon: Shield,
    title: "Einbruchmeldeanlagen",
    subtitle: "Professioneller Einbruchschutz für Ihr Eigentum",
    description: "Unsere Einbruchmeldeanlagen erkennen unberechtigtes Eindringen zuverlässig und alarmieren Sie sowie optional eine Notruf- und Serviceleitstelle. So sind Sie rund um die Uhr geschützt – ob zu Hause oder unterwegs.",
    features: [
      "Aufschaltung auf 24/7 Notruf- und Serviceleitstellen",
      "Funk- oder drahtgebundene Systeme",
      "Smartphone-App zur Fernüberwachung",
      "Sabotagegeschützte Komponenten",
      "VdS-zertifizierte Anlagen verfügbar",
      "Integration mit Smart-Home-Systemen",
    ],
    useCases: ["Einfamilienhäuser", "Wohnungen", "Gewerbeobjekte", "Büros", "Lagerhallen"],
  },
  {
    id: "video",
    icon: Camera,
    title: "Videoüberwachung",
    subtitle: "Hochauflösende Kamerasysteme für maximale Sicherheit",
    description: "Mit modernen Kamerasystemen behalten Sie Ihr Objekt jederzeit im Blick. Hochauflösende Bilder, Nachtsicht und Fernzugriff per Smartphone machen die Überwachung einfach und effektiv.",
    features: [
      "Full-HD und 4K Auflösung",
      "Tag- und Nachtsicht",
      "Wetterfeste Außenkameras",
      "Bewegungserkennung mit Benachrichtigung",
      "Sichere Aufzeichnung lokal oder in der Cloud",
      "DSGVO-konforme Lösungen",
    ],
    useCases: ["Außengelände", "Eingangsbereiche", "Parkplätze", "Verkaufsräume", "Produktionshallen"],
  },
  {
    id: "zutritt",
    icon: KeyRound,
    title: "Zutrittskontrollsysteme",
    subtitle: "Kontrollierter Zugang zu sensiblen Bereichen",
    description: "Bestimmen Sie, wer wann Zutritt zu welchen Bereichen erhält. Unsere Zutrittskontrollsysteme arbeiten mit Code, Karte, Transponder oder biometrischen Daten und protokollieren alle Zugänge lückenlos.",
    features: [
      "PIN-Code, Karte, Transponder oder Fingerprint",
      "Zeitgesteuerte Zutrittsberechtigungen",
      "Protokollierung aller Zutritte",
      "Integration in bestehende Schließsysteme",
      "Mehrstufige Sicherheitszonen",
      "Verwaltung über Software oder App",
    ],
    useCases: ["Praxen", "Kanzleien", "Bürokomplexe", "Produktionsbereiche", "Serverräume"],
  },
  {
    id: "brand",
    icon: Flame,
    title: "Brand- und Rauchmeldeanlagen",
    subtitle: "Frühzeitige Erkennung rettet Leben",
    description: "Brandmeldeanlagen erkennen Rauch und Feuer in einem frühen Stadium und ermöglichen schnelles Handeln. Schützen Sie Menschenleben und Sachwerte mit VdS-konformen Systemen.",
    features: [
      "Optische und thermische Melder",
      "Aufschaltung auf Feuerwehr möglich",
      "Automatische Alarmierung",
      "Regelmäßige Wartung nach DIN 14675",
      "Integration in Gesamtsicherheitskonzept",
      "Erfüllung gesetzlicher Anforderungen",
    ],
    useCases: ["Wohngebäude", "Gewerbebetriebe", "Produktionsstätten", "Hotels", "Pflegeeinrichtungen"],
  },
  {
    id: "konzepte",
    icon: Settings,
    title: "Individuelle Sicherheitskonzepte",
    subtitle: "Maßgeschneiderte Lösungen für Ihre Anforderungen",
    description: "Jedes Objekt ist anders. Deshalb analysieren wir Ihre Situation vor Ort und erstellen ein individuelles Sicherheitskonzept, das exakt auf Ihre Bedürfnisse und Ihr Budget abgestimmt ist.",
    features: [
      "Kostenlose Vor-Ort-Analyse",
      "Schwachstellen-Identifikation",
      "Budgetgerechte Lösungen",
      "Erweiterbare Systeme",
      "Berücksichtigung von Versicherungsanforderungen",
      "Transparente Kosten ohne versteckte Gebühren",
    ],
    useCases: ["Neubauten", "Bestandsgebäude", "Gewerbe-Neuausrichtung", "Nach Einbrüchen", "Erweiterungen"],
  },
  {
    id: "service",
    icon: Wrench,
    title: "Montage, Wartung & Service",
    subtitle: "Zuverlässiger Service aus einer Hand",
    description: "Von der fachgerechten Installation über die Einweisung bis zur regelmäßigen Wartung – wir begleiten Sie langfristig. Bei Störungen sind wir schnell für Sie da.",
    features: [
      "Fachgerechte Montage durch zertifizierte Techniker",
      "Ausführliche Einweisung in Ihre Anlage",
      "Regelmäßige Wartung und Inspektion",
      "Schneller Störungsdienst",
      "Erreichbarkeit auch außerhalb der Bürozeiten",
      "Ersatzteilversorgung und Updates",
    ],
    useCases: ["Neuinstallationen", "Bestandsanlagen", "Wartungsverträge", "Reparaturen", "Modernisierungen"],
  },
];

export default function Leistungen() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Unsere Leistungen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sicherheitslösungen für jeden Bedarf
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Von der Einbruchmeldeanlage bis zum Brandschutz – wir bieten 
              Ihnen umfassende Sicherheitstechnik aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-slate-50"}`}
        >
          <div className="container-tight">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-accent font-medium mb-6">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="default" size="lg" asChild>
                  <Link to="/kontakt">
                    Beratung anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Use Cases Card */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-card rounded-3xl p-8 border border-border shadow-soft">
                  <h3 className="font-bold text-foreground mb-6">Typische Einsatzbereiche</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="px-4 py-2 bg-accent/10 text-accent rounded-xl text-sm font-medium"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Welche Lösung passt zu Ihnen?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich unverbindlich beraten. Wir finden gemeinsam die 
            optimale Sicherheitslösung für Ihre Anforderungen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">Beratung anfragen</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+493743480628">
                <Phone className="w-5 h-5 mr-2" />
                037434 80628
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
