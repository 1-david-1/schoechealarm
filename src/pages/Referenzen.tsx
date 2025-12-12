import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Building2, Home, Stethoscope } from "lucide-react";

const testimonials = [
  {
    name: "Familie Müller",
    location: "Oelsnitz",
    type: "Privatkunde",
    icon: Home,
    text: "Nach dem Einbruch bei unseren Nachbarn haben wir uns für eine Alarmanlage von Schöche entschieden. Die Beratung war super kompetent und die Installation verlief reibungslos. Jetzt fühlen wir uns wieder sicher in unserem Zuhause.",
    rating: 5,
    project: "Einbruchmeldeanlage mit App-Steuerung",
  },
  {
    name: "Dr. med. Hoffmann",
    location: "Plauen",
    type: "Arztpraxis",
    icon: Stethoscope,
    text: "Für unsere Praxis benötigten wir eine Zutrittskontrolle und Videoüberwachung. Herr Schöche hat uns ein maßgeschneidertes Konzept erstellt, das perfekt zu unseren Anforderungen passt. Die Patienten und das Team fühlen sich sicher.",
    rating: 5,
    project: "Zutrittskontrolle & Videoüberwachung",
  },
  {
    name: "Autohaus Bergmann",
    location: "Reichenbach",
    type: "Gewerbe",
    icon: Building2,
    text: "Seit Jahren betreut uns Schöche Alarm- und Sicherheitstechnik. Die Wartung ist zuverlässig, der Service erstklassig. Bei Fragen ist immer jemand erreichbar. Absolute Empfehlung!",
    rating: 5,
    project: "Umfassende Sicherheitstechnik",
  },
  {
    name: "Familie Weber",
    location: "Bad Elster",
    type: "Privatkunde",
    icon: Home,
    text: "Wir haben uns für eine Kombination aus Alarmanlage und Kamerasystem entschieden. Die Beratung war ehrlich – es wurde nur das empfohlen, was wir wirklich brauchen. Das schätzen wir sehr.",
    rating: 5,
    project: "Alarm- und Kamerasystem",
  },
  {
    name: "Rechtsanwaltskanzlei Vogel",
    location: "Plauen",
    type: "Gewerbe",
    icon: Building2,
    text: "Datenschutz und Sicherheit sind in unserer Branche essentiell. Die Zutrittskontrolle von Schöche gibt uns die Kontrolle, die wir brauchen. Die Installation wurde diskret und professionell durchgeführt.",
    rating: 5,
    project: "Zutrittskontrollsystem",
  },
  {
    name: "Bäckerei Schneider",
    location: "Adorf",
    type: "Gewerbe",
    icon: Building2,
    text: "Nach einem versuchten Einbruch haben wir schnell gehandelt. Schöche war innerhalb weniger Tage bei uns und hat eine passende Lösung installiert. Der Service ist top!",
    rating: 5,
    project: "Einbruchmeldeanlage",
  },
];

const badges = [
  "VdS-zertifiziert",
  "Meisterbetrieb",
  "Regionaler Partner",
  "24h Service",
  "Über 30 Jahre Erfahrung",
];

export default function Referenzen() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Referenzen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Zufriedene Kunden sprechen für uns
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit uns berichten.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Jahre Erfahrung" },
              { value: "500+", label: "Zufriedene Kunden" },
              { value: "100%", label: "Empfehlungsrate" },
              { value: "24/7", label: "Service verfügbar" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl md:text-4xl font-bold text-accent block">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <testimonial.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent">{testimonial.type}</span>
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-accent/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Project */}
                <div className="bg-accent/10 rounded-xl px-4 py-2 mb-6 inline-block">
                  <span className="text-sm text-accent font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block text-sm">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-slate-50">
        <div className="container-tight">
          <p className="text-center text-muted-foreground mb-8">
            Zertifizierungen & Qualitätsmerkmale
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 px-6 py-3 bg-card rounded-xl border border-border"
              >
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="font-medium text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Werden Sie unser nächster zufriedener Kunde
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserer Qualität und unserem Service. 
            Wir freuen uns auf Ihre Anfrage.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/kontakt">
              Jetzt Beratung anfragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
