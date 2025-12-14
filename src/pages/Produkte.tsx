import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Smartphone,
  Radio,
  Shield,
  Bell,
  Camera,
  Thermometer,
  Lock,
  Zap,
  Settings
} from "lucide-react";

const systemFeatures = [
  {
    icon: Radio,
    title: "Bus-/Funk-Alarmzentrale",
    description: "Bus Alarmzentrale oder Funk-Bus-Alarmzentrale mit LAN-Schnittstelle"
  },
  {
    icon: Settings,
    title: "Flexible Bereiche",
    description: "Unabhängige Bereiche teilbar (z.B. Keller, EG, DG und Büro), Teilscharfschaltung möglich"
  },
  {
    icon: Shield,
    title: "50+ Benutzer",
    description: "Mindestens 50 Benutzer möglich für umfassende Zugangskontrolle"
  },
  {
    icon: Smartphone,
    title: "Bedienteil & APP",
    description: "Bedienung über Bedienteil und APP-Funktion möglich"
  },
  {
    icon: Zap,
    title: "Fernwartung",
    description: "Fernwartung möglich für schnellen Support und Updates"
  },
  {
    icon: Settings,
    title: "Schaltausgänge",
    description: "Programmierbare Schaltausgänge z.B. für Heizung, Beleuchtung"
  },
  {
    icon: Bell,
    title: "4 Wachdienststellen",
    description: "Aufschaltung bis zu 4 Wachdienststellen (Feuerwehr, Polizei, Pflegedienst, Notrufzentrale)"
  }
];

const expansions = [
  "Erweiterung durch Funkmodule",
  "GSM-Kommunikationsmodul (SMS, Sprachnachrichten an mehrere Telefonnummern)",
  "Funk-Repeater ermöglicht größere Funkreichweite zwischen Meldern, Fernbedienungen und Modulen",
  "Einbindung des Systems ASS 200/300 möglich – Ihre Erweiterung ist gesichert!",
  "Kombination zwischen Funk und verdrahteter Anlage durch Einsatz von Bus-Modulen möglich"
];

const accessories = [
  {
    category: "Zugänge",
    items: ["Funk-Fernbedienungen", "Transponder"],
    icon: Lock
  },
  {
    category: "Panikalarm",
    items: ["Notfallarmbänder", "Wandtaster"],
    description: "Bei versehentlichen Stürzen im hohen Alter kann der Notruf-/Hilferuf über das Armband gesendet werden, oder bei Einbruch/Überfallen können Sie ohne Ihr Telefon alarmieren",
    icon: Bell
  },
  {
    category: "Außenhautabsicherung",
    items: ["Türkontakte", "Fensterkontakte", "Erschütterungsmelder"],
    icon: Shield
  },
  {
    category: "Melder Innen- & Außenbereich",
    items: ["Glasbruchmelder", "Gasaustrittsmelder (Methan, Stadt-Erdgas)", "2-Zonen-Bewegungsmelder (Haustiere)", "Bewegungsmelder mit Kamera", "Lichtschranken", "Wärmemelder", "Rauchmelder", "Außenbewegungsmelder"],
    icon: Camera
  },
  {
    category: "Sensoren",
    items: ["Temperatursensoren (Frostsicherung im Haus)", "Wassersensoren (z.B. Überschwemmungen)"],
    icon: Thermometer
  },
  {
    category: "Integration",
    items: ["Videoüberwachung", "Zutrittskontrollen (Fingerprintleser, Schlüsselschalter)"],
    icon: Camera
  }
];

export default function Produkte() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Unsere Produkte
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              SYSTEM ASS 400
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Unser innovatives Alarmsystem passt sich an Ihre Vorstellungen an – 
              flexibel, erweiterbar und zukunftssicher.
            </p>
          </div>
        </div>
      </section>

      {/* Produktbild */}
      <section className="py-12 bg-background">
        <div className="container-tight">
          <div className="bg-secondary rounded-3xl overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}images/system-ass-400.png`}
              alt="SYSTEM ASS 400 Alarmanlage mit allen Komponenten" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Eckdaten */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Eckdaten im Überblick
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Das SYSTEM ASS 400 bietet Ihnen höchste Flexibilität und umfassenden Schutz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Erweiterungen */}
      <section className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Erweiterungen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Zukunftssicher & erweiterbar
              </h2>
              <p className="text-muted-foreground mb-8">
                Denn wir möchten unsere Kunden weiterhin betreuen können. 
                Ihre Investition ist bei uns sicher – das System wächst mit Ihren Anforderungen.
              </p>
              <div className="space-y-4">
                {expansions.map((expansion) => (
                  <div key={expansion} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{expansion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* App Steuerung Bild */}
            <div className="rounded-3xl overflow-hidden shadow-medium">
              <img 
                src={`${import.meta.env.BASE_URL}images/app-steuerung.png`}
                alt="Smartphone App zur Steuerung der Alarmanlage" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zubehör */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Umfangreiches Sortiment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ein kleiner Auszug über unser Zubehör
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unser System ist innovativ und passt sich an Ihre Vorstellungen an
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((accessory) => (
              <div
                key={accessory.category}
                className="bg-card rounded-2xl p-6 border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <accessory.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-4">{accessory.category}</h3>
                <ul className="space-y-2">
                  {accessory.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {accessory.description && (
                  <p className="mt-4 text-xs text-muted-foreground/80 italic border-t border-border pt-4">
                    {accessory.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilder-Galerie Platzhalter */}
      <section className="py-16 bg-secondary">
        <div className="container-tight">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Produktgalerie
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="bg-card rounded-xl p-6 flex items-center justify-center min-h-[150px] border-2 border-dashed border-border"
              >
                <div className="text-center">
                  <Camera className="w-8 h-8 text-accent/50 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Bild {i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Interesse am SYSTEM ASS 400?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Lassen Sie sich unverbindlich beraten. Wir zeigen Ihnen, welche Konfiguration 
            optimal zu Ihren Anforderungen passt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">
                Beratung anfragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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