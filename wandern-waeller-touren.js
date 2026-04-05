/**
 * Guck ma, Westerwald – Datendatei
 * Wäller Touren (Rund- und Tageswanderwege)
 * 
 * Quelle: westerwald.info/waeller-touren/
 * Stand: April 2026
 * 
 * 16 Touren, exakt wie auf westerwald.info gelistet.
 */

const DATA_WANDERN_WAELLER_TOUREN = [

// ═══ 1. Stöffel-Route ═══
{id:1, _status:"complete",
 title:"Wäller Tour Stöffel-Route", subtitle:null, type:"Rundwanderweg / GeoRoute",
 km:"12", difficulty:"mittel", tags:"Stöffel-Park, Basalt, Tertiär, Fossilien, GeoRoute",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-und-georoute-tertiaer-industrie-erlebnis-stoeffel-route/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=806023509&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"274 hm", descent:"274 hm", duration:"3,3 h", highPoint:null, lowPoint:null},
 description:{headline:"Auf der Spur des Basalts durch 25 Millionen Jahre Erdgeschichte", text:"Die GeoRoute führt durch den Stöffel-Park mit dem TERTIÄRUM und dem GeoBlick Stöffel-Turm. Zahlreiche GeoStationen erklären den Weg von der vulkanischen Entstehung des Basalts bis zum Edelsplitt."},
 directions:{byCar:"Von der Landesstraße 281 aus ist der Stöffel-Park touristisch ausgeschildert."},
 parking:[{location:"Stöffel-Park", free:"Am Stöffel-Park ausreichend Parkplätze vorhanden", paid:null}, {location:"Stockum-Püschen", free:"Götzenberg-Halle (Hinweisbeschilderung zum Stöffel-Turm)", paid:null}],
 routeDescription:{general:"Start an der Infobox am Eingang zum Stöffel-Park. Die Wanderung über das Gelände ist kostenfrei. Vorbei am Uhu-Gehege zum Stöffel-See, durch den Kunst-Garten, unter hohen Förderbändern in die Wälder. Von Büdingen moderater Aufstieg nach Stockum-Püschen mit vier GeoStationen der Basalt-Meile. Der GeoBlick Stöffel-Turm bietet weiten Ausblick in den aktiven Steinbruch. Zum Götzenberg mit Gipfelkreuz (vermuteter Ausbruchsort des Vulkans), hinab ins Nistertal. Bei der 70 m hohen Erbacher Eisenbahnbrücke trifft der Weg auf den WesterwaldSteig. Zurück über Büdingen zum Stöffel-Park."},
 safetyNotes:"Festes Schuhwerk empfohlen. Der Weg ist durchgehend gut markiert.",
 equipment:"Festes Schuhwerk. Tagesticket für das Museum kann an der Infobox erworben werden.",
 tips:[{name:"TERTIÄRUM im Stöffel-Park", note:"Spektakuläre Fossilienfunde"}, {name:"Stöffelmaus", note:"Berühmter Fossilienfund aus der Urzeit"}, {name:"GeoBlick Stöffel-Turm", note:"Panoramablick über aktiven Steinbruch und Region"}, {name:"Erbacher Eisenbahnbrücke", note:"70 m hoch – Symbol für den Rohstofftransport im Westerwald"}, {name:"Götzenberg", note:"Vermuteter Ausbruchsort des Stöffel-Vulkans, Gipfelkreuz"}, {name:"Zertifikat 2025", note:"Leading Quality Trail best of Europe – Day Walk (erster in Deutschland!)"}],
 literature:["Wanderkarte-Leporello Wäller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"GeoInformationszentrum Stöffel-Park", address:"Stöffelstraße, 57647 Enspel"}, destination:{name:"Stöffel-Park (Rundweg)"}},

// ═══ 2. Vom Teufelsberg zur Caaner Schweiz ═══
{id:2, _status:"complete",
 title:"Wäller Tour Vom Teufelsberg zur Caaner Schweiz", subtitle:null, type:"Rundwanderweg / GeoRoute",
 km:"13", difficulty:"mittel", tags:"Teufelsberg, Caaner Schweiz, Isenburg",
 sourceUrl:"https://www.westerwald.info/d/nauort-georoute-vom-teufelsberg-zur-caaner-schweiz/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=57342321&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"376 hm", descent:"376 hm", duration:"3,9 h", highPoint:null, lowPoint:null},
 description:{headline:"Vom Teufelsberg mit Ausblick auf die Isenburg zur Caaner Schweiz", text:"Die Tour führt vom Teufelsberg mit herrlichem Ausblick auf die Isenburg durch abwechslungsreiche Landschaft zur Caaner Schweiz."},
 directions:{byCar:"A48 bis Ausfahrt Hoehr-Grenzhausen/Ransbach-Baumbach, weiter Richtung Nauort."},
 parking:[{location:"Nauort", free:"Parkplatz am Sportplatz Nauort", paid:null}],
 routeDescription:{general:"Start am Parkplatz Sportplatz Nauort. Durch Nauort vorbei an der Grillhuette in den Wald. Bergab zu einem kleinen Waldsee, auf Trampelpfad scharf links bergan. Die GeoRoute fuehrt ins idyllische Brexbachtal mit dem Aussichtspunkt auf dem schroffen Teufelsberg. Durch das Tal des Nauorter Floesschens wieder hinauf bis nach Caan. Am Ortsrand hoch ueber dem Sayntal in die Caaner Schweiz (schmale Pfade entlang von Felsklippen, gelb markierte Abkuerzung moeglich). Ueber das GeoTop Pfahlberg zurueck nach Nauort."},
 safetyNotes:"In der Caaner Schweiz schmale Pfade entlang von Felsklippen. Gelb markierte Abkuerzung zur Grillhuette Caan moeglich.",
 equipment:"Festes Schuhwerk mit gutem Profil (besonders fuer Caaner Schweiz).",
 tips:[{name:"Teufelsberg", note:"Schroffer Aussichtspunkt mit Blick ins Brexbachtal"}, {name:"Caaner Schweiz", note:"Felsklippen hoch ueber dem Sayntal, Blick auf die Isenburg"}, {name:"GeoTop Pfahlberg", note:"Der Vulkan von Caan"}, {name:"GeoBlick Nauort", note:"Panorama ueber weite Teile des Westerwalds"}],
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Parkplatz Sportplatz Nauort", address:"56237 Nauort"}, destination:{name:"Nauort (Rundweg)"}},

// ═══ 3. Basalt und Buntmetalle – Neustadt (Wied) ═══
{id:3, _status:"complete",
 title:"Wäller Tour Basalt und Buntmetalle", subtitle:"Neustadt (Wied)", type:"Rundwanderweg",
 km:"9", difficulty:"mittel", tags:"Manrother See, Basalt, Buntmetalle",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-basalt-und-buntmetalle-1/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=800240020&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"245 hm", descent:"243 hm", duration:"2,7 h", highPoint:null, lowPoint:null},
 description:{headline:"Wo Basalt und Buntmetalle die Landschaft prägten", text:"9 km Rundtour bei Neustadt (Wied) durch eine Landschaft, die von Basalt und Buntmetallabbau geprägt wurde. Der idyllische Manrother See ist ein Highlight."},
 directions:{byCar:"A3 bis Ausfahrt 36 Neuwied, weiter ueber B256 Richtung Neustadt (Wied)."},
 parking:[{location:"Neustadt (Wied)", free:"Ortsmitte Neustadt (Wied)", paid:null}],
 safetyNotes:"Festes Schuhwerk empfohlen. Bei Naesse matschige Passagen moeglich.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung.",
 tips:[{name:"Manrother See", note:"Idyllischer See inmitten der Natur"}, {name:"Basalt- und Buntmetallabbau", note:"Historische Abbaustellen praegen die Landschaft"}],
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Neustadt (Wied)"}, destination:{name:"Neustadt (Wied) (Rundweg)"}},

// ═══ 4. Bärenkopp – Waldbreitbach ═══
{id:4, _status:"complete",
 title:"Wäller Tour Bärenkopp", subtitle:"Waldbreitbach", type:"Rundwanderweg",
 km:"12", difficulty:"schwer", tags:"Bärenkopp, Gipfelkreuz, Wiedtal",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-baerenkopp/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=12541605&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"346 hm", descent:"326 hm", duration:"4,1 h", highPoint:null, lowPoint:null},
 description:{headline:"Sportlich zum Gipfelkreuz mit weiten Blicken", text:"Die sportliche Tour im Wiedtal belohnt am Gipfelkreuz des Bärenkopp mit weiten Blicken über Hügel und Täler."},
 directions:{byCar:"Über die B256 bis Waldbreitbach."},
 parking:[{location:"Waldbreitbach", free:"Marktstraße, 56588 Waldbreitbach", paid:null}],
 routeDescription:{general:"Start in Waldbreitbach parallel der Wied. Vorbei am Jüdischen Friedhof in langgezogenen Serpentinen hinauf. Der wilde Hochscheider Seifen ist eine Naturschönheit mit ausgewaschenen Basaltbecken und Felswänden. Vom Bärenkopp mit Gipfelkreuz in 304 m Höhe fantastische Aussicht ins Wiedtal. In die Wiesenlandschaft ragen die Türme des Klosters der Waldbreitbacher Franziskanerinnen."},
 safetyNotes:"Verschiedenste Waldformationen und teils steile Anstiege. Festes Schuhwerk erforderlich.",
 equipment:"Festes Schuhwerk. 5 Einkehrbetriebe direkt an der Strecke.",
 tips:[{name:"Gipfelkreuz Bärenkopp (304 m)", note:"Fantastische Aussicht ins Wiedtal"}, {name:"Hochscheider Seifen", note:"Naturschönheit mit Basaltbecken und Felswänden"}, {name:"Kloster Waldbreitbacher Franziskanerinnen", note:"Türme ragen aus der Wiesenlandschaft"}, {name:"Luhkapellchen & Kreuzkapelle", note:"Historische Kapellen am Wegesrand"}, {name:"Qualitätsweg", note:"Zertifiziert als traumtour (Wanderbares Deutschland)"}],
 literature:["Wanderkarte-Leporello Wäller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Waldbreitbach, Marktstraße", address:"Marktstraße, 56588 Waldbreitbach"}, destination:{name:"Waldbreitbach (Rundweg)"}},

// ═══ 5. Klosterweg – Rengsdorf/Waldbreitbach ═══
{id:5, _status:"complete",
 title:"Wäller Tour Klosterweg", subtitle:"Rengsdorf/Waldbreitbach", type:"Streckenwanderweg",
 km:"18", difficulty:"mittel", tags:"Kloster, Burgruine Neuerburg, Wiedtal",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-klosterweg/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1548162&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"497 hm", descent:"641 hm", duration:"5,7 h", highPoint:null, lowPoint:null},
 description:{headline:"Von Rengsdorf durch Klosterlandschaft nach Waldbreitbach", text:"Der Klosterweg verbindet Rengsdorf mit dem Weihnachtsdorf Waldbreitbach. Unterwegs Ausblick auf die Burgruine Neuerburg."},
 directions:{byCar:"A3 bis Ausfahrt Neuwied/Rengsdorf oder über B256."},
 parking:[{location:"Rengsdorf", free:"An der St. Kastor-Kapelle, Friedrich-Ebert-Straße, 56579 Rengsdorf", paid:null}],
 routeDescription:{general:"Kein Rundwanderweg! Empfohlen wird die Wanderung von Rengsdorf nach Waldbreitbach. Vorbei an der Schutzengel-Kirche in Kurtscheid und der Mutter-Rosa-Gedenkstätte nach Waldbreitbach. Ein kleiner Zuweg verbindet den Klosterweg mit dem WesterwaldSteig."},
 safetyNotes:"Streckenwanderweg – Rücktransfer organisieren! Wandershuttle von Waldbreitbach nach Rengsdorf bei vorheriger Anmeldung (Tel. 02634-922911).",
 equipment:"Festes Schuhwerk, Rucksackverpflegung.",
 tips:[{name:"Burgruine Neuerburg", note:"Aussichtspunkt über das Wiedtal"}, {name:"Aussichtsturm Kurtscheid", note:"Mit Barfußpfad und Schaukelbank"}, {name:"Kurpark Ehlscheid", note:"Erholungsstation am Wegesrand"}, {name:"Wandershuttle", note:"Rücktransfer Waldbreitbach→Rengsdorf, Tel. 02634-922911"}],
 literature:["Wanderkarte-Leporello Wäller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Rengsdorf, St. Kastor-Kapelle", address:"Friedrich-Ebert-Straße, 56579 Rengsdorf"}, destination:{name:"Waldbreitbach"}},

// ═══ 6. Iserbachschleife – Anhausen ═══
{id:6, _status:"complete",
 title:"Wäller Tour Iserbachschleife", subtitle:"Anhausen", type:"Rundwanderweg",
 km:"21", difficulty:"schwer", tags:"Sayntal, Iserbach, Ruine Hausenborn",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-iserbachschleife/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=7176907&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"594 hm", descent:"594 hm", duration:"6,3 h", highPoint:null, lowPoint:null},
 description:{headline:"Durch das Sayntal mit Bachabschnitten und Industriegeschichte", text:"Die längste Wäller Tour führt auf 21 km durch das Sayntal. Szenenwechsel zwischen Wald, Wasser und historischen Relikten wie der Ruine Hausenborn."},
 directions:{byCar:"A3 bis Ausfahrt Dierdorf oder Neuwied, weiter über B413/B256 nach Anhausen."},
 parking:[{location:"Anhausen", free:"Parkplatz Auf dem Löh 1, 56584 Anhausen", paid:null}],
 routeDescription:{general:"Start in Anhausen Richtung Meinborn. Ins Steinebachtal auf verwunschenem Pfad. An der Schutzhütte Am Steinbruch zur Kirchenruine Hausenborn. Hinab ins Saynbachtal nach Isenburg (Abstecher zur Burgruine und Pfarrkirche St. Katharina lohnt sich!). Über den Wasserweg mit Aussichten auf Isenburg ins Iserbachtal zur Thalhauser Mühle. Zurück über Veltens Weiher und Rüscheid nach Anhausen. Tipp: Aufteilung in Nordschleife (12,2 km) und Südschleife (8,6 km) möglich."},
 safetyNotes:"Anspruchsvoller Weg mit 594 hm. Aufteilung in zwei Schleifen empfohlen. Wanderung gegen den Uhrzeigersinn wird empfohlen.",
 equipment:"Festes Schuhwerk, ausreichend Verpflegung für die lange Tour.",
 tips:[{name:"Kirchenruine Hausenborn", note:"Steinerner Zeuge bewegter Vergangenheit"}, {name:"Burgruine Isenburg", note:"Sehenswert, Abstecher lohnt sich"}, {name:"Thalhauser Mühle", note:"Qualitätsgastgeber Wanderbares Deutschland, Tel. 02639-962 59 29"}, {name:"Veltens Weiher", note:"Idyllischer Rastplatz mit Tischgruppe"}, {name:"Abkürzung", note:"Verbindungsweg (3,2 km, gelb markiert) teilt die Tour in Nord- und Südschleife"}],
 literature:["Wanderkarte-Leporello Wäller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Anhausen, Parkplatz Auf dem Löh", address:"Auf dem Löh 1, 56584 Anhausen"}, destination:{name:"Anhausen (Rundweg)"}},

