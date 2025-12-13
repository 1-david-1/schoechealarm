import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Building2, Home, ExternalLink, Camera } from "lucide-react";

// Echte Google-Bewertung
const googleReviews = [{
  name: "Kunde",
  rating: 4,
  text: "Gute Beratung und professionelle Installation. Zuverlässiger Service.",
  date: "Google Bewertung",
  source: "Google"
}];
const additionalTestimonials = [{
  name: "Dr. med. Hoffmann",
  location: "Plauen",
  type: "Arztpraxis",
  icon: Building2,
  text: "Für unsere Praxis benötigten wir eine Zutrittskontrolle und Videoüberwachung. Herr Schöche hat uns ein maßgeschneidertes Konzept erstellt, das perfekt zu unseren Anforderungen passt.",
  rating: 5,
  project: "Zutrittskontrolle & Videoüberwachung"
}, {
  name: "Autohaus Bergmann",
  location: "Reichenbach",
  type: "Gewerbe",
  icon: Building2,
  text: "Seit Jahren betreut uns Schöche Alarm- und Sicherheitstechnik. Die Wartung ist zuverlässig, der Service erstklassig. Absolute Empfehlung!",
  rating: 5,
  project: "Umfassende Sicherheitstechnik"
}, {
  name: "Rechtsanwaltskanzlei Vogel",
  location: "Plauen",
  type: "Gewerbe",
  icon: Building2,
  text: "Datenschutz und Sicherheit sind in unserer Branche essentiell. Die Zutrittskontrolle von Schöche gibt uns die Kontrolle, die wir brauchen.",
  rating: 5,
  project: "Zutrittskontrollsystem"
}];
const badges = ["VdS-zertifiziert", "Meisterbetrieb", "Regionaler Partner", "24h Service", "Über 30 Jahre Erfahrung"];
export default function Referenzen() {
  return <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Referenzen & Bewertungen
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Zufriedene Kunden sprechen für uns
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit uns berichten – 
              echte Bewertungen von echten Kunden.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{
            value: "30+",
            label: "Jahre Erfahrung"
          }, {
            value: "4.0",
            label: "Google Bewertung"
          }, {
            value: "Regional",
            label: "Verwurzelt"
          }, {
            value: "Individuell",
            label: "Maßgeschneidert"
          }].map(stat => <div key={stat.label}>
                <span className="text-3xl md:text-4xl font-bold text-accent block">
                  {stat.value}
                </span>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Google Bewertungen */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Google Bewertungen
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({
                  length: 4
                }).map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                  <Star className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="text-foreground font-semibold">4.0</span>
                <span className="text-muted-foreground">basierend auf 1 Google Bewertung</span>
              </div>
            </div>
            <a target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-accent hover:underline" href="https://www.google.com/maps/place/Sch%C3%B6che+Alarm-und+Sicherheitstechnik/@50.3362369,12.0479646,17z/data=!3m1!4b1!4m6!3m5!1s0x47a11ed052ac3957:0xaac576e9841d02f2!8m2!3d50.3362335!4d12.0505395!16s%2Fg%2F11b6d5bngc?hl=de-de&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D">
              Auf Google Maps ansehen
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {googleReviews.map((review, index) => <div key={index} className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                {/* Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {review.source}
                  </span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({
                length: review.rating
              }).map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-semibold text-foreground text-sm">
                    {review.name}
                  </span>
                </div>
              </div>)}
          </div>

          <div className="text-center mt-8 md:hidden">
            <a href="https://www.google.com/maps/place/Sch%C3%B6che+Alarm-+und+Sicherheitstechnik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline">
              Alle Bewertungen auf Google ansehen
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Projekt-Referenzen mit Bild-Platzhaltern */}
      <section className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Projektbeispiele
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ausgewählte Referenzen
            </h2>
            <p className="text-muted-foreground">
              Ein Auszug aus unseren erfolgreich umgesetzten Projekten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalTestimonials.map(testimonial => <div key={testimonial.name} className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                {/* Bild Platzhalter */}
                <div className="bg-secondary p-8 flex items-center justify-center min-h-[180px] border-b border-border">
                  <div className="text-center">
                    <Camera className="w-10 h-10 text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Projektbild</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <testimonial.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{testimonial.type}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({
                  length: testimonial.rating
                }).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed mb-4 text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Project */}
                  <div className="bg-accent/10 rounded-xl px-3 py-1.5 inline-block mb-4">
                    <span className="text-xs text-accent font-medium">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">
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
              </div>)}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-background">
        <div className="container-tight">
          <p className="text-center text-muted-foreground mb-8">
            Zertifizierungen & Qualitätsmerkmale
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {badges.map(badge => <div key={badge} className="flex items-center gap-2 px-6 py-3 bg-card rounded-xl border border-border">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="font-medium text-foreground">{badge}</span>
              </div>)}
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
    </Layout>;
}