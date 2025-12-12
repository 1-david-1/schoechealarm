import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-slate-50">
        <div className="container-tight">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-8xl font-bold text-accent block mb-6">404</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seite nicht gefunden
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Die gesuchte Seite existiert leider nicht. Möglicherweise wurde sie 
              verschoben oder der Link ist nicht mehr aktuell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Zur Startseite
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/kontakt">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
