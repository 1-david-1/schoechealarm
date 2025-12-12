import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "037434 80628",
    href: "tel:+493743480628",
    description: "Mo - Fr: 7:00 - 16:00 Uhr",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@schoeche-alarm.de",
    href: "mailto:info@schoeche-alarm.de",
    description: "Antwort innerhalb von 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Dorfplatz 6, 08606 Gassenreuth",
    href: "https://www.google.com/maps/search/?api=1&query=Dorfplatz+6,+08606+Gassenreuth,+Deutschland",
    description: "Termine nach Vereinbarung",
  },
  {
    icon: Clock,
    title: "Notdienst",
    content: "24/7 erreichbar",
    href: "tel:+491728204945",
    description: "Mobil: 0172 8204945",
  },
];

export default function Kontakt() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Kontakt
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Wir sind für Sie da
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Nehmen Sie Kontakt mit uns auf – für eine unverbindliche Beratung 
              oder bei Fragen zu unseren Leistungen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container-tight">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Adresse" ? "_blank" : undefined}
                rel={item.title === "Adresse" ? "noopener noreferrer" : undefined}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-accent font-medium mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Schreiben Sie uns
              </h2>
              <p className="text-muted-foreground mb-8">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 
                24 Stunden bei Ihnen zurück.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre@email.de"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Für Rückruf"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Betreff *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Worum geht es?"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="min-h-[150px]"
                  />
                </div>

                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>
                    Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten zur 
                    Bearbeitung Ihrer Anfrage zu. Siehe unsere{" "}
                    <a href="/datenschutz" className="text-accent hover:underline">
                      Datenschutzerklärung
                    </a>
                    .
                  </span>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                So finden Sie uns
              </h2>
              
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-border mb-8 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.8!2d12.25!3d50.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE4JzAwLjAiTiAxMsKwMTUnMDAuMCJF!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Schöche Alarm- und Sicherheitstechnik"
                />
              </div>

              {/* Address Card */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-foreground mb-4">
                  Schöche Alarm- und Sicherheitstechnik
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Inhaber:</strong> Andreas Schöche
                  </p>
                  <p>
                    <strong className="text-foreground">Adresse:</strong><br />
                    Dorfplatz 6<br />
                    08606 Gassenreuth
                  </p>
                  <p>
                    <strong className="text-foreground">Telefon:</strong> 037434 80628
                  </p>
                  <p>
                    <strong className="text-foreground">Fax:</strong> 037434 79703
                  </p>
                  <p>
                    <strong className="text-foreground">Mobil:</strong> 0172 8204945
                  </p>
                  <p>
                    <strong className="text-foreground">E-Mail:</strong> info@schoeche-alarm.de
                  </p>
                  <p>
                    <strong className="text-foreground">Web:</strong> www.schoeche-alarm.de
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-hero">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Lieber direkt anrufen?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Für eine schnelle Beratung oder dringende Anliegen erreichen Sie uns 
            direkt telefonisch.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="tel:+493743480628">
              <Phone className="w-5 h-5 mr-2" />
              037434 80628 anrufen
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
