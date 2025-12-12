import { Layout } from "@/components/layout/Layout";

export default function Impressum() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Impressum
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="bg-card rounded-2xl p-8 border border-border mb-8">
              <p className="mb-4">
                <strong>Schöche Alarm- und Sicherheitstechnik</strong><br />
                Andreas Schöche<br />
                Dorfplatz 6<br />
                08606 Gassenreuth
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Kontakt</h2>
            <p className="text-muted-foreground mb-6">
              Telefon: 037434 80628<br />
              Fax: 037434 79703<br />
              Mobil: 0172 8204945<br />
              E-Mail: info@schoeche-alarm.de
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Umsatzsteuer-ID</h2>
            <p className="text-muted-foreground mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE [Nummer auf Anfrage]
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-muted-foreground mb-6">
              Berufsbezeichnung: Elektroinstallateurmeister<br />
              Zuständige Kammer: Handwerkskammer Chemnitz<br />
              Verliehen in: Deutschland
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="text-muted-foreground mb-6">
              Andreas Schöche<br />
              Dorfplatz 6<br />
              08606 Gassenreuth
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Streitschlichtung</h2>
            <p className="text-muted-foreground mb-6">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
            <p className="text-muted-foreground mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Haftung für Links</h2>
            <p className="text-muted-foreground mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
              Seiten verantwortlich.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
            <p className="text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