// ═══ 7. Brexbachschluchtweg – Grenzau ═══
{id:7, _status:"complete",
 title:"Wäller Tour Brexbachschluchtweg", subtitle:"Grenzau", type:"Rundwanderweg",
 km:"16", difficulty:"schwer", tags:"Brexbachschlucht, Grenzau, Burg",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-brexbachschluchtweg-grenzau/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=6080058&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"307 hm", descent:"307 hm", duration:"5,0 h", highPoint:null, lowPoint:null},
 description:{headline:"Durch die wildromantische Brexbachschlucht zur Burg Grenzau", text:"Wildromantische Brexbachschlucht mit Ausblick vom Teufelsberg und der historischen Burg Grenzau – einzige Burg Deutschlands mit dreieckigem Grundriss."},
 directions:{byCar:"A48 bis Ausfahrt Hoehr-Grenzhausen, weiter Richtung Grenzau."},
 parking:[{location:"Grenzau", free:"Parkplatz in Grenzau", paid:null}, {location:"Nauort", free:"Weiherplatz, 56237 Nauort (kurzer Verbindungsweg ausgeschildert)", paid:null}],
 routeDescription:{general:"Mitten in Grenzau der Markierung hinauf zur Burg Grenzau folgen. Auf urigem Waldpfad bis zu den markanten Felsen am Kaiserstuhl. In Serpentinen hinunter ins Brexbachtal. Ueber Waldtrail und Forstweg durch den Hochwald, am Viadukt vorbei, an den Gleisen der Brexbachtalbahn entlang. Am ehemaligen Nauorter Bahnhof hinauf auf den Teufelsberg (Infopunkt des Geoparks). Entlang alter Baumriesen und gewaltiger Quarzbloecke (Teufelstreppe) zur Anhoehe bei Nauort. Am Leutersberg oeffnet sich der Blick. Weiter ueber Alsbach mit Fernsichten ins Masselbachtal und zurueck nach Grenzau."},
 safetyNotes:"Steile Serpentinen im Brexbachtal, festes Schuhwerk mit gutem Profil erforderlich.",
 equipment:"Festes Schuhwerk. Einkehrmoeglichkeiten in Nauort (Zuweg markiert) und Grenzau.",
 tips:[{name:"Burg Grenzau", note:"Einzige Burg Deutschlands mit dreieckigem Grundriss"}, {name:"Brexbachschlucht", note:"Wildromantisches Bachtal mit Viadukten"}, {name:"Teufelsberg", note:"Imposanter Ausblick ins Brexbachtal, Geopark-Infopunkt"}, {name:"Teufelstreppe", note:"Gewaltige Quarzbloecke und alte Baumriesen"}, {name:"Brexbachtalbahn", note:"Historische Gleise am Wegesrand"}],
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Grenzau"}, destination:{name:"Grenzau (Rundweg)"}},

