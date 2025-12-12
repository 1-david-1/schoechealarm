import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Karriere", href: "/karriere" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-tight">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                Schöche
              </span>
              <span className="block text-xs text-muted-foreground -mt-0.5">
                Alarm- & Sicherheitstechnik
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                  location.pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+4937434 80628"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>037434 80628</span>
            </a>
            <Button variant="nav-cta" size="sm" asChild>
              <Link to="/kontakt">Beratung anfragen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-xl transition-all",
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-secondary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="tel:+4937434 80628"
                  className="flex items-center gap-2 px-4 py-2 text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>037434 80628</span>
                </a>
                <Button variant="accent" className="w-full mt-3" asChild>
                  <Link to="/kontakt">Kostenlose Beratung anfragen</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
