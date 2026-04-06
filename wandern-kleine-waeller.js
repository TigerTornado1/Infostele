/**
 * Guck ma, Westerwald – Datendatei
 * Kleine Wäller (Spazierwege & Spazierwanderwege)
 * 
 * Quelle: westerwald.info
 * Stand: April 2026 – Batch 1 (Einträge 1–7) aus Originaltexten aktualisiert
 * 
 * 14 Kleine Wäller, exakt wie auf westerwald.info gelistet.
 * 
 * _status: "complete" = alle Sektionen befüllt
 * _status: "pending"  = Detaildaten müssen noch von westerwald.info geholt werden
 * 
 * Struktur analog zu DATA_WANDERN_WESTERWALDSTEIG:
 *   id, _status, title, subtitle, type, km, difficulty, tags,
 *   sourceUrl, gpxUrl, tourenplanerUrl,
 *   stats { ascent, descent, duration, highPoint, lowPoint },
 *   description { headline, text },
 *   directions { byCar },
 *   publicTransport { arrival, returnTrip, returnTripUrl, stops[], links[], taxis[], sustainableTip, sustainableTipUrls[], moreInfoUrl },
 *   parking [{ location, free, paid }],
 *   routeDescription { general, accessTrails[], accessTrailMarking },
 *   safetyNotes, safetyAppUrl, equipment,
 *   tips [{ name, note, url }],
 *   literature [],
 *   start { name, address, coordinates },
 *   destination { name, address, coordinates }
 */

