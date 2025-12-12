import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Familie Müller",
    location: "Oelsnitz",
    text: "Nach dem Einbruch bei unseren Nachbarn haben wir uns für eine Alarmanlage von Schöche entschieden. Die Beratung war super kompetent und die Installation verlief reibungslos. Jetzt fühlen wir uns wieder sicher.",
    rating: 5,
  },
  {
    name: "Dr. med. Hoffmann",
    location: "Arztpraxis Plauen",
    text: "Für unsere Praxis benötigten wir eine Zutrittskontrolle und Videoüberwachung. Herr Schöche hat uns ein maßgeschneidertes Konzept erstellt, das perfekt zu unseren Anforderungen passt.",
    rating: 5,
  },
  {
    name: "Autohaus Bergmann",
    location: "Reichenbach",
    text: "Seit Jahren betreut uns Schöche Alarm- und Sicherheitstechnik. Die Wartung ist zuverlässig, der Service erstklassig. Bei Fragen ist immer jemand erreichbar.",
    rating: 5,
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-muted-foreground">
            Vertrauen entsteht durch Erfahrung – lesen Sie, was unsere Kunden über uns berichten.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-medium transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">
            Zertifizierungen & Partner
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["VdS-zertifiziert", "Meisterbetrieb", "Regionaler Partner", "24h Service"].map((badge) => (
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
      </div>
    </section>
  );
}
