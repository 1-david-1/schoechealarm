import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoVehicle from "@/assets/logo-vehicle.png";
const navigation = [{
  name: "Startseite",
  href: "/"
}, {
  name: "Leistungen",
  href: "/leistungen"
}, {
  name: "Produkte",
  href: "/produkte"
}, {
  name: "Über uns",
  href: "/ueber-uns"
}, {
  name: "Referenzen",
  href: "/referenzen"
}, {
  name: "Karriere",
  href: "/karriere"
}, {
  name: "Kontakt",
  href: "/kontakt"
}];
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
  return <header className={cn(
      "sticky top-0 z-50 py-4 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm" 
        : "bg-primary"
    )}>
      <div className="container-tight">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img src={logoVehicle} alt="Schöche Alarm- und Sicherheitstechnik Logo" className="h-10 w-auto" />
            <div className="flex flex-col justify-center">
              <span className={cn("font-bold text-base md:text-lg leading-none transition-colors whitespace-nowrap", isScrolled ? "text-foreground group-hover:text-accent" : "text-primary-foreground group-hover:text-accent")}>
                Schöche Alarm
              </span>
              <span className={cn("text-[10px] md:text-xs leading-none mt-0.5 whitespace-nowrap", isScrolled ? "text-muted-foreground" : "text-primary-foreground/70")}>
                Sicherheitstechnik
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={cn("px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200", location.pathname === item.href ? "text-accent bg-accent/10" : isScrolled ? "text-foreground hover:text-accent hover:bg-accent/5" : "text-primary-foreground hover:text-accent hover:bg-primary-foreground/10")}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+493743480628" className={cn("flex items-center gap-2 text-sm font-medium transition-colors", isScrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground")}>
              <Phone className="w-4 h-4" />
              <span>037434 80628</span>
            </a>
            <Button variant="accent" size="sm" asChild>
              <Link to="/kontakt">Beratung anfragen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={cn("lg:hidden p-2 rounded-xl transition-colors", isScrolled ? "hover:bg-secondary" : "hover:bg-primary-foreground/10")} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü öffnen">
            {isMobileMenuOpen ? <X className="" /> : <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-primary-foreground")} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map(item => <Link key={item.name} to={item.href} className={cn("px-4 py-3 text-base font-medium rounded-xl transition-all", location.pathname === item.href ? "text-accent bg-accent/10" : "text-foreground hover:text-accent hover:bg-secondary")}>
                  {item.name}
                </Link>)}
              <div className="mt-4 pt-4 border-t border-border">
                <a href="tel:+4937434 80628" className="flex items-center gap-2 px-4 py-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>037434 80628</span>
                </a>
                <Button variant="accent" className="w-full mt-3" asChild>
                  <Link to="/kontakt">Kostenlose Beratung anfragen</Link>
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </header>;
}