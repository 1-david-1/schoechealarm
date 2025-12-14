import { Link, useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const navigation = {
  leistungen: [
    { name: "Einbruchmeldeanlagen", href: "/leistungen#einbruch" },
    { name: "Videoüberwachung", href: "/leistungen#video" },
    { name: "Zutrittskontrolle", href: "/leistungen#zutritt" },
    { name: "Brandmeldeanlagen", href: "/leistungen#brand" },
  ],
  unternehmen: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Referenzen", href: "/referenzen" },
    { name: "Karriere", href: "/karriere" },
    { name: "Kontakt", href: "/kontakt" },
  ],
};

const handleNavClick = (href: string) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-tight section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo-vehicle.png`}
                alt="Schöche Alarm- und Sicherheitstechnik Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="font-bold text-lg">Schöche</span>
                <span className="block text-xs text-primary-foreground/70 -mt-0.5">
                  Alarm- & Sicherheitstechnik
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Seit über 30 Jahren Ihr zuverlässiger Partner für individuelle Sicherheitslösungen 
              in der Region.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Mit Sicherheit ein gutes Gefühl!
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-semibold text-base mb-6">Leistungen</h3>
            <ul className="space-y-3">
              {navigation.leistungen.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-semibold text-base mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              {navigation.unternehmen.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Dorfplatz 6<br />
                  08606 Gassenreuth
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:+493743480628"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  037434 80628
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <Link
                  to="/kontakt"
                  onClick={() => handleNavClick('/kontakt')}
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Anfrage senden
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Mo - Fr: 7:00 - 16:00 Uhr<br />
                  24h Notdienst verfügbar
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Schöche Alarm- und Sicherheitstechnik. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