// ═══ 8. Augst – Neuhäusel ═══
{id:8, _status:"complete",
 title:"Wäller Tour Augst", subtitle:"Neuhäusel", type:"Rundwanderweg",
 km:"14", difficulty:"mittel", tags:"Kapelle Kadenbach, Augst",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-augst-neuhaeusel/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=4055201&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"381 hm", descent:"382 hm", duration:"5,0 h", highPoint:null, lowPoint:null},
 description:{headline:"Panoramawanderung bei Neuhäusel", text:"Die Wäller Tour Augst bietet abwechslungsreiche Landschaft mit dem bekannten Ausblick bei der Kapelle Kadenbach."},
 directions:{byCar:"Aus Richtung Montabaur oder Koblenz ueber die B49 nach Neuhaeuesel."},
 publicTransport:{arrival:"RMV Linie 460 ab Montabaur ICE-Bahnhof oder aus Richtung Koblenz Hbf (stuendlich). Ausstieg: Neuhaeuesel Hauptstrasse. Oder aus Bad Ems mit der Linie Modigel und Scherer. Einstieg ueber markierten Zuweg."},
 parking:[{location:"Neuhaeuesel", free:"Wanderparkplatz Neuhaeuesel-Ost", paid:null}],
 routeDescription:{general:"Einstieg am Wanderparkplatz Neuhaeuesel-Ost. Richtung Kadenbach vorbei am Tennisplatz durch Streuobstwiesen mit Blick ueber Eitelborn und Kadenbach. Nach Durchquerung des Binnbachtales am Ortsrand von Eitelborn entlang mit sanften Anstiegen. Bei km 5 in den malerischen Wald am Schlossberg, nach 1,5 km die Ruine Sporkenburg (Rastmoeglichkeit). Zurueck ueber die Kapelle Kadenbach mit Panoramablick."},
 safetyNotes:"Festes Schuhwerk empfohlen. Rucksackverpflegung empfohlen (keine regelmaessigen Einkehrmoeglichkeiten direkt am Weg).",
 equipment:"Festes Schuhwerk, Rucksackverpflegung.",
 tips:[{name:"Kapelle Kadenbach", note:"Aussichtspunkt mit Panoramablick"}, {name:"Ruine Sporkenburg", note:"Auf Felssporn am Schlossberg, ideal fuer Rast"}, {name:"Waeller Schnippel", note:"10 km Verbindungsweg zur Waeller Tour Elberthoehen"}, {name:"Abstecher Simmern", note:"Hoehenwanderweg zu Berg Moriah und Berg Sion mit Rheintal-Blick (ab Neuhaeuesel ausgeschildert)"}],
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 6,95 EUR (Westerwald-Shop)"],
 start:{name:"Wanderparkplatz Neuhaeuesel-Ost", address:"56335 Neuhaeuesel"}, destination:{name:"Neuhaeuesel (Rundweg)"}},

