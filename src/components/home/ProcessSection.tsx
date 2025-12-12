import { Phone, MapPin, FileText, Wrench, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Erstgespräch",
    description: "Rufen Sie uns an oder schreiben Sie uns. Wir hören zu und verstehen Ihre Anforderungen.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Vor-Ort-Termin",
    description: "Wir analysieren die Gegebenheiten direkt bei Ihnen und identifizieren Schwachstellen.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Konzept & Angebot",
    description: "Sie erhalten ein transparentes Angebot mit einer maßgeschneiderten Lösung.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Installation & Einweisung",
    description: "Fachgerechte Montage und ausführliche Einweisung in Ihre neue Sicherheitstechnik.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            So arbeiten wir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            In 4 Schritten zu mehr Sicherheit
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein transparenter Prozess von der ersten Kontaktaufnahme bis zur fertigen Installation.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
              >
                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-accent/30" />
                )}

                <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-large transition-all duration-300 h-full text-center lg:text-left">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground font-bold text-lg mb-6 shadow-glow">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
