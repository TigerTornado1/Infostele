/**
 * Guck ma, Westerwald – Datendatei
 * Kleine Wäller (Spazierwege & Spazierwanderwege)
 * 
 * Quelle: westerwald.info/spazierwanderwege/
 * Stand: April 2026
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
  km: "6",
  difficulty: "mittel",
  tags: "Roßbacher Häubchen, Basaltlehrpfad, Panoramablick, Vulkankegel",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "98 hm",
    descent: "98 hm",
    duration: "1,6 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Rund ums Roßbacher Häubchen mit Basaltlehrpfad",
    text: "Der Rundweg hat seinen Namen vom 350 m hohen Roßbacher Häubchen \u2013 einem erodierten Vulkankegel mit spannenden Basaltwänden und einem kleinen Basaltlehrpfad, der den Basaltabbau von 1883 bis 1942 erklärt."
  },
  directions: {
    byCar: "Von Roßbach/Wied oder A3 Abfahrt Fernthal über die L256."
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
    {location: "Breitscheid", free: "Roßbacher Straße Ecke Waldstraße, 53547 Breitscheid (kleiner, kostenloser Wanderparkplatz)", paid: null}
  ],
  routeDescription: {
    general: "Start am Ortsrand von Breitscheid. Über Straße Sauerwiese, dann Fußweg an Waldrändern, über Wiesen und Felder zum Abzweig Roßbacher Häubchen. 200 m Zuweg zum Aussichtsplateau. Aufstieg zum Gipfel nur für trittsichere Wanderer (Stahlseil im Fels). Zurück durch kleinen Wald, Feld- und Wiesenwege zum Brunnenplatz, dann zur Anna-Kapelle.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Aufstieg zum Gipfel des Roßbacher Häubchens nur für trittsichere Wanderer (Stahlseil im Fels). Bei Nässe kann der Aufstieg rutschig sein.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, besonders für den Gipfelaufstieg. Bei wechselhaftem Wetter witterungsangepasste Kleidung.",
  tips: [
    {name: "Roßbacher Häubchen (350 m)", note: "Erodierter Vulkankegel, Basaltlehrpfad (Abbau 1883\u20131942)", url: null},
    {name: "Panoramablick", note: "Wiedtal, bei guter Sicht Siebengebirge und Eifel", url: null},
    {name: "Restaurant Zum Dorfkrug", note: "Deutsche, italienische, indische Spezialitäten, Sonnenterrasse", url: null},
    {name: "Anna-Kapelle", note: "Erstmals erwähnt 1767, Spielplatz gegenüber", url: null}
  ],
  literature: [],
  start: {name: "Parkplatz Roßbacher Straße", address: "Roßbacher Straße/Ecke Waldstraße, 53547 Breitscheid", coordinates: null},
  destination: {name: "Breitscheid (Rundweg)", address: null, coordinates: null}
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
  km: "3",
  difficulty: "leicht",
  tags: "Wied, Weihnachtsdorf, barrierefrei",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "13 hm",
    descent: "13 hm",
    duration: "0,7 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Gemütlich durch Waldbreitbach und an der Wied entlang",
    text: "Eine schöne kleine Rundtour: ca. 3 km durch den Ort Waldbreitbach und an der Wied entlang."
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
    {location: "Waldbreitbach", free: "Marktstraße, 56588 Waldbreitbach", paid: null}
  ],
  routeDescription: {
    general: "3 km langer, ebenerdiger und barrierearmer Rundweg durch den romantischen Ort Waldbreitbach entlang der Wied. Viele Sitzbänke und Cafés. Vom 1. Advent bis letzten Sonntag im Januar verwandelt sich Waldbreitbach ins Weihnachtsdorf mit schwimmender Krippe und Adventskranz auf der Wied.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Ebenerdiger, asphaltierter Rundweg ohne besondere Gefahrenstellen. Auch für Kinderwagen und Rollstuhl geeignet.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Keine besonderen Anforderungen. Bequemes Schuhwerk genügt.",
  tips: [
    {name: "Weihnachtsdorf Waldbreitbach", note: "1. Advent bis Ende Januar, schwimmende Krippe auf der Wied", url: null},
    {name: "Barrierefrei", note: "Ebenerdiger, asphaltierter Rundweg", url: null}
  ],
  literature: [],
  start: {name: "Waldbreitbach", address: "Marktstraße, 56588 Waldbreitbach", coordinates: null},
  destination: {name: "Waldbreitbach (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 3 – MalbergSeeBlick (Hausen/Wied)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 3,
  _status: "complete",
  title: "Kleiner Wäller MalbergSeeBlick",
  subtitle: "Hausen/Wied",
  type: "Spazierweg",
  km: "3",
  difficulty: "mittel",
  tags: "Malbergsee, Basaltlehrpfad, Liegeschaukel, Malberg-Hütte",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "48 hm",
    descent: "48 hm",
    duration: "0,8 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Aussichtsreich am Malbergsee mit Basaltlehrpfad und Einkehr",
    text: "Ein abwechslungsreicher Spazierweg am Malbergsee mit weiten Aussichten, Basaltlehrpfad und der gemütlichen Malberg-Hütte als Einkehrziel."
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
    {location: "Hausen/Wied", free: "Wanderparkplatz Hausen, OT Hähnen (unterhalb der Malberg Hütte)", paid: null}
  ],
  routeDescription: {
    general: "Start am Wanderparkplatz Hähnen. Auf breiten Forstwegen mit Wiederaufforstungsprojekten und weiten Aussichten. Auf halber Strecke Option für kürzere barrierefreie Runde. Wiesenweg Richtung Tal mit Ausblicken auf Klosterlandschaft Wiedtal und Rengsdorfer Land. Abstecher zum Aussichtsplateau am Malbergsee mit Liegeschaukel und Blick auf Basaltsteilwände. Basaltlehrpfad. Hoch zur Malberg-Hütte (regionale Speisen, Sonnenterrasse).",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Breite Forstwege, keine besonderen Gefahrenstellen. Auf halber Strecke ist eine kürzere barrierefreie Runde möglich.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk empfohlen. Bei Regen können Forstwege matschig werden.",
  tips: [
    {name: "Liegeschaukel am Malbergsee", note: "Toller Blick auf die Basaltsteilwände", url: null},
    {name: "Basaltlehrpfad", note: "Schautafeln zum Basaltabbau", url: null},
    {name: "Malberg-Hütte", note: "Regionale Speisen, Naturgenuss Gastgeber, Sonnenterrasse", url: null},
    {name: "Barrierefreie Kürzung", note: "Auf halber Strecke über Forstweg zurück möglich", url: null}
  ],
  literature: [],
  start: {name: "Wanderparkplatz Hähnen", address: "Dorfstraße, 53547 Hausen/Wied OT Hähnen", coordinates: null},
  destination: {name: "Hausen/Wied (Rundweg)", address: null, coordinates: null}
},

// ═══════════════════════════════════════════════════════════
// 4 – Zwergenweg 2 (Rengsdorf)  [COMPLETE]
// ═══════════════════════════════════════════════════════════
{
  id: 4,
  _status: "complete",
  title: "Kleiner Wäller Zwergenweg 2",
  subtitle: "Rengsdorf",
  type: "Spazierwanderweg",
  km: "5",
  difficulty: "mittel",
  tags: "Laubachtal, Fledermäuse, Höhlen, familienfreundlich",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "99 hm",
    descent: "100 hm",
    duration: "1,3 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Nicht nur Zwerge lieben diesen Weg",
    text: "Auf dem Zwergenweg bei Rengsdorf gibt es Höhlen zu bestaunen und Naturschönheiten zu genießen."
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
    {location: "Rengsdorf", free: "Parkplatz Waldfestplatz, 56579 Rengsdorf (im Ort der Ausschilderung folgen)", paid: null}
  ],
  routeDescription: {
    general: "Rundweg durch das Laubachtal. Kinder erfahren etwas über Fledermäuse, bestaunen Höhlen und genießen die Natur. Am Römergraben Spielplatz und Einkehr im Clubhouse des Tennisclubs.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Familienfreundlicher Rundweg. In den Höhlenbereichen auf den Untergrund achten.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, bei Kindern ggf. Wechselkleidung mitnehmen.",
  tips: [
    {name: "Fledermaus im Laubachtal", note: "Lehrpfad über einheimische Fledermäuse", url: null},
    {name: "Höhlen", note: "Zum Bestaunen am Wegesrand", url: null},
    {name: "Clubhouse Rengsdorf", note: "Einkehr am Römergraben", url: null},
    {name: "Weitere Zwergenwege", note: "Zwergenweg 1 (rot, 4,2 km) und Zwergenweg 3 (grün, 2 km)", url: null}
  ],
  literature: [],
  start: {name: "Waldfestplatz Rengsdorf", address: "56579 Rengsdorf", coordinates: null},
  destination: {name: "Rengsdorf (Rundweg)", address: null, coordinates: null}
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
  km: "6",
  difficulty: "mittel",
  tags: "Hachenburg, Altstadt, Schloss, Löwenspur",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "134 hm",
    descent: "137 hm",
    duration: "1,8 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Löwenspur orange durch die historische Altstadt Hachenburgs mit Schloss und Cafés",
    text: "Die Löwenspuren sind drei Rundwege unterschiedlicher Länge rund um die historische Stadt Hachenburg. Farblich markiert (orange) laden sie zum Entdecken ein."
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
    {location: "Hachenburg", free: "Parkplatz Innenstadt Hachenburg", paid: null}
  ],
  routeDescription: {
    general: "Rundweg durch die historische Altstadt von Hachenburg. Der orange markierte Löwenspur-Weg führt vorbei an Schloss, Marktplatz, Cafés und Fachwerkkulisse.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Überwiegend befestigte Wege in und um Hachenburg. Keine besonderen Gefahrenstellen.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Bequemes Schuhwerk genügt.",
  tips: [],
  literature: [],
  start: {name: "Hachenburg", address: "Hachenburg", coordinates: null},
  destination: {name: "Hachenburg (Rundweg)", address: null, coordinates: null}
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
  km: "8",
  difficulty: "mittel",
  tags: "Hachenburg, Wald, Flur, Löwenspur",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "100 hm",
    descent: "100 hm",
    duration: "2,0 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Löwenspur rot durch Wald und Flur rund um Hachenburg",
    text: "Die Löwenspuren sind drei Rundwege unterschiedlicher Länge rund um die historische Stadt Hachenburg. Farblich markiert (rot) laden sie zum Entdecken ein."
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
    {location: "Hachenburg", free: "Parkplatz Innenstadt Hachenburg", paid: null}
  ],
  routeDescription: {
    general: "Rundweg durch Wald und Flur rund um Hachenburg. Der rot markierte Löwenspur-Weg ist mit 8 km der mittlere der drei Löwenspuren.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Teilweise naturnahe Waldwege. Bei Nässe kann es rutschig werden.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk empfohlen.",
  tips: [],
  literature: [],
  start: {name: "Hachenburg", address: "Hachenburg", coordinates: null},
  destination: {name: "Hachenburg (Rundweg)", address: null, coordinates: null}
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
  km: "8",
  difficulty: "mittel",
  tags: "Hachenburg, Stadtwald, Aussichtspunkt, Löwenspur",
  sourceUrl: null,
  gpxUrl: null,
  tourenplanerUrl: null,
  stats: {
    ascent: "169 hm",
    descent: "169 hm",
    duration: "2,0 h",
    highPoint: null,
    lowPoint: null
  },
  description: {
    headline: "Löwenspur blau durch den Hachenburger Stadtwald mit grandiosem Ausblick",
    text: "Die Löwenspuren sind drei Rundwege unterschiedlicher Länge rund um die historische Stadt Hachenburg. Farblich markiert (blau) laden sie zum Entdecken ein."
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
    {location: "Hachenburg", free: "Parkplatz Innenstadt Hachenburg", paid: null}
  ],
  routeDescription: {
    general: "Rundweg durch den Hachenburger Stadtwald. Der blau markierte Löwenspur-Weg ist mit 169 hm Aufstieg der anspruchsvollste der drei Löwenspuren und belohnt mit grandiosem Ausblick.",
    accessTrails: [],
    accessTrailMarking: null
  },
  safetyNotes: "Teilweise steilere Waldwege. Trittsicherheit empfohlen, besonders bei feuchtem Wetter.",
  safetyAppUrl: "https://www.rlp-tourismus.com/de/service/rheinland-pfalz-erleben-app",
  equipment: "Festes Schuhwerk, witterungsangepasste Kleidung.",
  tips: [],
  literature: [],
  start: {name: "Hachenburg", address: "Hachenburg", coordinates: null},
  destination: {name: "Hachenburg (Rundweg)", address: null, coordinates: null}
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