// ═══ 9. Elberthöhen – Niederelbert ═══
{id:9, _status:"complete",
 title:"Wäller Tour Elberthöhen", subtitle:"Niederelbert", type:"Rundwanderweg",
 km:"16", difficulty:"mittel", tags:"Elberthöhen, Niederelbert, Welschneudorf, Oberelbert, Feldberg-Blick",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-elberthoehen-niederelbert/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=4054774&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"285 hm", descent:"285 hm", duration:"5,0 h", highPoint:null, lowPoint:null},
 description:{
   headline:"Tolle Aussichten nach allen Seiten \u2013 bei gutem Wetter bis zum Feldberg",
   text:"Knapp 16 km lang ist die W\u00e4ller Tour \u00fcber die Elberth\u00f6hen, die von Niederelbert \u00fcber Welschneudorf und Oberelbert verl\u00e4uft. Der Weg bietet viel Abwechslung und tolle Aussichten nach allen Seiten \u2013 bei gutem Wetter sogar bis zum Feldberg. Nach dem Start im preisgekr\u00f6nten Dorf Niederelbert f\u00fchrt der Weg \u00fcberwiegend durch Waldgebiete. Welschneudorf bietet unterschiedliche Einkehrm\u00f6glichkeiten zur Mittagsrast. Weiter geht es \u00fcber sch\u00f6ne Wiesenfl\u00e4chen, am Bach entlang und zwischen Fischteichen hindurch auf die H\u00f6hen R\u00f6thchen und H\u00e4hnchen, die weitere fantastische Ausblicke bieten."
 },
 directions:{byCar:"Aus Richtung Montabaur oder Koblenz \u00fcber die B49 bis Niederelbert."},
 safetyNotes:"In den Wintermonaten kann es aufgrund von Holz-R\u00fcckearbeiten an einzelnen Wegeabschnitten zu einer Beeintr\u00e4chtigung der Wegequalit\u00e4t kommen.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung. Einkehrm\u00f6glichkeiten in Welschneudorf.",
 tips:[{name:"Niederelbert", note:"Preisgekr\u00f6ntes Dorf"}, {name:"Aussichtspunkte R\u00f6thchen und H\u00e4hnchen", note:"Fantastische Fernblicke"}, {name:"W\u00e4ller Schnippel", note:"10 km Verbindungsweg zur W\u00e4ller Tour Augst (ab Welschneudorf ausgeschildert)"}],
 literature:["Wanderkarte-Leporello W\u00e4ller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Niederelbert"}, destination:{name:"Niederelbert (Rundweg)"}},

