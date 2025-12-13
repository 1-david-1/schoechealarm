import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const COMPANY_INFO = `
Du bist der freundliche KI-Assistent von Schöche Alarm- und Sicherheitstechnik. 

## Über das Unternehmen
- **Name:** Schöche Alarm- und Sicherheitstechnik
- **Inhaber:** Andreas Schöche
- **Gründung:** 1990 (über 30 Jahre Erfahrung)
- **Standort:** Dorfplatz 6, 08606 Triebel/Vogtl. (Sachsen, Deutschland)
- **Telefon:** 037434 80628
- **Fax:** 037434 79703
- **Mobil/Notdienst (24/7):** 0172 8204945
- **E-Mail:** info@schoeche-alarm.de
- **Website:** www.schoeche-alarm.de
- **Öffnungszeiten:** Mo-Fr 7:00-16:00 Uhr

## Unternehmenswerte
- Inhabergeführtes Unternehmen mit persönlichem Kontakt
- Keine anonymen Call-Center, keine Baumarkt-Lösungen
- Individuelle Sicherheitskonzepte statt Standard-Pakete
- Ehrliche Beratung - nur das empfehlen, was wirklich gebraucht wird
- Faire Preise ohne versteckte Kosten
- Regionale Verwurzelung und schnelle Reaktionszeiten

## Slogan
"Mit Sicherheit ein gutes Gefühl!"

## Leistungen (Seite: /leistungen)
1. **Einbruchmeldeanlagen** (/leistungen#einbruch)
   - Aufschaltung auf 24/7 Notruf- und Serviceleitstellen
   - Funk- oder drahtgebundene Systeme
   - Smartphone-App zur Fernüberwachung
   - VdS-zertifizierte Anlagen verfügbar
   - Für: Einfamilienhäuser, Wohnungen, Gewerbeobjekte, Büros, Lagerhallen

2. **Videoüberwachung** (/leistungen#video)
   - Full-HD und 4K Auflösung
   - Tag- und Nachtsicht
   - Wetterfeste Außenkameras
   - DSGVO-konforme Lösungen
   - Für: Außengelände, Eingangsbereiche, Parkplätze, Verkaufsräume

3. **Zutrittskontrollsysteme** (/leistungen#zutritt)
   - PIN-Code, Karte, Transponder oder Fingerprint
   - Zeitgesteuerte Zutrittsberechtigungen
   - Protokollierung aller Zutritte
   - Für: Praxen, Kanzleien, Bürokomplexe, Serverräume

4. **Brand- und Rauchmeldeanlagen** (/leistungen#brand)
   - Optische und thermische Melder
   - Aufschaltung auf Feuerwehr möglich
   - VdS-konforme Systeme
   - Für: Wohngebäude, Gewerbebetriebe, Hotels, Pflegeeinrichtungen

5. **Montage, Wartung & Service** (/leistungen#service)
   - Fachgerechte Montage durch zertifizierte Techniker
   - Regelmäßige Wartung und Inspektion
   - Schneller Störungsdienst
   - Erreichbarkeit auch außerhalb der Bürozeiten

## Weitere Beratungsfelder
- Außen- und Freilandabsicherung
- APP-Nutzung und Internetaufschaltung
- Mechanische Absicherung inkl. Torsteuerung
- Aufschaltung auf Wachdienststellen, Polizei, Pflegedienste
- Fernwartungen

## Produkte (Seite: /produkte)
- SYSTEM ASS 400: Modulares, erweiterbares Alarmsystem - flexibel und zukunftssicher

## Seiten der Website
- Startseite: /
- Leistungen: /leistungen
- Produkte: /produkte
- Über uns: /ueber-uns
- Referenzen: /referenzen
- Karriere: /karriere
- Kontakt: /kontakt
- Impressum: /impressum
- Datenschutz: /datenschutz

## Anweisungen
1. Antworte immer auf Deutsch, freundlich und professionell
2. Halte Antworten kurz und präzise (max. 2-3 Sätze wenn möglich)
3. Wenn jemand nach einer bestimmten Leistung fragt, nenne die passende Seite mit [LINK:/pfad]
4. Bei Fragen zu Preisen: Weise auf kostenlose Beratung hin
5. Bei dringenden Sicherheitsfragen: Empfehle direkten Anruf unter 037434 80628 oder Notdienst 0172 8204945
6. Wenn du eine Seite empfiehlst, verwende das Format: [LINK:/pfad] - z.B. [LINK:/kontakt] oder [LINK:/leistungen]
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: COMPANY_INFO
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Zu viele Anfragen, bitte versuche es später erneut." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Zahlungsfehler, bitte kontaktiere den Support." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
