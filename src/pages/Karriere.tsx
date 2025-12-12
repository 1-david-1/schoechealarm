import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Euro,
  CheckCircle2,
  Users,
  Heart,
  Wrench,
  GraduationCap,
  Car,
  Send
} from "lucide-react";

const benefits = [
  { icon: Euro, text: "Faire Vergütung" },
  { icon: Users, text: "Familiäres Team" },
  { icon: Wrench, text: "Moderne Technik" },
  { icon: GraduationCap, text: "Weiterbildung" },
  { icon: Car, text: "Firmenfahrzeug" },
  { icon: Heart, text: "Wertschätzung" },
];

const tasks = [
  "Installation von Einbruchmelde- und Videoüberwachungsanlagen",
  "Montage von Zutrittskontroll- und Brandmeldesystemen",
  "Wartung und Instandhaltung bestehender Anlagen",
  "Fehlersuche und Störungsbehebung",
  "Einweisung der Kunden in ihre Systeme",
  "Dokumentation der durchgeführten Arbeiten",
];

const requirements = [
  "Abgeschlossene Ausbildung im Elektrobereich oder vergleichbar",
  "Idealerweise Erfahrung in der Sicherheitstechnik",
  "Führerschein Klasse B",
  "Selbstständige und zuverlässige Arbeitsweise",
  "Freundliches Auftreten gegenüber Kunden",
  "Teamfähigkeit und Engagement",
];

export default function Karriere() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Karriere
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Werden Sie Teil unseres Teams
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Wir suchen engagierte Mitarbeiter, die mit uns gemeinsam für mehr 
              Sicherheit in der Region sorgen möchten.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Warum bei uns arbeiten?
            </h2>
            <p className="text-lg text-muted-foreground">
              Als familiär geführtes Unternehmen legen wir Wert auf ein gutes Arbeitsklima 
              und die Entwicklung unserer Mitarbeiter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-4 bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opening */}
      <section className="section-padding bg-slate-50">
        <div className="container-tight">
          <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
            {/* Job Header */}
            <div className="bg-primary p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                  Aktuell gesucht
                </span>
                <span className="px-4 py-1.5 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm">
                  Vollzeit
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Techniker/in für Sicherheitstechnik (m/w/d)
              </h2>
              <div className="flex flex-wrap gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Gassenreuth & Region</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Vollzeit, ab sofort</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Festanstellung</span>
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Tasks */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-accent" />
                    Ihre Aufgaben
                  </h3>
                  <ul className="space-y-3">
                    {tasks.map((task) => (
                      <li key={task} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-accent" />
                    Das bringen Sie mit
                  </h3>
                  <ul className="space-y-3">
                    {requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What We Offer */}
              <div className="mt-12 pt-12 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-accent" />
                  Das bieten wir Ihnen
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Faire und leistungsgerechte Vergütung",
                    "Unbefristeter Arbeitsvertrag",
                    "Firmenfahrzeug (auch zur privaten Nutzung möglich)",
                    "Hochwertige Arbeitskleidung und Werkzeug",
                    "Regelmäßige Weiterbildungen",
                    "Familiäres Arbeitsklima",
                    "Abwechslungsreiche Projekte",
                    "Eigenverantwortliches Arbeiten",
                    "30 Tage Urlaub",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Apply CTA */}
              <div className="mt-12 bg-accent/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Interessiert? Dann bewerben Sie sich jetzt!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Senden Sie uns Ihre Bewerbungsunterlagen per E-Mail oder rufen Sie uns an.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="accent" size="lg" asChild>
                    <a href="mailto:info@schoeche-alarm.de?subject=Bewerbung als Techniker/in">
                      <Send className="w-4 h-4 mr-2" />
                      Per E-Mail bewerben
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+493743480628">
                      Anrufen: 037434 80628
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="section-padding bg-background">
        <div className="container-tight text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Keine passende Stelle dabei?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Wir freuen uns auch über Initiativbewerbungen! Wenn Sie Interesse an 
            der Sicherheitsbranche haben und Teil unseres Teams werden möchten, 
            melden Sie sich gerne bei uns.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="mailto:info@schoeche-alarm.de?subject=Initiativbewerbung">
              Initiativbewerbung senden
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