// ═══ 10. Buchfinkenland – Gackenbach ═══
{id:10, _status:"complete",
 title:"Wäller Tour Buchfinkenland", subtitle:"Gackenbach", type:"Rundwanderweg",
 km:"15", difficulty:"mittel", tags:"Buchfinkenland, Gackenbach, Naturpark Nassau, Seelbachtal, Altweibereiche",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-buchfinkenland-gackenbach/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=4055494&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"422 hm", descent:"423 hm", duration:"5,5 h", highPoint:null, lowPoint:null},
 description:{
   headline:"Wo Buchfinken singen und eine sagenumwobene Eiche steht",
   text:"Das Buchfinkenland befindet sich im Naturpark Nassau. Die namensgebenden Buchfinken begleiten dich auf dem Weg durch die herrliche Landschaft. Vom Wanderparkplatz Gackenbach geht es bergauf zum Jagdhaus, \u00fcber einen kurvenreichen Weg zu einem Damwildgehege und nach Horbach. Im Wald erreichst du die Altweibereiche \u2013 die Sage erz\u00e4hlt, dass die Westerwälder Frauen um den Baum tanzten, um sich mehr Freiheitsrechte zu erstreiten. Im Seelbachtal folgst du dem Bachbett, l\u00e4ufst an Fischteichen entlang und bestaunst die Ruine einer Schmelzh\u00fctte aus dem 18. Jahrhundert."
 },
 directions:{byCar:"Aus Richtung Montabaur \u00fcber die B49 nach Gackenbach."},
 parking:[{location:"Gackenbach", free:"Wanderparkplatz Gackenbach", paid:null}],
 safetyNotes:"In den Wintermonaten kann es aufgrund von Holz-R\u00fcckearbeiten an einzelnen Wegeabschnitten zu Beeintr\u00e4chtigungen kommen. Aufgrund von Borkenkäferbefall zeitweise Umleitungen m\u00f6glich.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung.",
 tips:[{name:"Altweibereiche", note:"Sagenumwobene Eiche \u2013 die Frauen tanzten f\u00fcr Freiheitsrechte"}, {name:"Ruine Schmelzh\u00fctte im Seelbachtal", note:"Historisches Industrierelikt aus dem 18. Jh."}, {name:"W\u00fcstung Willgenhausen", note:"Aufgegebene Siedlung aus dem 17. Jahrhundert"}, {name:"Wild- und Freizeitpark Gackenbach", note:"Am Eingang des Rundwegs"}],
 literature:["Wanderkarte-Leporello W\u00e4ller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Wanderparkplatz Gackenbach"}, destination:{name:"Gackenbach (Rundweg)"}},