var DATA_WANDERN_KLEINE_WAELLER = [

// ═══════════════════════════════════════════════════════════
// 1 – Häubchen-Tour (Breitscheid)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 1,
  _status: "complete",
  title: "Kleiner Wäller Häubchen-Tour",
  subtitle: "Breitscheid",
  type: "Spazierwanderweg",
  km: "5,5",
  difficulty: "Mittel",
  tags: "Roßbacher Häubchen, Vulkankegel, Basaltlehrpfad",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-haeubchen-tour-spazierwanderweg/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/116326927/",
  stats: {
    ascent: "98 hm",
    descent: "98 hm",
    duration: "1,6 h",
    highPoint: "334 m",
    lowPoint: "281 m"
  },
  description: {
    headline: null,
    text: "Der Rundweg hat seinen Namen von dem 350 m hohen Roßbacher Häubchen. Hierbei handelt es sich um einen erodierten Vulkankegel mit spannenden Basaltwänden und einem kleinen Basaltlehrpfad, der den Basaltabbau von 1883 bis 1942 erklärt. Bei der Kirche in der Ortsmitte kommt man an einem Spielplatz vorbei. Gegenüber befindet sich das Ausflugslokal und Restaurant „Zum Dorfkrug“ mit deutschen, italienischen und indischen Spezialitäten. Besonders empfehlenswert ist die Sonnenterrasse."
  },
  directions: {
    byCar: "Von Roßbach/Wied oder A3 Abfahrt Fernthal über die L 256"
  },
  publicTransport: {
    arrival: "VRM Linie 145 zwischen Waldbreitbach und Neustadt",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "VRM Linie 145",
        url: "https://www.vrminfo.de/fileadmin/data/pdf/fahrplanbuecher/2024/145.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Breitscheid",
      free: "Kostenfreier Parkplatz am Ortseingang, von Roßbach kommend, in der Roßbacher Straße",
      paid: null
    }
  ],
  routeDescription: {
    general: "Wir starten am Ortsrand von Breitscheid - L256 Richtung Roßbach, Ecke Waldstraße (kleiner, kostenloser Wanderparkplatz). Hier folgen wir der Straße „Sauerwiese“, bis der Wanderweg nach links auf einen Fußweg abzweigt. An Waldrändern entlang, über Wiesen und Felder gelangen wir der Beschilderung folgend bis zum Abzweig zum Roßbacher Häubchen, ein 350 m hoher, abgetragener Vulkankegel. Ein ca. 200 m langer Zuweg führt uns von dort zum Aussichtsplateau. Für geübte Wanderer ist der Aufstieg vom Aussichtsplateau bis hinauf auf den Gipfel unbedingt zu empfehlen (ein Stahlseil im Fels bietet mehr Trittsicherheit). Von der dortigen Panoramatafel bietet sich uns ein herrlicher Ausblick ins Wiedtal und bei schönem Wetter bis in die Eifel und das Siebengebirge. Wir gehen zurück zum Abzweig, wenden uns nach links und wandern durch einen kleinen Wald und weiter über Feld- und Wiesenwege bis zum Dorfbrunnen. Hier geht es ein Stück auf der „Brunnenstraße“ entlang, dann rechts entlang der Kirchstraße, vorbei an der Anna-Kapelle mit einem Altaraufsatz von 1480. Hier gibt es auch einen kleinen Spielplatz. Etwas unterhalb der Kapelle an der Hauptstraße befindet sich das Restaurant „Zum Dorfkrug“ mit deutscher, italienischer und indischer Küche. Vom Restaurant kommend macht die Hauptstraße (Roßbacher Straße) nach der Kapelle einen Rechtsknick. Kurz danach biegen wir rechts in die „Neue Straße“ ein und folgen der Beschilderung zurück zum Startpunkt unserer Wanderung.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Aufstieg zum Gipfel nur für trittsichere Wanderer.",
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk wird empfohlen.",
  tips: [
    {
      name: "Aussichtsplateau Roßbacher Häubchen",
      note: "Vom Aussichtsplateau auf dem Gipfel bietet sich ein herrlicher Ausblick ins frühlingshafte Wiedtal, bei guter Sicht sogar bis ins Siebengebirge und die Eifel.",
      url: null
    }
  ],
  literature: [
    "Wanderkarte der Verbandsgemeinde Rengsdorf-Waldbreitbach im Maßstab 1 : 16.000"
  ],
  start: {
    name: "Parkplatz Roßbacher Straße",
    address: "Breitscheid",
    coordinates: null
  },
  destination: {
    name: "Parkplatz Roßbacher Straße",
    address: "Breitscheid",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 2 – Wied-Runde (Waldbreitbach)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 2,
  _status: "complete",
  title: "Kleiner Wäller Wied-Runde",
  subtitle: "Waldbreitbach",
  type: "Spazierweg",
  km: "3,0",
  difficulty: "Leicht",
  tags: "Wiedufer, Historische Mühlen, Klosterlandschaft",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-wied-runde-spazierweg/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/113242615/",
  stats: {
    ascent: "13 hm",
    descent: "13 hm",
    duration: "0,7 h",
    highPoint: "119 m",
    lowPoint: "105 m"
  },
  description: {
    headline: "Sehenswürdigkeiten unterwegs",
    text: "**Historische Mühlen & Handwerksmuseum & Bootsverleih**\nDie Ölmühle von 1676, Scheid’s Mühle und das Handwerksmuseum sind ein tolles Fotomotiv. Am Bootsverleih warten Ruder- und Tretboote auf Sie!\n\n**Dorfschmiede & Platz am Alten Kreuz**\nDie Dorfschmiede ist eines der ältesten Häuser im Ort. Das Alte Kreuz wurde 1737 errichtet und markiert noch heute den Dorfmittelpunkt.\n\n**Commende Waldbreitbach**\nSie ist der ehemalige Sitz des Deutschherren-Ritterordens und wird 1239 erstmals erwähnt. Sie wurde 2010 saniert und ist heute in Privatbesitz.\n\n**Evangelische Christuskirche**\nDas große Altarfensterbild greift Motive aus der Offenbarung des Johannes auf. Der separate Glockenturm beherbergt 3 Glocken aus Bronze.\n\n**Kath. Pfarrkirche Maria Himmelfahrt**\nDer Kirchturm ist aus dem 13. Jhd. erhalten. Zur Weihnachtszeit ist in der Kirche die weltgrößte Naturwurzelkrippe zu bewundern.\n\n**Kreuzkapelle**\n1694 erbaut wurde sie später zum Wallfahrtsort. Sie diente den Gründern des Franziskanerordens und der Franziskanerinnen zeitweise als Wohnung.\n\n**St. Josefshaus**\nDies ist das Gründerhaus des Ordens der Franziskanerbrüder vom Heiligen Kreuz in Hausen, in dem heute ein Alten- und Pflegeheim untergebracht ist.\n\n**St. Marienhaus Kloster**\nMutterhaus der Waldbreitbacher Franziskanerinnen mit Antoniuskirche, Kräutergarten, Tagungszentrum und Restaurant Klosterbergterrassen."
  },
  directions: {
    byCar: "Über die L255 im Wiedtal bis zur Ortsmitte von Waldbreitbach, hier ist der Parkplatz Marktstraße ausgeschildert"
  },
  publicTransport: {
    arrival: "VRM Linie 130 zwischen Neuwied und Neustadt / Wied",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "VRM Linie 130",
        url: "https://ekap-download.vrs.de/downloads/linien/mini-fahrplan/2024_3130_VRM130.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Waldbreitbach",
      free: "kostenfreier Parkplatz in der Marktstraße Waldbreitbach (ausgeschildert)",
      paid: null
    }
  ],
  routeDescription: {
    general: "Vom kostenfreien Parkplatz Marktstraße biegen wir links in die Straße „In der Au“ ein und gehen bis zu deren Ende. Weiter führt uns der Weg an der Schule vorbei Richtung Brücke (hier gibt es einen lohnenden Abstecher links zur Kreuzkapelle). Vor der Brücke gehen wir rechts am lieblichen Wiedufer entlang und überqueren dann die Fußgängerbrücke hin zu den Restaurants „Nassen´s Mühle“ und dem „PRIMA Hotel Vitabalance“. Nach einer kleinen Stärkung folgen wir rechts der Straße „Am Mühlenberg“ weiter am Wiedufer entlang, vorbei am Krippenmuseum mit 2.500 Krippen aus aller Welt, bis zur Brücke. Wir gehen über die Brücke zurück auf die andere Wiedseite und biegen nach der Brücke gleich links ab. Unser Weg führt uns zur Ölmühle (früher Speiseöl-Gewinnung aus Raps, Leinsamen und Bucheckern) und dem Handwerksmuseum (über 300-jähriges Fachwerkhaus). Samstags und sonntags wird das Gebäude als uriges Kaffeehaus genutzt. Wir gehen weiter über den Spielplatz, rechts vorbei am „Camping am Strandbad“ bis zur T-Kreuzung. Hier biegen wir rechts auf die Hauptstraße („Neuwieder Straße“) ab. Vorbei an der „Alten Dorfschmiede“ und einigen Geschäften und Einkehrmöglichkeiten gelangen wir zur Tourist-Information. Wenige Meter weiter biegen wir wieder rechts in die Marktstraße ein und gelangen zurück zum Parkplatz.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "keine besonderen Sicherheitshinweise",
  safetyAppUrl: null,
  equipment: "keine besondere Ausrüstung erforderlich",
  tips: [
    {
      name: "Wiedufer",
      note: "Viele Bänke am Wiedufer laden zum Verweilen und Genuss der wärmenden Frühlingssonne ein.",
      url: null
    }
  ],
  literature: [
    "Wanderkarte Wiedtal im Maßstab 1: 25.000"
  ],
  start: {
    name: "Parkplatz Marktstraße Waldbreitbach",
    address: null,
    coordinates: null
  },
  destination: {
    name: "Parkplatz Marktstraße Waldbreitbach",
    address: null,
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 3 – MalbergSeeBlick (Hausen/Wied)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 3,
  _status: "complete",
  title: "Kleiner Wäller MalbergSeeBlick",
  subtitle: "Hausen/Wied",
  type: "Spazierwanderweg",
  km: "3,0",
  difficulty: "Mittel",
  tags: "Malbergsee, Basaltlehrpfad, Klosterlandschaft Wiedtal",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-malbergseeblick/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/65818530/",
  stats: {
    ascent: "48 hm",
    descent: "48 hm",
    duration: "0,8 h",
    highPoint: "364 m",
    lowPoint: "316 m"
  },
  description: {
    headline: null,
    text: "Wir starten auf breiten Forstwegen am Wanderparkplatz in Hausen (OT Hähnen). Auf beiden Seiten des Weges sehen wir verschiedene Projekte zur Wiederaufforstung und genießen die weiten Aussichten. Auf der Hälfte des Weges können wir die kürzere Runde über den Forstweg zurück zum Parkplatz einschlagen oder dem Wiesenweg Richtung Tal folgen. Hier genießen wir fantastische Ausblicke auf die Klosterlandschaft des Wiedtals und die Höhen des Rengsdorfer Landes. Am Horizont entdecken wir die Grube Georg bei Willroth. Unser Weg führt uns einige Meter parallel zur Kreisstraße, die wir zweimal überqueren (Vorsicht). Ein Abstecher zum Aussichtsplateau am Malbergsee mit Liegeschaukel bietet einen tollen Blick auf die Basaltsteilwände. Auf dem Basaltlehrpfad können wir anhand der Schautafeln viel zum Basaltabbau erfahren. Unser Weg führt uns hoch zur Malberg-Hütte, hier können wir regionale Speisen und herrliche Aussichten auf der Sonnenterrasse genießen bevor es zurück zum Parkplatz geht."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: "Linie 146 zwischen Bad Hönningen und Roßbach (Haltestelle \"Reuschenbach Weißfeld\", dann Fußweg)",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "Linie 146",
        url: "https://www.vrminfo.de/fileadmin/data/pdf/fahrplanbuecher/2024/faltplaene/146_FPL.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hausen (OT Hähnen)",
      free: "Kostenfreier Wanderparkplatz in 53547 Hausen (Ortsteil Hähnen)",
      paid: null
    }
  ],
  routeDescription: {
    general: "Wir starten auf breiten Forstwegen am Wanderparkplatz in Hausen (OT Hähnen). Auf beiden Seiten des Weges sehen wir verschiedene Projekte zur Wiederaufforstung und genießen die weiten Aussichten. Auf der Hälfte des Weges können wir die kürzere Runde über den Forstweg zurück zum Parkplatz einschlagen oder dem Wiesenweg Richtung Tal folgen. Hier genießen wir fantastische Ausblicke auf die Klosterlandschaft des Wiedtals und die Höhen des Rengsdorfer Landes. Am Horizont entdecken wir die Grube Georg bei Willroth. Unser Weg führt uns einige Meter parallel zur Kreisstraße, die wir zweimal überqueren (Vorsicht). Ein Abstecher zum Aussichtsplateau am Malbergsee mit Liegeschaukel bietet einen tollen Blick auf die Basaltsteilwände. Auf dem Basaltlehrpfad können wir anhand der Schautafeln viel zum Basaltabbau erfahren. Unser Weg führt uns hoch zur Malberg-Hütte, hier können wir regionale Speisen und herrliche Aussichten auf der Sonnenterrasse genießen bevor es zurück zum Parkplatz geht.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: null,
  safetyAppUrl: null,
  equipment: "festes Schuhwerk, wetterangepasste Kleidung",
  tips: [
    {
      name: "Malbergsee und Malberg-Hütte",
      note: "Das Aussichtsplateau am Malbergsee lockt uns mit Liegeschaukel und die Malberg-Hütte mit regionalen Speisen in der wärmenden Frühlingssonne.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Kostenfreier Wanderparkplatz",
    address: "53547 Hausen / OT Hähnen",
    coordinates: null
  },
  destination: {
    name: "Kostenfreier Wanderparkplatz",
    address: "53547 Hausen / OT Hähnen",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 4 – Zwergenweg 2 (Rengsdorf)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 4,
  _status: "complete",
  title: "Kleiner Wäller Zwergenweg 2",
  subtitle: "Rengsdorf",
  type: "Spazierweg",
  km: "4,5",
  difficulty: "Mittel",
  tags: "Fledermaushöhle, Laubachtal, Gewässerlehrpfad",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-zwergenweg-2-spazierweg/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/104390062/",
  stats: {
    ascent: "99 hm",
    descent: "100 hm",
    duration: "1,3 h",
    highPoint: "330 m",
    lowPoint: "235 m"
  },
  description: {
    headline: null,
    text: "Der Kleine Wäller Zwergenweg 2 heißt „Fledermaus im Laubachtal“ und startet am Waldfestplatz in Rengsdorf nahe des Römergrabens, wo sich auch ein großer Spielplatz und das Restaurant „Clubhouse“ des Tennisclub Rengsdorf befinden. Im „Clubhouse“ erwarten Sie neben Steaks, Burgern oder Schnitzel auch Salate und Kuchen. Der Rundweg ist mit einer blauen Zwergenmütze markiert und durch seine 4,5 km und 230 Höhenmetern der anspruchsvollste der drei Zwergenwege. Die Strecke besteht hauptsächlich aus Wald- und Feldwegen. Der Zwergenweg ist auch mit dem Kinderwagen gut zu gehen.\n\n**Zwergenweg Rallye:** Nehmt euch am Start den Quizbogen (für die Altersgruppen 5-7 Jahre oder 8-10 Jahre) mit und löst unterwegs die spannende Rallye. Wer das richtige Lösungswort errät, bekommt ein kleines Geschenk in den Tourist-Informationen in Rengsdorf oder Waldbreitbach. Die Rallye gibt es am roten und am blauen Zwergenweg.\n\n**Lust auf mehr Abenteuer?** In Hümmerich beim Landhotel Fernblick ist Start und Ziel der beiden GPS-Rätsel-Touren „Kupfer“ und „Gold“ über knapp 5 km durch Wald und Wiesen, Dauer ca. 2,5 Stunden. Jede Tour setzt sich aus 10 spannenden und kniffligen Rätseln zusammen. Am Ziel findet ihr eine Schatzkiste und müsst einen Zahlencode knacken. Spiel-Voraussetzung sind die Wegpunktkarten und GPS-Geräte, die auch im Hotel ausgeliehen werden können (gerne vorab reservieren, kostenfrei, Personalausweis ist zu hinterlegen)."
  },
  directions: {
    byCar: "B256 bis Rengsdorf und im Ort der Ausschilderung zum Waldfestplatz Rengsdorf (Bayerstraße) folgen"
  },
  publicTransport: {
    arrival: "VRM Linie 120 zwischen Neuwied und Altenkirchen · VRM Linie 160 zwischen Neuwied und Straßenhaus",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [
      {
        name: "VRM Linie 120",
        url: "https://bischoff-touristik.de/wp-content/uploads/2016/11/120-2.pdf"
      },
      {
        name: "VRM Linie 160",
        url: "https://ekap-download.vrs.de/downloads/linien/mini-fahrplan/2024_3160_VRM160.pdf"
      }
    ],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Rengsdorf",
      free: "Kostenfreier Parkplatz am Waldfestplatz in Rengsdorf",
      paid: null
    }
  ],
  routeDescription: {
    general: "Vom Parkplatz Waldfestplatz gehen wir - immer der blauen Zipfelmütze nach und parallel mit dem Klosterweg - in Richtung Grillhütte (falls wir den Weg in der anderen Richtung laufen möchten, verlassen wir den Klosterweg und biegen ab über die B256). Ansonsten folgen wir (wie in der Karte ausgezeichnet) dem Kloster- und dem Zwergenweg weiter bis zur oberen Wanderbrücke über die B256. Nach der Überquerung halten wir uns auf dem Wanderweg links und folgen der Wegführung bis zur Laubachswinkel-Hütte. 100 m weiter kommt der Steg, hier überqueren wir den Laubach. Am anderen Ufer geht es links zurück (hier verlassen wir den Klosterweg) und nach ca. 200 m noch einmal über eine kleine Brücke. Weiter bergab gelangen wir zur Fledermaushöhle. Nach ca. 400 m geht es auf der gegenüberliegenden Bachseite wieder leicht bergauf. 200 m weiter befindet sich eine Infotafel zum „Gewässerlehrpfad“. Kurz vor der Laubachswinkel-Hütte gehen wir rechts Richtung Parkplatz. Auf dem Rückweg überqueren wir nochmals die B256, wir gehen an der Tennishütte und dem Restaurant „Clubhouse“ vorbei und kommen noch zu einem großem Spielplatz.",
    accessTrails: [],
    accessTrailMarking: "blaue Zwergenmütze"
  },
  safetyNotes: "Keine besonderen Hinweise",
  safetyAppUrl: null,
  equipment: "keine besondere Ausrüstung erforderlich",
  tips: [
    {
      name: "Zwergenwege 1 und 3",
      note: "Auch die Zwergenwege 1 „Wasserspaß und Wildgehege“ und 3 „Apfelweg am Kräutergarten“ locken uns im Frühling mit bunten Blumen-Farbtupfern auf den Wiesen.",
      url: null
    }
  ],
  literature: [
    "Wanderkarte der Verbandsgemeinde Rengsdorf-Waldbreitbach im Maßstab 1 : 16.000"
  ],
  start: {
    name: "Waldfestplatz",
    address: "Rengsdorf",
    coordinates: null
  },
  destination: {
    name: "Waldfestplatz",
    address: "Rengsdorf",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 5 – Löwenspur 1 orange (Hachenburg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 5,
  _status: "complete",
  title: "Kleiner Wäller Löwenspur 1 (orange)",
  subtitle: "Hachenburg",
  type: "Spazierwanderweg",
  km: "6,5",
  difficulty: "Mittel",
  tags: "Nistertal, Nistermühle, Konrad Adenauer, Alter Markt",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-loewenspur-1-orange-hachenburg-spazierwanderweg/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/55681021/",
  stats: {
    ascent: "134 hm",
    descent: "137 hm",
    duration: "1,8 h",
    highPoint: "379 m",
    lowPoint: "245 m"
  },
  description: {
    headline: null,
    text: "Der orangene Weg erfordert eine durchschnittliche Fitness, feste Schuhe und Spaß an steilen Auf- und Abstiegen. Es geht an der Großen Nister entlang durch das tiefgrüne, weitläufige Nistertal. Es gibt im Wegeverlauf steigähnliche Passagen, schmale und kurvige Stellen, die Wanderer mit Höhenangst vor eine Herausforderung stellen könnten.\n\nAn der Nistermühle - der ältesten Hachenburger Mühle - vorbei (hier versteckte sich Konrad Adenauer vor der Verfolgung durch die Nationalsozialisten) wandert man hinauf zu tollen Ausblicken über die Nister. Von dort geht es zurück durch die historische Hachenburger Innenstadt mit ihrem Alten Markt und dem Löwen-Brunnen – der perfekte Ort für eine Rast bevor es durch den Burggarten zum Zielpunkt des Pfades geht."
  },
  directions: {
    byCar: "**Von Bad Marienberg (Osten):** Wir verlassen Bad Marienberg über die L294 und biegen am Ende der Straße nach links auf die B414 ein. Dieser Straße folgen wir durch Kirburg durch und an Norken vorbei. Nach etwa neun Kilometern verlassen wir die B414 nach links auf die L281, der wir bis nach Hachenburg folgen.\n\n**Von Altenkirchen (Westen):** Wir fahren über die B414 bis zum kreisel vor Hachenburg, den wir an der ersten Ausfahrt in Richtung Hachenburg auf die B413 verlassen. An der ersten Abbiegemöglichkeit nach links (hinter dem Bahnübergang) verlassen wir die Straße und fahren auf die L288 ein. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Höchstenbach (Südwesten):** Wir folgen der B413, bis wir die Straße nach rechts in die Koblenzer Straße abbiegen. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Betzdorf (Norden):** Wir folgen der L288 aus Betzdorf raus. An der Abbiegung in Richtung Marienstatt biegen nach rechts wir auf die K21 ab. Direkt danach biegen wir nach links ab, um auf der K21 zu bleiben. Wir folgen der Straße, bis wir an eine Kreuzung kommen, an der wir nach links auf die B414 in Richtung Hachenburg abbiegen. In dem Kreisverkehr nehmen wir die erste Ausfahrt in Richtung Hachenburg, wobei wir auf die B413 auffahren. Diese Straße verlassen wir nach dem Bahnübergang nach links auf die L288, der wir folgen, bis wir in Hachenburg sind."
  },
  publicTransport: {
    arrival: "Mit der Hessischen Landesbahn bis Bahnhof Hachenburg, ab dort Fußweg von ca. 300 m bis zum Startpunkt, Burggarten Hachenburg.\n\nVon Altenkirchen aus mit der Buslinie 289 in Richtung Helmeroth bis zum Schul-/Sportzentrum fahren. Dort in die Buslinie 408 in Richtung Hachenburg umsteigen. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.\n\nVon Bad Marienberg aus mit der Buslinie 960 in Richtung Hachenburg. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [
      {
        name: "Taxi Schmidt",
        location: "Hachenburg",
        phone: "02662/6119 oder 02662/6688"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Hachenburg",
        phone: "02662/944444"
      },
      {
        name: "Taxi Kappi-Tullius",
        location: "Hachenburg",
        phone: "02662/939390"
      },
      {
        name: "Taxi Hilgers",
        location: "Bad Marienberg",
        phone: "02661/5055"
      },
      {
        name: "Taxiunternehmen Kevin Nagel",
        location: "Bad Marienberg",
        phone: "02661/5949"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Altenkirchen",
        phone: "02681/2222"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Wissen",
        phone: "02742/1055"
      }
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hachenburg",
      free: "kostenfreier Parkplatz \"Am Burggarten\", Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
      paid: null
    }
  ],
  routeDescription: {
    general: "An dem Infopunkt den Weg in den Burggarten nehmen. Nach ca 60 m links auf dem Weg abbiegen und der orangen Löwentatzen-Beschilderung folgen. Im Burggarten vor dem Landschaftsmuseum links abbiegen und den Burggarten über die untere Maueröffnung verlassen. Die Straße queren, links halten und bei der ersten Abzweigung rechts abbiegen. Diesen Wiesenweg bis zur Bahnüberquerung (Brücke links) folgen.\n\nHinter der Bahnbrücke sofort rechts abbiegen. Hier hat man einen schönen Blick auf das Tal der Nister. Achtung es geht nach wenigen Metern steil bergab. Der Beschilderung durch das Holzbachtal bis zur Nisterbrücke folgen.\n\nWeiter geradeaus bis hinter den Philipps Sonderpostenmarkt. Hinter dem Markt sofort links dem Gehweg folgen. Am Ende des Gehweges links halten („Dorfwiese“) und nach ca. 150 m links in die „Hachenburger Straße“ einbiegen. Nach etwa 150 Metern rechts in die Straße \"Unterste Bitze\" abbiegen. Nach 100 Meter wieder links die Straße in den Gehweg verlassen. Jetzt führt der Weg durch die ebenen Wiesen des Nistertals. Am Ende dieses Weges links in die Friedhofsstraße abbiegen. Diesem Weg ca. 500 Meter bis hinter der Straßenunterführung (L288) folgen. Geradeaus weiter bis zur Nistermühle. Über die Fußgängerbrücke die Nister queren. In der Mühle hatte sich Konrad Adenauer 1944 vor den Nazis versteckt. Daran erinnert die Konrad Adenauer Gedenkplatte an dem Wohngebäude (Privatgrundstück).\n\nWeiter geht es links bergauf bis über die Straßenbrücke. Die Straße hier in den Pfad über die Wiese verlassen. Den \"Marienstätter Weg\" passieren und \"Zur Tiefenbach\" hochgehen. Am Cadillac-Museum links weiter und hinter dem Bahnübergang links in die Bahnhofstraße abbiegen. Am Bahnhof vorbei der Bahnhofstraße hoch bis zum Neumarkt folgen. Den Neumarkt in südlicher Richtung in die Wilhelmstraße (Fußgängerzone) verlassen. Über die Wilhelmstraße zum Alten Markt gehen. Der \"Alte Markt\" mit Löwenbrunnen ist das barocke, historische Zentrum von Hachenburg. Den Alten Markt nach Osten links oder rechts der Evangelischen Kirche bis zur Kreuzung Borngasse - Leipziger Straße - Alexanderring. Hier beginnt der Burggarten. Links nach ca. 150 m hat man Start- und Zielpunkt wieder erreicht.",
    accessTrails: [],
    accessTrailMarking: "orange Löwentatze"
  },
  safetyNotes: [
    "Der Weg erfordert eine durchschnittliche Fitness, feste Schuhe und Spaß an steilen Auf- und Abstiegen.",
    "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
    "Nehmen Sie ausreichend Flüssigkeit mit. Es sind nicht überall Einkehrmöglichkeiten vorhanden.",
    "Bitte ziehen Sie auf dem Weg angemessene Wanderschuhe an, welche Ihnen ausreichend Halt auch auf schlüpfrigen und steilen bzw. felsigen und unebenen Wegen geben.",
    "Sollten Sie bei bestimmten Wegabschnitten der Meinung sein, dass diese für Sie nicht begehbar sind, dann sollten Sie diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.",
    "Besonders im Herbst ist auch darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art müssen Sie rechnen, wenn Sie eine Wanderung unternehmen.",
    "Obwohl der Weg durchgehend sehr gut markiert ist, sollten Sie aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben."
  ],
  safetyAppUrl: null,
  equipment: "Wanderschuhe werden empfohlen.",
  tips: [
    {
      name: "Burggarten Hachenburg",
      note: "Der Burggarten lädt mit seinen vielen Picknickmöglichkeiten und einem tollen Spielplatz für die Kids zum Verweilen ein.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 6 – Löwenspur 2 rot (Hachenburg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 6,
  _status: "complete",
  title: "Kleiner Wäller Löwenspur 2 (rot)",
  subtitle: "Hachenburg",
  type: "Spazierwanderweg",
  km: "7,9",
  difficulty: "Mittel",
  tags: "Hachenburger Stadtwald, Judenfriedhof, Ziegelhütte, Alter Markt",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-loewenspur-2-rot-hachenburg-spazierwanderweg/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/55680978/",
  stats: {
    ascent: "100 hm",
    descent: "100 hm",
    duration: "2,0 h",
    highPoint: "439 m",
    lowPoint: "346 m"
  },
  description: {
    headline: null,
    text: "Durch den Burggarten und vorbei am Landschaftsmuseum führt dieser Weg auch am alten Judenfriedhof entlang zu den Bodendenkmälern in der Nähe der ehemaligen Ziegelhütte.\n\nDer Hachenburger Stadtwald ist die Heimat unterschiedlichster, faszinierender Baumarten. Ein idealer Weg, um Ruhe und Weite zu genießen. Es gibt traumhafte Aussichten auf Hachenburg und das umliegende Herz des Westerwaldes zu entdecken. Bevor es wieder durch den Burggarten zum Zielpunkt des Weges geht, lädt die historische Hachenburger Innenstadt zu einem kleinen Bummel und einer Pause auf dem Alten Markt mit ihrem goldenen Löwen ein."
  },
  directions: {
    byCar: "**Von Bad Marienberg (Osten):** Wir verlassen Bad Marienberg über die L294 und biegen am Ende der Straße nach links auf die B414 ein. Dieser Straße folgen wir durch Kirburg durch und an Norken vorbei. Nach etwa neun Kilometern verlassen wir die B414 nach links auf die L281, der wir bis nach Hachenburg folgen.\n\n**Von Altenkirchen (Westen):** Wir fahren über die B414 bis zum kreisel vor Hachenburg, den wir an der ersten Ausfahrt in Richtung Hachenburg auf die B413 verlassen. An der ersten Abbiegemöglichkeit nach links (hinter dem Bahnübergang) verlassen wir die Straße und fahren auf die L288 ein. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Höchstenbach (Südwesten):** Wir folgen der B413, bis wir die Straße nach rechts in die Koblenzer Straße abbiegen. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Betzdorf (Norden):** Wir folgen der L288 aus Betzdorf raus. An der Abbiegung in Richtung Marienstatt biegen nach rechts wir auf die K21 ab. Direkt danach biegen wir nach links ab, um auf der K21 zu bleiben. Wir folgen der Straße, bis wir an eine Kreuzung kommen, an der wir nach links auf die B414 in Richtung Hachenburg abbiegen. In dem Kreisverkehr nehmen wir die erste Ausfahrt in Richtung Hachenburg, wobei wir auf die B413 auffahren. Diese Straße verlassen wir nach dem Bahnübergang nach links auf die L288, der wir folgen, bis wir in Hachenburg sind."
  },
  publicTransport: {
    arrival: "Mit der Hessischen Landesbahn bis Bahnhof Hachenburg, ab dort Fußweg von ca. 300 m bis zum Startpunkt, Burggarten Hachenburg.\n\nVon Altenkirchen aus mit der Buslinie 289 in Richtung Helmeroth bis zum Schul-/Sportzentrum fahren. Dort in die Buslinie 408 in Richtung Hachenburg umsteigen. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.\n\nVon Bad Marienberg aus mit der Buslinie 960 in Richtung Hachenburg. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [
      {
        name: "Taxi Schmidt",
        location: "Hachenburg",
        phone: "02662/6119 oder 02662/6688"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Hachenburg",
        phone: "02662/944444"
      },
      {
        name: "Taxi Kappi-Tullius",
        location: "Hachenburg",
        phone: "02662/939390"
      },
      {
        name: "Taxi Hilgers",
        location: "Bad Marienberg",
        phone: "02661/5055"
      },
      {
        name: "Taxiunternehmen Kevin Nagel",
        location: "Bad Marienberg",
        phone: "02661/5949"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Altenkirchen",
        phone: "02681/2222"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Wissen",
        phone: "02742/1055"
      }
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hachenburg",
      free: "kostenfreier Parkplatz \"Am Burggarten\", Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
      paid: null
    }
  ],
  routeDescription: {
    general: "An dem Infopunkt den Weg in den Burggarten nehmen. Nach ca. 60 m links auf dem Weg abbiegen und immer der roten Löwentatzen-Beschilderung folgen. Den Burggarten an der oberen Maueröffnung nach rechts verlassen. Am Landschaftsmuseum vorbei die Leipziger Straße am Zebrastreifen queren und links geradeaus in den Dehlinger Weg einbiegen. An der Gabelung links durch die später beginnende Kastanienallee weitergehen bis auf der linken Seite der Judenfriedhof beginnt. Hier einbiegen und nach ca. 80 m rechts weitergehen. An diesem Wegeteil hat man einen sehr schönen Ausblick auf das Nistertal.\n\nGeradeaus weiter bis auf der linken Seite der Wald beginnt, hier rechts abbiegen bis zur Teerstraße und diese an dem Bogenschießplatz vorbei weiter in den Wald folgen. Hinter dem auf der linken Seite befindlichen Arboretum rechts abbiegen und dem Weg ca. 300 m folgen.\n\nDer Weg endet an der „Ziegelhütte“. Hier stand einst die Ziegelbrennerei. Links weiter, nach ca. 250 Meter sind links und rechts des Weges mittelalterliche Erdwälle mit einem Durchlass noch sichtbar. In diesem Bereich befand sich auch die Wüstung Horhausen.\n\nAn der nächsten Kreuzung rechts in die „Lange Schneise“ einbiegen. Bei der nächsten Kreuzung links in Richtung Andachtswald weitergehen. Am Eingang des Andachtswalds rechts weiter bis über die Alpenroder Straße. (Vorsicht beim Passieren!) Geradeaus weiter bis zur nächsten Kreuzung. Dort rechts abbiegen. Diesem Weg ca. 800 Meter folgen bis der Rastpunkt „Hasenbitze“ am linken Waldrand auftaucht.\n\nDanach geht es links weiter bis zum Kneipp-Tretbecken. Am Tretbecken rechts abbiegen. Geradeaus über den Birkenweg ca. 650 Meter weiter bis zum Bootsweiher im Tal. Am Bootsweiher geradeaus den steilen Fußgängerweg ca. 100 Meter hoch bis zum Haingärtenweg. Links abbiegen und nach ca. 150 Meter rechts abbiegen. Dann immer geradeaus durch die Herrenstraße (hier lebten früher die hohen Beamten des Grafen und im v. Beustchen Haus auch die Hachenburger Literatin Albertine von Grün) bis zum „Alten Markt“.\n\nDer \"Alte Markt\" mit Löwenbrunnen ist das barocke, historische Zentrum von Hachenburg. Den Alten Markt nach Osten links oder rechts an der Evangelischen Kirche vorbei bis zur Kreuzung Borngasse - Leipziger Straße – Alexanderring verlassen. Hier beginnt der Burggarten. Links nach ca. 150 m hat man Start- und Zielpunkt wieder erreicht.",
    accessTrails: [],
    accessTrailMarking: "rote Löwentatze"
  },
  safetyNotes: [
    "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
    "Nehmen Sie ausreichend Flüssigkeit mit. Es sind nicht überall Einkehrmöglichkeiten vorhanden.",
    "Bitte ziehen Sie auf dem Weg angemessene Wanderschuhe an, welche Ihnen ausreichend Halt auch auf schlüpfrigen und steilen bzw. felsigen und unebenen Wegen geben.",
    "Sollten Sie bei bestimmten Wegabschnitten der Meinung sein, dass diese für Sie nicht begehbar sind, dann sollten Sie diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.",
    "Besonders im Herbst ist auch darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art müssen Sie rechnen, wenn Sie eine Wanderung unternehmen.",
    "Obwohl der Weg durchgehend sehr gut markiert ist, sollten Sie aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben."
  ],
  safetyAppUrl: null,
  equipment: "Festes Schuhwerk oder Laufschuhe sind ausreichend.",
  tips: [
    {
      name: "Landschaftsmuseum Westerwald",
      note: "Starte deine Tour mit einem Abstecher ins Landschaftsmuseum Westerwald – hier wird Geschichte lebendig!",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 7 – Löwenspur 3 blau (Hachenburg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 7,
  _status: "complete",
  title: "Kleiner Wäller Löwenspur 3 (blau)",
  subtitle: "Hachenburg",
  type: "Spazierwanderweg",
  km: "7,5",
  difficulty: "Mittel",
  tags: "Rothbachgrotte, Gipfelkreuz, Hachenburger Brauerei, Eiskeller",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-loewenspur-3-blau-hachenburg-spazierwanderweg/",
  gpxUrl: null,
  tourenplanerUrl: "https://www.tourenplaner-rheinland-pfalz.de/de/tour/55680928/",
  stats: {
    ascent: "169 hm",
    descent: "169 hm",
    duration: "2,0 h",
    highPoint: "425 m",
    lowPoint: "323 m"
  },
  description: {
    headline: null,
    text: "Der älteste Hachenburger Wasserbehälter liegt am Weg und die Rothbachgrotte lädt zum Innehalten und Durchatmen ein. Im Verlauf der Strecke gibt es am sog. „Gipfelkreuz“ einen wunderbaren Blick auf Hachenburg mit seinem Barockschloss. Durch den Ortsteil Altstadt mit der Hachenburger Brauerei, Hopfengarten und historischem Eiskeller, geht es zurück in die traditionsreiche Innenstadt mit ihrem Alten Markt und goldenem Löwen auf dem Brunnen. Hier lässt man die Seele baumeln, bevor es durch den Burggarten zum Zielpunkt geht."
  },
  directions: {
    byCar: "**Von Bad Marienberg (Osten):** Wir verlassen Bad Marienberg über die L294 und biegen am Ende der Straße nach links auf die B414 ein. Dieser Straße folgen wir durch Kirburg durch und an Norken vorbei. Nach etwa neun Kilometern verlassen wir die B414 nach links auf die L281, der wir bis nach Hachenburg folgen.\n\n**Von Altenkirchen (Westen):** Wir fahren über die B414 bis zum kreisel vor Hachenburg, den wir an der ersten Ausfahrt in Richtung Hachenburg auf die B413 verlassen. An der ersten Abbiegemöglichkeit nach links (hinter dem Bahnübergang) verlassen wir die Straße und fahren auf die L288 ein. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Höchstenbach (Südwesten):** Wir folgen der B413, bis wir die Straße nach rechts in die Koblenzer Straße abbiegen. Dieser Straße folgen wir bis nach Hachenburg.\n\n**Von Betzdorf (Norden):** Wir folgen der L288 aus Betzdorf raus. An der Abbiegung in Richtung Marienstatt biegen nach rechts wir auf die K21 ab. Direkt danach biegen wir nach links ab, um auf der K21 zu bleiben. Wir folgen der Straße, bis wir an eine Kreuzung kommen, an der wir nach links auf die B414 in Richtung Hachenburg abbiegen. In dem Kreisverkehr nehmen wir die erste Ausfahrt in Richtung Hachenburg, wobei wir auf die B413 auffahren. Diese Straße verlassen wir nach dem Bahnübergang nach links auf die L288, der wir folgen, bis wir in Hachenburg sind."
  },
  publicTransport: {
    arrival: "Mit der Hessischen Landesbahn bis Bahnhof Hachenburg, ab dort Fußweg von ca. 300 m bis zum Startpunkt, Burggarten Hachenburg.\n\nVon Altenkirchen aus mit der Buslinie 289 in Richtung Helmeroth bis zum Schul-/Sportzentrum fahren. Dort in die Buslinie 408 in Richtung Hachenburg umsteigen. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.\n\nVon Bad Marienberg aus mit der Buslinie 960 in Richtung Hachenburg. Von der Haltestelle am Markt sind es ca. 5 Minuten Fußweg bis zum Startpunkt am Burggarten, Alexanderring, Hachenburg.",
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [
      {
        name: "Taxi Schmidt",
        location: "Hachenburg",
        phone: "02662/6119 oder 02662/6688"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Hachenburg",
        phone: "02662/944444"
      },
      {
        name: "Taxi Kappi-Tullius",
        location: "Hachenburg",
        phone: "02662/939390"
      },
      {
        name: "Taxi Hilgers",
        location: "Bad Marienberg",
        phone: "02661/5055"
      },
      {
        name: "Taxiunternehmen Kevin Nagel",
        location: "Bad Marienberg",
        phone: "02661/5949"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Altenkirchen",
        phone: "02681/2222"
      },
      {
        name: "Taxi Uwe Bischoff",
        location: "Wissen",
        phone: "02742/1055"
      }
    ],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {
      location: "Hachenburg",
      free: "kostenfreier Parkplatz \"Am Burggarten\", Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
      paid: null
    }
  ],
  routeDescription: {
    general: "An dem Infopunkt den Weg in den Burggarten nehmen. Nach ca. 60 m links auf dem Weg abbiegen und immer der blauen Löwentatze-Beschilderung folgen. Den Burggarten an der oberen Maueröffnung nach rechts verlassen. Am Landschaftsmuseum vorbei die Leipziger Straße am Zebrastreifen queren und links weitergehen und sofort rechts in den Adolphweg einbiegen. Nach 200 Metern kommt ein Steilstück! Nach dem Steilstück die Borngasse am Zebrastreifen queren und nach links abbiegen. Sofort in die Straße „Am Schwimmbad“ rechts einbiegen. Am Ende der Straße, vor dem Bootsweiher, nach links in den Birkenweg einbiegen. Diesen gerade aus bis in den Wald weiterlaufen. Am Kneipp-Tretbecken halbrechts vorbei gehen. Hier hat man einen Ausblick je nach Wetterlage bis zum Siebengebirge bei Bonn.\n\nHinter dem Wasserhochbehälter (der historische ist auf der linken Seite) geht es rechts weiter. An der nächsten Kreuzung links abbiegen und nach ca. 40 Meter wieder rechts abbiegen. Die Gehlerter Straße queren (Vorsicht!) und den Waldweg weiter in das Rothenbachtal. An der ersten Abzweigung rechts abbiegen, an der Brauereiquelle (linke Seite) vorbei um nach ca. 350 Meter links zur „Rothbachgrotte“ abzubiegen. Den Rothenbach queren und dem Weg (Steigcharakter) ca. 300 Meter folgen, bis zum Waldrand.\n\nHier die Steinebacher Straße überqueren. In die Straße „Vor der Heck“ einbiegen und sofort an der linken Seite neben der Garage den Waldweg nehmen. An einem Marienbildnis vorbei der Wegmarkierung bis zu der Teerstraße vor der Altstädter Grillhütte weitergehen. Nach rechts abbiegen und der Straße bis zum Altstädter Bergkreuz folgen. In diesem Bereich hat man sehr gute Panoramaaussichten auf Hachenburg und Umgebung.\n\nAm Altstädter Bergkreuz dem Grasweg entweder links oder rechts des Elektrozauns folgen bis zur Straße „Am Hebeberg“. Rechts halten bis in die „Bergstraße“. Dann links, die Steinebacher Straße queren und nach dem Briefkasten den Fußweg bis zur „Bleichstraße“ weiterlaufen. Auf der Bleichstraße immer links halten bis zu dem Altstädter „Mühlenbrunnen“ auf der rechten Seite. Bis zur nächsten Kreuzung weitergehen und dann rechts abbiegen bis zur Brauerei. Alternativ kann auch ein Abstecher in den „Bierpark“ der Hachenburger Brauerei gemacht werden.\n\nAm Gehlerter Weg beim Zebrastreifen die Seite wechseln und dann links weitergehen, nach ca. 70 Meter rechts den Fußweg weiterlaufen. An dem alten „Eiskeller“ der Brauerei vorbei bis zu dem Parkplatz des Kinderhauses. Den Parkplatz nach rechts passieren und sofort am Ende der Umzäunung den Gehweg auf der linken Seite bis zur „Lohmühle“ beim Löwenbad weiterlaufen.\n\nNach links in den „Bachweg“ einbiegen, diesen ca. 350 Meter immer geradeaus bis zum „Johann-August-Ring“ weiterlaufen, hier links und sofort am Steinweg rechts abbiegen.\n\nDurch die Wilhelmstraße (Fußgängerzone) bis zum „Alten Markt“.\n\nDer \"Alte Markt\" mit Löwenbrunnen ist das barocke, historische Zentrum von Hachenburg. Den Alten Markt nach Osten links oder rechts an der Evangelischen Kirche vorbei bis zur Kreuzung Borngasse - Leipziger Straße – Alexanderring verlassen. Hier beginnt der Burggarten. Links nach ca. 150 m hat man Start- und Zielpunkt wieder erreicht.",
    accessTrails: [],
    accessTrailMarking: "blaue Löwentatze"
  },
  safetyNotes: [
    "Besichtigung des Biergartens der Brauerei Hachenburg erfolgt auf eigene Gefahr. Der Biergarten ist kostenfrei und hat jederzeit geöffnet.",
    "Tragen Sie festes Schuhwerk sowie witterungsangepasste, zweckmäßige Kleidung, die Sie vor Kälte und Nässe bzw. Hitze und Sonne schützt.",
    "Nehmen Sie ausreichend Flüssigkeit mit. Es sind nicht überall Einkehrmöglichkeiten vorhanden.",
    "Bitte ziehen Sie auf dem Weg angemessene Wanderschuhe an, welche Ihnen ausreichend Halt auch auf schlüpfrigen und steilen bzw. felsigen und unebenen Wegen geben.",
    "Sollten Sie bei bestimmten Wegabschnitten der Meinung sein, dass diese für Sie nicht begehbar sind, dann sollten Sie diese umgehen. Gerade bei widrigen Wetterverhältnissen kann es bei naturnahen Wegen zu matschigen und rutschigen Passagen kommen.",
    "Besonders im Herbst ist auch darauf zu achten, dass das am Boden liegende Laub Unebenheiten, Wurzeln, Steine oder Löcher im Weg verdecken kann. Mit Wegebeeinträchtigungen dieser Art müssen Sie rechnen, wenn Sie eine Wanderung unternehmen.",
    "Obwohl der Weg durchgehend sehr gut markiert ist, sollten Sie aus Sicherheitsgründen immer eine geeignete Wanderkarte dabei haben."
  ],
  safetyAppUrl: null,
  equipment: "Leichte Wanderschuhe oder festes Schuhwerk (Laufschuhe) sind ausreichend.",
  tips: [
    {
      name: "Gipfelkreuz",
      note: "Am \"Gipfelkreuz\" genießt man einen tollen Ausblick auf Hachenburg sowie auf das Barockschloss.",
      url: null
    }
  ],
  literature: [],
  start: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  },
  destination: {
    name: "Parkplatz \"Am Burggarten\"",
    address: "Alexanderring, 57627 Hachenburg, Einfahrt zum Parkhotel Hachenburg",
    coordinates: null
  }
},

// ═══════════════════════════════════════════════════════════
// 8 – Basalt + Wasser (Greifenstein)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 8,
  _status: "complete",
  title: "Kleiner Wäller Basalt + Wasser",
  subtitle: "Greifenstein",
  type: "Spazierwanderweg",
  km: "8",
  difficulty: "leicht",
  tags: "Ulmbachtalsperre, BASALT-PARKours, Basaltbauwerke",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "101 hm",
    descent: "101 hm",
    duration: "2,0 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Von der Ulmbachtalsperre durch den BASALT-PARKours",
    text: "Führt durch Wald und BASALT-PARKours vorbei an unterschiedlichen Basaltbauwerken."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Greifenstein", free: null, paid: null}
  ],
  routeDescription: {
    general: "Von der Ulmbachtalsperre führt der Weg durch den Wald und den BASALT-PARKours vorbei an unterschiedlichen Basaltbauwerken. Ein abwechslungsreicher Spazierwanderweg mit geologischen Highlights.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Überwiegend Wald- und Forstwege. Bei Nässe können naturnahe Abschnitte rutschig sein.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk empfohlen.",
  tips: [
    {name: "Ulmbachtalsperre", note: "Ausgangspunkt der Tour", url: null},
    {name: "BASALT-PARKours", note: "Verschiedene Basaltbauwerke entlang des Weges", url: null}
  ],
  literature: [],
  start: {name: "Greifenstein", address: "Greifenstein", coordinates: null},
  destination: {name: "Greifenstein (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 9 – Sagenweg (Hirz-Maulsbach)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 9,
  _status: "complete",
  title: "Kleiner Wäller Sagenweg",
  subtitle: "Hirz-Maulsbach",
  type: "Spazierwanderweg",
  km: "5",
  difficulty: "mittel",
  tags: "Sagen, Legenden, Hirz-Maulsbach",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "68 hm",
    descent: "68 hm",
    duration: "1,2 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Auf den Spuren von Sagen und Legenden",
    text: "Der Sagenweg führt auf den Spuren lokaler Sagen durch die Landschaft bei Hirz-Maulsbach."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Hirz-Maulsbach", free: null, paid: null}
  ],
  routeDescription: {
    general: "Der Sagenweg führt auf den Spuren lokaler Sagen und Legenden durch die abwechslungsreiche Landschaft bei Hirz-Maulsbach. An verschiedenen Stationen werden Geschichten aus der Region erzählt.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Naturnahe Wege. Bei Nässe auf rutschige Stellen achten.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk empfohlen.",
  tips: [],
  literature: [],
  start: {name: "Hirz-Maulsbach", address: "Hirz-Maulsbach", coordinates: null},
  destination: {name: "Hirz-Maulsbach (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 10 – Klangpfad (Rott)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 10,
  _status: "complete",
  title: "Kleiner Wäller Klangpfad",
  subtitle: "Rott",
  type: "Spazierwanderweg",
  km: "5",
  difficulty: "mittel",
  tags: "Klanginstrumente, familienfreundlich, Kinderwagen-tauglich",
  sourceUrl: "https://www.westerwald.info/d/kleiner-waeller-klangpfad-rott/",
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "101 hm",
    descent: "101 hm",
    duration: "1,5 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Tolle Instrumente entdecken \u2013 hören, sehen, fühlen",
    text: "Besonders für Familien mit Kindern gibt es auf dem Klangpfad viele tolle Instrumente zu entdecken. Ausprobieren, hören, sehen, fühlen oder einfach mal in der Wippe baumeln. Immer dem violetten Notenzeichen folgen. Mit Kinderwagen oder Laufrad befahrbar."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Rott", free: null, paid: null}
  ],
  routeDescription: {
    general: "Rundweg mit verschiedenen Klanginstrumenten zum Ausprobieren. Dem violetten Notenzeichen folgend entdecken Familien und Kinder die Instrumente. Der Weg ist auch mit Kinderwagen oder Laufrad befahrbar.",
    accessTrails: [],
    accessTrailMarking: "Violettes Notenzeichen"
  },
  safetyNotes: "Familienfreundlicher Rundweg. Mit Kinderwagen und Laufrad befahrbar.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Bequemes Schuhwerk genügt. Kinderwagen-tauglich.",
  tips: [
    {name: "Klanginstrumente", note: "Verschiedene Stationen zum Ausprobieren", url: null},
    {name: "Kinderwagen-tauglich", note: "Auch mit Laufrad befahrbar", url: null}
  ],
  literature: [],
  start: {name: "Rott", address: "Rott", coordinates: null},
  destination: {name: "Rott (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 11 – Kunst + Natur (Greifenstein)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 11,
  _status: "complete",
  title: "Kleiner Wäller Kunst + Natur",
  subtitle: "Greifenstein",
  type: "Spazierwanderweg",
  km: "5",
  difficulty: "mittel",
  tags: "Skulpturenpark, Siegfried Fietz, Outdoorzentrum Lahntal",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "96 hm",
    descent: "96 hm",
    duration: "1,4 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Natur und Skulpturenpark Siegfried Fietz",
    text: "Auf ca. 5 km entdeckt man die Schönheit der Natur und den Skulpturenpark Siegfried Fietz. Start am Outdoorzentrum Lahntal."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Greifenstein", free: null, paid: null}
  ],
  routeDescription: {
    general: "Start am Outdoorzentrum Lahntal. Auf ca. 5 km entdeckt man die Schönheit der Natur und den Skulpturenpark Siegfried Fietz mit Kunstwerken in natürlicher Umgebung.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Naturnahe Wege. Bei Nässe auf rutschige Stellen achten.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk empfohlen.",
  tips: [
    {name: "Skulpturenpark Siegfried Fietz", note: "Kunst in der Natur", url: null}
  ],
  literature: [],
  start: {name: "Outdoorzentrum Lahntal", address: "Greifenstein", coordinates: null},
  destination: {name: "Greifenstein (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 12 – Wolfsteine (Bad Marienberg)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 12,
  _status: "complete",
  title: "Kleiner Wäller Wolfsteine",
  subtitle: "Bad Marienberg",
  type: "Spazierwanderweg",
  km: "7",
  difficulty: "mittel",
  tags: "Wolfsteine, Basalt, Wildpark, Hedwigsturm, Barfußpfad",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "129 hm",
    descent: "129 hm",
    duration: "2,0 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Basaltformationen und Wildpark Bad Marienberg",
    text: "Zahlreiche Basaltformationen und der Wildpark Bad Marienberg. Der Hedwigsturm, der Kurpark mit Barfußpfad und ein Kneipp-Tretbecken warten."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Bad Marienberg", free: null, paid: null}
  ],
  routeDescription: {
    general: "Rundweg vorbei an mächtigen Basaltformationen (Wolfsteine), durch den Wildpark Bad Marienberg mit ganzjährig geöffneter Falknerei. Über den Hedwigsturm mit Panoramablick zum Kurpark mit Barfußpfad und Kneipp-Tretbecken.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Naturnahe Waldwege, teilweise steinig. Festes Schuhwerk erforderlich.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, witterungsangepasste Kleidung.",
  tips: [
    {name: "Wolfsteine", note: "Mächtige Basaltformation", url: null},
    {name: "Wildpark Bad Marienberg", note: "Ganzjährig geöffnet, Falknerei", url: null},
    {name: "Hedwigsturm", note: "Panoramablick", url: null}
  ],
  literature: [],
  start: {name: "Bad Marienberg", address: "Bad Marienberg", coordinates: null},
  destination: {name: "Bad Marienberg (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 13 – Weg der Sinne (Werkhausen)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 13,
  _status: "complete",
  title: "Kleiner Wäller Weg der Sinne",
  subtitle: "Werkhausen",
  type: "Spazierweg",
  km: "3",
  difficulty: "leicht",
  tags: "Sinnesstationen, Barfußpfad, Fühlboxen, familienfreundlich",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "49 hm",
    descent: "45 hm",
    duration: "0,7 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Einen Spaziergang mit allen Sinnen erleben",
    text: "Diese kleine Rundtour fordert deine Sinne heraus: Balancierbalken, Farbenspiel, Fühlboxen, naschbare Beete und ein Barfußpfad. Riechen, Schmecken, Sehen, Fühlen und Hören werden beschäftigt."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Werkhausen", free: null, paid: null}
  ],
  routeDescription: {
    general: "Kleine Rundtour mit verschiedenen Sinnesstationen: Balancierbalken, Farbenspiel, Fühlboxen, naschbare Beete und ein Barfußpfad. Alle fünf Sinne werden angesprochen.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Leichter Spazierweg ohne besondere Gefahrenstellen. Für Familien mit Kindern geeignet.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Bequemes Schuhwerk genügt.",
  tips: [
    {name: "Sinnesstationen", note: "Balancierbalken, Fühlboxen, Farbenspiel", url: null},
    {name: "Barfußpfad", note: "Kitzelt die Fußsohlen!", url: null}
  ],
  literature: [],
  start: {name: "Werkhausen", address: "Werkhausen", coordinates: null},
  destination: {name: "Werkhausen (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 14 – Vitalparcours (Rengsdorf)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 14,
  _status: "complete",
  title: "Kleiner Wäller Vitalparcours",
  subtitle: "Rengsdorf",
  type: "Spazierweg",
  km: "4",
  difficulty: "leicht",
  tags: "Fitness, Vitalparcours, Rengsdorf, Hardert, Bonefeld",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "131 hm",
    descent: "69 hm",
    duration: "1,3 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Naturnah trainieren und genießen",
    text: "Sport, Spaß und Fitness inmitten der Natur. 6 Fitness-Stationen auf dem Weg durch Rengsdorf, Hardert und Bonefeld."
  },
  directions: {
    byCar: null
  },
  publicTransport: {
    arrival: null,
    returnTrip: null,
    returnTripUrl: null,
    stops: [],
    links: [],
    taxis: [],
    sustainableTip: null,
    sustainableTipUrls: [],
    moreInfoUrl: null
  },
  parking: [
    {location: "Rengsdorf", free: null, paid: null}
  ],
  routeDescription: {
    general: "Spazierweg mit 6 Fitness-Stationen durch Rengsdorf, Hardert und Bonefeld. Sport, Spaß und Fitness inmitten der Natur.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Leichter Spazierweg. Fitness-Stationen auf eigene Verantwortung nutzen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Sportliche Kleidung und festes Schuhwerk empfohlen.",
  tips: [
    {name: "6 Fitness-Stationen", note: "Trainingsgeräte entlang des Weges", url: null}
  ],
  literature: [],
  start: {name: "Rengsdorf", address: "Rengsdorf", coordinates: null},
  destination: {name: "Rengsdorf (Rundweg)", address: null, coordinates: null}
}

];
