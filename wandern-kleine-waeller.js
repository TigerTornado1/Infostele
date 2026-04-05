/**
 * Guck ma, Westerwald – Datendatei
 * Kleine Wäller (Spazierwege & Spazierwanderwege)
 * 
 * Quelle: westerwald.info/spazierwanderwege/
 * Stand: April 2026
 * 
 * 14 Kleine Wäller, exakt wie auf westerwald.info gelistet.
 */

const DATA_WANDERN_KLEINE_WAELLER = [

{id:1, _status:"complete", title:"Kleiner Wäller Häubchen-Tour", subtitle:"Breitscheid", type:"Spazierwanderweg",
 km:"6", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=57040240&project=oar-rlp", stats:{ascent:"98 hm", descent:"98 hm", duration:"1,6 h"},
 description:{headline:"Rund ums Ro\u00dfbacher H\u00e4ubchen mit Basaltlehrpfad", text:"Der Rundweg hat seinen Namen vom 350 m hohen Ro\u00dfbacher H\u00e4ubchen \u2013 einem erodierten Vulkankegel mit spannenden Basaltw\u00e4nden und einem kleinen Basaltlehrpfad, der den Basaltabbau von 1883 bis 1942 erkl\u00e4rt."},
 directions:{byCar:"Von Roßbach/Wied oder A3 Abfahrt Fernthal über die L256."},
 parking:[{location:"Breitscheid", free:"Roßbacher Straße Ecke Waldstraße, 53547 Breitscheid (kleiner, kostenloser Wanderparkplatz)", paid:null}],
 routeDescription:{general:"Start am Ortsrand von Breitscheid. Über Straße Sauerwiese, dann Fußweg an Waldrändern, über Wiesen und Felder zum Abzweig Roßbacher Häubchen. 200 m Zuweg zum Aussichtsplateau. Aufstieg zum Gipfel nur für trittsichere Wanderer (Stahlseil im Fels). Zurück durch kleinen Wald, Feld- und Wiesenwege zum Brunnenplatz, dann zur Anna-Kapelle."},
 tips:[{name:"Roßbacher Häubchen (350 m)", note:"Erodierter Vulkankegel, Basaltlehrpfad (Abbau 1883-1942)"}, {name:"Panoramablick", note:"Wiedtal, bei guter Sicht Siebengebirge und Eifel"}, {name:"Restaurant Zum Dorfkrug", note:"Deutsche, italienische, indische Spezilitäten, Sonnenterrasse"}, {name:"Anna-Kapelle", note:"Erstmals erwähnt 1767, Spielplatz gegenüber"}],
 start:{name:"Parkplatz Roßbacher Straße", address:"Roßbacher Straße/Ecke Waldstraße, 53547 Breitscheid"}, destination:{name:"Breitscheid (Rundweg)"}},

{id:2, _status:"complete", title:"Kleiner Wäller Wied-Runde", subtitle:"Waldbreitbach", type:"Spazierweg",
 km:"3", difficulty:"leicht", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=113242615&project=oar-rlp", stats:{ascent:"13 hm", descent:"13 hm", duration:"0,7 h"},
 description:{headline:"Gem\u00fctlich durch Waldbreitbach und an der Wied entlang", text:"Eine sch\u00f6ne kleine Rundtour: ca. 3 km durch den Ort Waldbreitbach und an der Wied entlang."},
 parking:[{location:"Waldbreitbach", free:"Marktstraße, 56588 Waldbreitbach", paid:null}],
 routeDescription:{general:"3 km langer, ebenerdiger und barrierearmer Rundweg durch den romantischen Ort Waldbreitbach entlang der Wied. Viele Sitzbänke und Cafés. Vom 1. Advent bis letzten Sonntag im Januar verwandelt sich Waldbreitbach ins Weihnachtsdorf mit schwimmender Krippe und Adventskranz auf der Wied."},
 tips:[{name:"Weihnachtsdorf Waldbreitbach", note:"1. Advent bis Ende Januar, schwimmende Krippe auf der Wied"}, {name:"Barrierefrei", note:"Ebenerdiger, asphaltierter Rundweg"}],
 start:{name:"Waldbreitbach"}, destination:{name:"Waldbreitbach (Rundweg)"}},

{id:3, _status:"complete", title:"Kleiner Wäller MalbergSeeBlick", subtitle:"Hausen/Wied", type:"Spazierweg",
 km:"3", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=116326927&project=oar-rlp", stats:{ascent:"48 hm", descent:"48 hm", duration:"0,8 h"},
 parking:[{location:"Hausen/Wied", free:"Wanderparkplatz Hausen, OT Hähnen (unterhalb der Malberg Hütte)", paid:null}],
 routeDescription:{general:"Start am Wanderparkplatz Hähnen. Auf breiten Forstwegen mit Wiederaufforstungsprojekten und weiten Aussichten. Auf halber Strecke Option für kürzere barrierefreie Runde. Wiesenweg Richtung Tal mit Ausblicken auf Klosterlandschaft Wiedtal und Rengsdorfer Land. Abstecher zum Aussichtsplateau am Malbergsee mit Liegeschaukel und Blick auf Basaltsteilwände. Basaltlehrpfad. Hoch zur Malberg-Hütte (regionale Speisen, Sonnenterrasse)."},
 tips:[{name:"Liegeschaukel am Malbergsee", note:"Toller Blick auf die Basaltsteilwände"}, {name:"Basaltlehrpfad", note:"Schautafeln zum Basaltabbau"}, {name:"Malberg-Hütte", note:"Regionale Speisen, Naturgenuss Gastgeber, Sonnenterrasse"}, {name:"Barrierefreie Kürzung", note:"Auf halber Strecke über Forstweg zurück möglich"}],
 start:{name:"Wanderparkplatz Hähnen", address:"Dorfstraße, 53547 Hausen/Wied OT Hähnen"}, destination:{name:"Hausen/Wied (Rundweg)"}},

{id:4, _status:"complete", title:"Kleiner Wäller Zwergenweg 2", subtitle:"Rengsdorf", type:"Spazierwanderweg",
 km:"5", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=104390062&project=oar-rlp", stats:{ascent:"99 hm", descent:"100 hm", duration:"1,3 h"},
 description:{headline:"Nicht nur Zwerge lieben diesen Weg", text:"Auf dem Zwergenweg bei Rengsdorf gibt es H\u00f6hlen zu bestaunen und Natursch\u00f6nheiten zu genie\u00dfen."},
 parking:[{location:"Rengsdorf", free:"Parkplatz Waldfestplatz, 56579 Rengsdorf (im Ort der Ausschilderung folgen)", paid:null}],
 routeDescription:{general:"Rundweg durch das Laubachtal. Kinder erfahren etwas über Fledermäuse, bestaunen Höhlen und genießen die Natur. Am Römergraben Spielplatz und Einkehr im Clubhouse des Tennisclubs."},
 tips:[{name:"Fledermaus im Laubachtal", note:"Lehrpfad über einheimische Fledermäuse"}, {name:"Höhlen", note:"Zum Bestaunen am Wegesrand"}, {name:"Clubhouse Rengsdorf", note:"Einkehr am Römergraben"}, {name:"Weitere Zwergenwege", note:"Zwergenweg 1 (rot, 4,2 km) und Zwergenweg 3 (grün, 2 km)"}],
 start:{name:"Waldfestplatz Rengsdorf", address:"56579 Rengsdorf"}, destination:{name:"Rengsdorf (Rundweg)"}},

{id:5, _status:"complete", title:"Kleiner Wäller Löwenspur 1 (orange)", subtitle:"Hachenburg", type:"Spazierwanderweg",
 km:"6", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55681021&project=oar-rlp", stats:{ascent:"134 hm", descent:"137 hm", duration:"1,8 h"},
 parking:[{location:"Hachenburg", free:"Parkplatz Innenstadt Hachenburg", paid:null}],
 description:{headline:"Löwenspur orange durch die historische Altstadt Hachenburgs mit Schloss und Cafés", text:"Die Löwenspuren sind drei Rundwege unterschiedlicher Länge rund um die historische Stadt Hachenburg. Farblich markiert (orange) laden sie zum Entdecken ein."},
 start:{name:"Hachenburg"}, destination:{name:"Hachenburg (Rundweg)"}},

{id:6, _status:"complete", title:"Kleiner Wäller Löwenspur 2 (rot)", subtitle:"Hachenburg", type:"Spazierwanderweg",
 km:"8", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55680978&project=oar-rlp", stats:{ascent:"100 hm", descent:"100 hm", duration:"2,0 h"},
 parking:[{location:"Hachenburg", free:"Parkplatz Innenstadt Hachenburg", paid:null}],
 description:{headline:"Löwenspur rot durch Wald und Flur rund um Hachenburg", text:"Die Löwenspuren sind drei Rundwege unterschiedlicher Länge rund um die historische Stadt Hachenburg. Farblich markiert (rot) laden sie zum Entdecken ein."},
 start:{name:"Hachenburg"}, destination:{name:"Hachenburg (Rundweg)"}},

{id:7, _status:"complete", title:"Kleiner Wäller Löwenspur 3 (blau)", subtitle:"Hachenburg", type:"Spazierwanderweg",
 km:"8", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55680928&project=oar-rlp", stats:{ascent:"169 hm", descent:"169 hm", duration:"2,0 h"},
 parking:[{location:"Hachenburg", free:"Parkplatz Innenstadt Hachenburg", paid:null}],
 description:{headline:"Löwenspur blau durch den Hachenburger Stadtwald mit grandiosem Ausblick", text:"Die Löwenspuren sind drei Rundwege unterschiedlicher Länge rund um die historische Stadt Hachenburg. Farblich markiert (blau) laden sie zum Entdecken ein."},
 start:{name:"Hachenburg"}, destination:{name:"Hachenburg (Rundweg)"}},

{id:8, _status:"complete", title:"Kleiner Wäller Basalt + Wasser", subtitle:"Greifenstein", type:"Spazierwanderweg",
 km:"8", difficulty:"leicht", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=42055496&project=oar-rlp", stats:{ascent:"101 hm", descent:"101 hm", duration:"2,0 h"},
 description:{headline:"Von der Ulmbachtalsperre durch den BASALT-PARKours", text:"F\u00fchrt durch Wald und BASALT-PARKours vorbei an unterschiedlichen Basaltbauwerken."},
 start:{name:"Greifenstein"}, destination:{name:"Greifenstein (Rundweg)"}},

{id:9, _status:"complete", title:"Kleiner Wäller Sagenweg", subtitle:"Hirz-Maulsbach", type:"Spazierwanderweg",
 km:"5", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=46240217&project=oar-rlp", stats:{ascent:"68 hm", descent:"68 hm", duration:"1,2 h"},
 description:{headline:"Auf den Spuren von Sagen und Legenden", text:"Der Sagenweg f\u00fchrt auf den Spuren lokaler Sagen durch die Landschaft bei Hirz-Maulsbach."},
 start:{name:"Hirz-Maulsbach"}, destination:{name:"Hirz-Maulsbach (Rundweg)"}},

{id:10, _status:"complete", title:"Kleiner Wäller Klangpfad", subtitle:"Rott", type:"Spazierwanderweg",
 km:"5", difficulty:"mittel", sourceUrl:"https://www.westerwald.info/d/kleiner-waeller-klangpfad-rott/",
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=67038293&project=oar-rlp", stats:{ascent:"101 hm", descent:"101 hm", duration:"1,5 h"},
 description:{headline:"Tolle Instrumente entdecken \u2013 h\u00f6ren, sehen, f\u00fchlen", text:"Besonders f\u00fcr Familien mit Kindern gibt es auf dem Klangpfad viele tolle Instrumente zu entdecken. Ausprobieren, h\u00f6ren, sehen, f\u00fchlen oder einfach mal in der Wippe baumeln. Immer dem violetten Notenzeichen folgen. Mit Kinderwagen oder Laufrad befahrbar."},
 tips:[{name:"Klanginstrumente", note:"Verschiedene Stationen zum Ausprobieren"}, {name:"Kinderwagen-tauglich", note:"Auch mit Laufrad befahrbar"}],
 start:{name:"Rott"}, destination:{name:"Rott (Rundweg)"}},

{id:11, _status:"complete", title:"Kleiner Wäller Kunst + Natur", subtitle:"Greifenstein", type:"Spazierwanderweg",
 km:"5", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=42055425&project=oar-rlp", stats:{ascent:"96 hm", descent:"96 hm", duration:"1,4 h"},
 description:{headline:"Natur und Skulpturenpark Siegfried Fietz", text:"Auf ca. 5 km entdeckt man die Sch\u00f6nheit der Natur und den Skulpturenpark Siegfried Fietz. Start am Outdoorzentrum Lahntal."},
 tips:[{name:"Skulpturenpark Siegfried Fietz", note:"Kunst in der Natur"}],
 start:{name:"Greifenstein"}, destination:{name:"Greifenstein (Rundweg)"}},

{id:12, _status:"complete", title:"Kleiner Wäller Wolfsteine", subtitle:"Bad Marienberg", type:"Spazierwanderweg",
 km:"7", difficulty:"mittel", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=42055470&project=oar-rlp", stats:{ascent:"129 hm", descent:"129 hm", duration:"2,0 h"},
 description:{headline:"Basaltformationen und Wildpark Bad Marienberg", text:"Zahlreiche Basaltformationen und der Wildpark Bad Marienberg. Der Hedwigsturm, der Kurpark mit Barfu\u00dfpfad und ein Kneipp-Tretbecken warten."},
 tips:[{name:"Wolfsteine", note:"M\u00e4chtige Basaltformation"}, {name:"Wildpark Bad Marienberg", note:"Ganzj\u00e4hrig ge\u00f6ffnet, Falknerei"}, {name:"Hedwigsturm", note:"Panoramablick"}],
 start:{name:"Bad Marienberg"}, destination:{name:"Bad Marienberg (Rundweg)"}},

{id:13, _status:"complete", title:"Kleiner Wäller Weg der Sinne", subtitle:"Werkhausen", type:"Spazierweg",
 km:"3", difficulty:"leicht", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=46240272&project=oar-rlp", stats:{ascent:"49 hm", descent:"45 hm", duration:"0,7 h"},
 description:{headline:"Einen Spaziergang mit allen Sinnen erleben", text:"Diese kleine Rundtour fordert deine Sinne heraus: Balancierbalken, Farbenspiel, F\u00fchlboxen, naschbare Beete und ein Barfu\u00dfpfad. Riechen, Schmecken, Sehen, F\u00fchlen und H\u00f6ren werden besch\u00e4ftigt."},
 tips:[{name:"Sinnesstationen", note:"Balancierbalken, F\u00fchlboxen, Farbenspiel"}, {name:"Barfu\u00dfpfad", note:"Kitzelt die Fu\u00dfsohlen!"}],
 start:{name:"Werkhausen"}, destination:{name:"Werkhausen (Rundweg)"}},

{id:14, _status:"complete", title:"Kleiner Wäller Vitalparcours", subtitle:"Rengsdorf", type:"Spazierweg",
 km:"4", difficulty:"leicht", sourceUrl:null,
 gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=801436094&project=oar-rlp", stats:{ascent:"131 hm", descent:"69 hm", duration:"1,3 h"},
 description:{headline:"Naturnah trainieren und genie\u00dfen", text:"Sport, Spa\u00df und Fitness inmitten der Natur. 6 Fitness-Stationen auf dem Weg durch Rengsdorf, Hardert und Bonefeld."},
 start:{name:"Rengsdorf"}, destination:{name:"Rengsdorf (Rundweg)"}}

];