// ═══ 11. Eisenbachtal – Nomborn ═══
{id:11, _status:"complete",
 title:"Wäller Tour Eisenbachtal", subtitle:"Nomborn", type:"Rundwanderweg",
 km:"9", difficulty:"leicht", tags:"Eisenbachtal, Nomborn, Studentenm\u00fchle, Freim\u00fchle, Bildches Eich",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-eisenbachtal-nomborn/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=4055467&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"157 hm", descent:"157 hm", duration:"3,5 h", highPoint:null, lowPoint:null},
 description:{
   headline:"Wald und Wasser f\u00fcr angenehmes Mikroklima \u2013 besonders an hei\u00dfen Tagen",
   text:"Ein wunderbarer Weg mit unbestreitbaren Erholungsqualit\u00e4ten liegt nordwestlich von Nomborn im Eisenbachtal. Wald und Wasser sorgen hier f\u00fcr ein angenehmes Mikroklima, besonders an hei\u00dfen Tagen. Nach dem Start an der Studentenm\u00fchle f\u00fchrt der Weg entlang des Eisenbachs durch schattige W\u00e4lder zur Bildches Eich \u2013 eine kleine Waldkapelle aus dem Jahr 1963 und eine ausgeh\u00f6hlte Eiche mit einer Marien-Statue von 1830. Zur\u00fcck geht es entlang des Holbachs, wo am Ende zwei historische M\u00fchlen zur Rast einladen."
 },
 directions:{byCar:"Aus Richtung Montabaur oder Limburg \u00fcber die L318. Die Ausfahrt Eisenbachtal (Signet Campingplatz/M\u00fchlen) ist ausgeschildert."},
 publicTransport:{
   arrival:"Bahn bis ICE-Bahnhof Montabaur, dann Bus nach Girod (Linie 450 oder 481) und nach Nomborn (Linie 450).",
   moreInfoUrl:"http://www.bahn.de"
 },
 parking:[{location:"Nomborn", free:"Wanderparkplatz am Historischen Landgasthaus Studentenm\u00fchle, M\u00fchlenstra\u00dfe, 56412 Nomborn", paid:null}],
 routeDescription:{
   general:"Start am Wanderparkplatz an der Studentenm\u00fchle. Der Markierung des Zuwegs folgen, den Campingplatz passieren und in Richtung Waldrand. Der Weg f\u00fchrt durch die Auenlandschaft des Eisenbachtales, immer entlang des m\u00e4andrierenden Bachlaufes. Nach ca. 3,5 km \u00f6ffnet sich das Eisenbachtal ins Gelbachtal. Im Holbachtal bergauf zum Steinernen Kreuz (der Sage nach lieferten sich hier zwei F\u00f6rster ein verhängnisvolles Duell). Talw\u00e4rts zur Kapelle Bildches Eich, unter der ICE-Strecke K\u00f6ln\u2013Frankfurt hindurch, am Holbach entlang zur\u00fcck."
 },
 safetyNotes:"In den Wintermonaten kann es aufgrund von Holz-R\u00fcckearbeiten an einzelnen Wegeabschnitten zu Beeintr\u00e4chtigungen kommen.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung. Einkehr in Freim\u00fchle und Studentenm\u00fchle (sch\u00f6ne Au\u00dfengastronomie, besonders im Sommer).",
 tips:[{name:"Studentenm\u00fchle", note:"Historisches Landgasthaus mit herrlichem Blick ins Eisenbachtal"}, {name:"Freim\u00fchle", note:"Gastst\u00e4tte mit sch\u00f6ner Au\u00dfengastronomie"}, {name:"Bildches Eich", note:"Waldkapelle (1963) mit Marien-Statue in ausgehöhlter Eiche (1830)"}, {name:"Steinernes Kreuz", note:"Sagenumwobener Ort eines F\u00f6rsterduells"}, {name:"Exkurs Bornkasten (2 km)", note:"Hausberg mit grandioser Aussicht und Basaltsteinbruch"}],
 literature:["Wanderkarte-Leporello W\u00e4ller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Studentenm\u00fchle, Nomborn", address:"M\u00fchlenstra\u00dfe, 56412 Nomborn"}, destination:{name:"Studentenmühle (Rundweg)"}},

