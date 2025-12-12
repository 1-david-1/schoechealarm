import { Layout } from "@/components/layout/Layout";

export default function Datenschutz() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-slate-50">
        <div className="container-tight">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-tight max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Datenerfassung auf dieser Website</h3>
            <p className="text-muted-foreground mb-6">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
              Schöche Alarm- und Sicherheitstechnik<br />
              Andreas Schöche<br />
              Dorfplatz 6<br />
              08606 Gassenreuth<br />
              E-Mail: info@schoeche-alarm.de
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Hosting</h2>
            <p className="text-muted-foreground mb-6">
              Wir hosten die Inhalte unserer Website bei einem professionellen Hosting-Anbieter. 
              Dieser erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt: IP-Adresse, 
              Datum und Uhrzeit der Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der 
              Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von der die Anforderung 
              kommt und Informationen zu Browser und Betriebssystem.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Datenschutz</h3>
            <p className="text-muted-foreground mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Ihre Rechte</h3>
            <p className="text-muted-foreground mb-6">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine 
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
              jederzeit für die Zukunft widerrufen.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Kontaktformular</h3>
            <p className="text-muted-foreground mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus 
              dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="text-muted-foreground mb-6">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
              aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website 
              erforderlich sind. Weitere Cookies werden nicht verwendet.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Änderung dieser Datenschutzerklärung</h2>
            <p className="text-muted-foreground">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
              in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
              Datenschutzerklärung.
            </p>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Stand: Dezember 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
