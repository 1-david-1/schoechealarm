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
  Phone,
  Smartphone,
  Radio,
  Building2,
  Home,
  Globe
} from "lucide-react";

const mainServices = [
  {
    id: "konzepte",
    icon: Shield,
    title: "Leistungen und Kompetenzen",
    subtitle: "Ganzheitliche Sicherheitslösungen",
    description: "Wir entwickeln Lösungskonzepte für das gesamte Spektrum Objektsicherung, Geländesicherung, Brandmeldeanlagen nach VDS. Dabei umfasst unser langjähriger Klientenkreis Unternehmen der unterschiedlichsten Größen und Branchen, sowie kleine und große Privathäuser, Wohnungen und Ferienhäuser.",
    imagePlaceholder: "Sicherheitsberatung vor Ort"
  },
];

const consultingServices = [
  {
    icon: Building2,
    title: "Gewerbliche und private Objekte",
    description: "Individuelle Beratung für Unternehmen und Privatpersonen"
  },
  {
    icon: Shield,
    title: "Außen- und Freilandabsicherung",
    description: "Schutz für Ihr gesamtes Gelände und Außenbereiche"
  },
  {
    icon: Camera,
    title: "Videoüberwachung",
    description: "Moderne Kamerasysteme für maximale Sicherheit"
  },
  {
    icon: KeyRound,
    title: "Zutrittskontrollmanagement",
    description: "Kontrollierter Zugang zu sensiblen Bereichen"
  },
  {
    icon: Flame,
    title: "Brandmeldesystem (VdS)",
    description: "VdS-zertifizierte Brandmeldeanlagen"
  },
  {
    icon: Smartphone,
    title: "APP-Nutzung und Internetaufschaltung",
    description: "Steuerung und Überwachung per Smartphone"
  },
  {
    icon: Settings,
    title: "Mechanische Absicherung",
    description: "Inklusive Torsteuerung und mechanische Sicherungen"
  },
  {
    icon: Radio,
    title: "Wachdienststellen",
    description: "Aufschaltung auf Notrufzentrale, Pflegedienstellen, Polizei etc."
  },
  {
    icon: Globe,
    title: "Fernwartungen",
    description: "Schneller Support und Wartung aus der Ferne"
  },
];

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
      <section className="pt-32 pb-16 bg-secondary">
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

      {/* Main Overview */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leistungen und Kompetenzen
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wir entwickeln Lösungskonzepte für das gesamte Spektrum Objektsicherung, 
                Geländesicherung, Brandmeldeanlagen nach VDS. Dabei umfasst unser langjähriger 
                Klientenkreis Unternehmen der unterschiedlichsten Größen und Branchen, 
                sowie kleine und große Privathäuser, Wohnungen und Ferienhäuser.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/kontakt">
                  Beratung anfragen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Bild */}
            <div className="rounded-3xl overflow-hidden shadow-large">
              <img 
                src={`${import.meta.env.BASE_URL}images/bildschirmfotohaus.jpg`}
                alt="Sicherheitsberatung für Ihr Zuhause - Schöche Alarm- und Sicherheitstechnik"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beratungsfelder */}
      <section className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Beratung
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Beratungsfelder
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Umfassende Beratung für alle Sicherheitsaspekte Ihres Objekts
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
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

              {/* Image Placeholder + Use Cases */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                {/* Bild */}
                <div className="rounded-3xl overflow-hidden shadow-large mb-6">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${service.id === "einbruch" ? "system-ass-400.png" : (index === 0 ? "bildschirmfotohaus.jpg" : "bildschirmfotoauto.jpg")}`}
                    alt={`${service.title} - Schöche Alarm- und Sicherheitstechnik`}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Use Cases Card */}
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

      {/* Produkte Teaser */}
      <section className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-soft text-center">
            <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Unsere Produkte entdecken
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Erfahren Sie mehr über unser innovatives SYSTEM ASS 400 – 
              flexibel, erweiterbar und zukunftssicher.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/produkte">
                Zu unseren Produkten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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