// ═══ 12. Watzenhahner Riesen – Weltersburg ═══
{id:12, _status:"complete",
 title:"Wäller Tour Watzenhahner Riesen", subtitle:"Weltersburg", type:"Rundwanderweg / GeoRoute",
 km:"13", difficulty:"schwer", tags:"Watzenhahn, Weltersburg, Basalt, GeoRoute, Kranstein, Burgruine",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-watzenhahner-riesen-1/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=800239956&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"327 hm", descent:"327 hm", duration:"3,7 h", highPoint:null, lowPoint:null},
 description:{
   headline:"Sagenumwobene Basaltformationen und ein spektakul\u00e4rer GeoBlick",
   text:"Die Landschaft auf dieser 13,5 km langen GeoRoute ist gepr\u00e4gt vom Westerwälder Basalt. Am Kranstein, dem GeoTop des Jahres 2020, beginnt die Tour durch die alten W\u00e4lder rund um den Watzenhahn. Eindrucksvolle, sagenumwobene Orte und Basaltformationen begleiten die Wanderung. An vielen Stellen erobert die Natur die einstigen Abbaustellen zur\u00fcck und bietet selten gewordenen Tieren und Pflanzen bedeutende Lebensr\u00e4ume. Von der Basaltkuppe der Burgruine Weltersburg bietet sich ein spektakul\u00e4rer GeoBlick auf das gesamte Limburger Becken."
 },
 directions:{byCar:"Aus Richtung Limburg oder Westerburg zur K95 nach Weltersburg."},
 publicTransport:{
   arrival:"Bahnlinie RB90 von Limburg oder Siegen bis Bahnhof Willmenrod oder Berzhahn."
 },
 parking:[{location:"Weltersburg", free:"GeoTop Kranstein, K95, 56459 Weltersburg; oder Alte Schule, Hauptstr. 17a, 56459 Weltersburg", paid:null}],
 safetyNotes:"Festes Schuhwerk mit gutem Halt auf felsigen und unebenen Wegen. Bei widrigen Wetterverh\u00e4ltnissen matschige und rutschige Passagen m\u00f6glich.",
 equipment:"Festes Schuhwerk, ausreichend Fl\u00fcssigkeit, Rucksackverpflegung.",
 tips:[{name:"GeoTop Kranstein", note:"GeoTop des Jahres 2020, Start der Tour"}, {name:"Watzenhahner Riesen", note:"Eindrucksvolle Basaltformationen"}, {name:"Burgruine Weltersburg", note:"Spektakul\u00e4rer GeoBlick auf das Limburger Becken"}, {name:"Zertifikat", note:"Tr\u00e4gt das Zertifikat \u201eentdeckertour\u201c"}],
 literature:["Wanderkarte-Leporello W\u00e4ller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"GeoTop Kranstein, Weltersburg", address:"K95, 56459 Weltersburg"}, destination:{name:"Weltersburg (Rundweg)"}},

// ═══ 13. Hohe Hahnscheid – Irmtraut ═══
{id:13, _status:"complete",
 title:"Wäller Tour Hohe Hahnscheid", subtitle:"Irmtraut", type:"Rundwanderweg",
 km:"10", difficulty:"mittel", tags:"Hohe Hahnscheid, Irmtraut, Andachtsweg, Holzbachschlucht, Hessenblick",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-hohe-hahnscheid-irmtraut/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=38532291&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"220 hm", descent:"223 hm", duration:"3,5 h", highPoint:"433 m", lowPoint:null},
 description:{
   headline:"Andachtsweg mit 23 Stationen rund um den Hohen Hahnscheid",
   text:"Der Rundweg, ausgezeichnet als Qualit\u00e4tsweg Wanderbares Deutschland in der Kategorie \u201etraumtour\u201c, f\u00fchrt um den Hohen Hahnscheid (433 m) an der Grenze von Rheinland-Pfalz zu Hessen. 23 interessante Anlaufstationen mit Informationstafeln und QR-Codes befinden sich auf dem 10,6 km langen Weg. Start ist auf dem Kirchplatz in Irmtraut. Vorbei am Friedhofskreuz zwischen alten Lindenbäumen geht es \u00fcber Wiesenpassagen in den Naturwald. Der erste H\u00f6hepunkt ist der Hessenblick \u2013 ein Aussichtspunkt mit Blick nach S\u00fcden ins hessische Elbbachtal. Nach ca. 5 km erreichst du die Holzbachschlucht, das Highlight der Tour."
 },
 directions:{byCar:"Aus S\u00fcden bzw. Norden \u00fcber die B54, aus Osten bzw. Westen \u00fcber die B255 bis Ausfahrt Rennerod, weiter \u00fcber B54 bis Irmtraut."},
 publicTransport:{
   arrival:"Bahn bis ICE-Bahnhof Limburg, Bus Linie LM15 von Limburg Busbahnhof bis Irmtraut. Oder Bahn bis ICE-Bahnhof Montabaur, Bus Linie 116 bis Rennerod Busbahnhof, weiter mit LM15 bis Irmtraut.",
   moreInfoUrl:"http://www.bahn.de"
 },
 parking:[{location:"Irmtraut", free:"Kirchplatz Irmtraut", paid:null}],
 routeDescription:{
   general:"Start auf dem Kirchplatz in Irmtraut. Vorbei am Friedhofskreuz zwischen alten Lindenbäumen \u00fcber Wiesenpassagen in den Naturwald. Erster H\u00f6hepunkt: Hessenblick (Aussicht nach S\u00fcden ins Elbbachtal). Weiter der Markierung folgend zur Holzbachschlucht (Highlight der Tour). 23 Stationen mit Infotafeln und QR-Codes begleiten den gesamten Weg."
 },
 safetyNotes:"Der Weg kombiniert Stätten bäuerlicher Frömmigkeit mit lokalgeschichtlichen Besonderheiten. Bei Nässe kann die Holzbachschlucht rutschig sein.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung.",
 tips:[{name:"Hessenblick", note:"Aussichtspunkt mit Blick ins hessische Elbbachtal"}, {name:"Holzbachschlucht", note:"Naturhighlight der Tour"}, {name:"23 Infostationen", note:"Mit QR-Codes f\u00fcr weitere Details"}, {name:"Qualit\u00e4tsweg", note:"Ausgezeichnet als \u201etraumtour\u201c (Wanderbares Deutschland)"}],
 literature:["Wanderkarte-Leporello W\u00e4ller Touren, GPS-genau, 5,00 EUR (Westerwald-Shop)"],
 start:{name:"Kirchplatz Irmtraut", address:"Irmtraut"}, destination:{name:"Irmtraut (Rundweg)"}},

// ═══ 14. Greifenstein-Schleife Etappe 1 – Herborn/Beilstein ═══
{id:14, _status:"complete",
 title:"Wäller Tour Greifenstein-Schleife - Etappe 1", subtitle:"Herborn/Beilstein", type:"Streckenwanderweg",
 km:"18", difficulty:"mittel", tags:"Burg Greifenstein, Glockenwelt, Herborn",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-greifenstein-schleife-etappe-1-herborn/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=17644950&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"477 hm", descent:"225 hm", duration:"5,2 h", highPoint:null, lowPoint:null},
 description:{headline:"Von Herborn zur Burg Greifenstein", text:"Von Herborn aus vorbei an Merkenbach und Fleisbach nach Greifenstein. Die landschaftsbeherrschende Höhenburg mit ihrer einmaligen Silhouette ist das Wahrzeichen der Region. Die Glockenwelt in der Burg ist einzigartig."},
 parking:[{location:"Herborn", free:"Gasthaus Brauerei & Hotel Gutshof, Im Gutshof 1, 35745 Herborn", paid:null}],
 publicTransport:{arrival:"Bus/Bahn bis Herborn ZOB, weiter Linie 502 bis Haltestelle Wellenbad (350 m Fußweg)."},
 tips:[{name:"Burg Greifenstein", note:"Glockenwelt, Eintritt 4 EUR"}],
 routeDescription:{general:"Von Herborn vorbei an Merkenbach und Fleisbach nach Greifenstein hinauf. Die landschaftsbeherrschende Hoehenburg mit einmaliger Silhouette und beruehmter Glockenwelt. Weiter ueber Wiesenwege und Waldpassagen bis zum Etappenziel Beilstein."},
 safetyNotes:"Streckenwanderweg, kein Rundweg. Ruecktransfer organisieren.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung.",
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 6,95 EUR"],
 start:{name:"Herborn, Gutshof", address:"Im Gutshof 1, 35745 Herborn"}, destination:{name:"Beilstein"}},

// ═══ 15. Greifenstein-Schleife Etappe 2 – Beilstein/Krombachtalsperre ═══
{id:15, _status:"complete",
 title:"Wäller Tour Greifenstein-Schleife - Etappe 2", subtitle:"Beilstein/Krombachtalsperre", type:"Streckenwanderweg",
 km:"23", difficulty:"mittel", tags:"Leyenbach-Wasserfall, Windpark Knoten, Krombachtalsperre",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-greifenstein-schleife-herborn/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=17645560&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"400 hm", descent:"236 hm", duration:"6,5 h", highPoint:null, lowPoint:null},
 description:{headline:"Vom Leyenbach-Wasserfall über den Knoten zur Krombachtalsperre", text:"Die zweite Etappe führt zum romantischen Leyenbach-Wasserfall im Wald, zum Adolf-Weiß-Denkmal (Schöpfer des Westerwaldgrußes) und steil auf den Knoten mit Gipfelbuch und Sonnenuhr am Windpark. Die Tour endet an der Krombachtalsperre bei Rehe."},
 tips:[{name:"Leyenbach-Wasserfall", note:"Romantisch im Wald"}, {name:"Windpark Knoten", note:"Sonnenuhr, Aussichtsplattform, Gipfelbuch"}, {name:"Adolf-Weiß-Denkmal", note:"Schöpfer des Hui Wäller? Allemol!"}],
 routeDescription:{general:"Zuweg von Beilstein zum Startpunkt. Erstes Ziel: Christkoeppelchen mit Blick ins Ulmtal. An idyllischen Teichen vorbei nach Rodenroth. Ueber Wiesenhaenge zum Rasenberg mit Blick auf Burg Greifenstein. Zum Leyenbach-Wasserfall im Wald. Bergan zum Baumlehrpfad und Adolf-Weiss-Denkmal. Steil auf den Knoten (hoechster Punkt). Weiter zum Windpark Knoten mit ueberdimensionaler Sonnenuhr. Zum Oberroder Knoten (583 m). An der Krombachtalsperre bei Rehe endet die Tour auf dem WesterwaldSteig."},
 safetyNotes:"Streckenwanderweg. Steiler Anstieg zum Knoten. Festes Schuhwerk erforderlich.",
 equipment:"Festes Schuhwerk, ausreichend Verpflegung fuer die lange Tour.",
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 6,95 EUR"],
 start:{name:"Beilstein"}, destination:{name:"Krombachtalsperre / Rehe"}},

// ═══ 16. Greifenstein-Schleife gesamt – Herborn ═══
{id:16, _status:"complete",
 title:"Wäller Tour Greifenstein-Schleife - gesamt", subtitle:"Herborn", type:"Streckenwanderweg (2 Tage)",
 km:"38", difficulty:"mittel", tags:"Burg Greifenstein, Leyenbach-Wasserfall, Krombachtalsperre, Knoten",
 sourceUrl:"https://www.westerwald.info/d/waeller-tour-greifenstein-schleife-herborn/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=1527357&project=oar-rlp", tourenplanerUrl:null,
 stats:{ascent:"831 hm", descent:"527 hm", duration:"12,0 h", highPoint:null, lowPoint:null},
 description:{headline:"Die komplette Greifenstein-Schleife in zwei Tagen", text:"Die Gesamtstrecke der Greifenstein-Schleife verbindet Etappe 1 und 2: Von Herborn über die Burg Greifenstein, den Leyenbach-Wasserfall und den Windpark Knoten bis zur Krombachtalsperre bei Rehe. Die Tour endet auf dem WesterwaldSteig und kann als Rundweg zurück nach Herborn fortgesetzt werden."},
 safetyNotes:"Zweitageswanderung (38 km). Uebernachtung in Beilstein empfohlen. Streckenwanderweg, kein Rundweg.",
 equipment:"Festes Schuhwerk, Rucksackverpflegung, Uebernachtungsgepaeck.",
 literature:["Wanderkarte-Leporello Waeller Touren, GPS-genau, 6,95 EUR"],
 start:{name:"Herborn, Gutshof", address:"Im Gutshof 1, 35745 Herborn"}, destination:{name:"Rehe / Krombachtalsperre"}}

];
