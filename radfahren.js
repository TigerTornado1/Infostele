/**
 * Guck ma, Westerwald – Datendatei
 * RADFAHREN (alle Kategorien) + E-Bike Infrastruktur
 * 
 * Quelle: westerwald.info
 * Stand: April 2026
 * 
 * Enthält:
 *   DATA_RADFAHREN_RUNDRADWEGE (36)
 *   DATA_RADFAHREN_STRECKENRADWEGE (16)
 *   DATA_RADFAHREN_GRAVELBIKE (9)
 *   DATA_RADFAHREN_MOUNTAINBIKE (9)
 *   DATA_RADFAHREN_RENNRAD (5)
 *   DATA_EBIKE_INFRASTRUKTUR (23)
 * 
 * Späterer DSI-Umstieg: Diese Datei wird durch fetch()-Aufrufe
 * an die feratel DSI-Schnittstelle ersetzt.
 */

/**
 * Guck ma, Westerwald – Datendatei
 * Radfahren: Rundradwege
 * 
 * Quelle: westerwald.info/rundradwege/alle-rundradwege-im-westerwald/
 * Stand: April 2026
 * 
 * 36 Rundradwege, exakt wie auf westerwald.info gelistet.
 */

var DATA_RADFAHREN_RUNDRADWEGE = [

{id:1, _status:"stats_complete", title:"Altenkirchener Radrundweg", subtitle:"Tallandschaften um Altenkirchen", difficulty:"schwer", km:"42", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=56633653&project=oar-rlp", stats:{duration:"3,1 h", ascent:"435 hm", descent:"435 hm"}},

{id:2, _status:"stats_complete", title:"B\u00e4che-Tour (XIII)", subtitle:"Erkunde die Landschaft zwischen Brexbach und Saynbach", difficulty:"mittel", km:"23", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=24344450&project=oar-rlp", stats:{duration:"2,1 h", ascent:"362 hm", descent:"362 hm"}},

{id:3, _status:"stats_complete", title:"Kannenb\u00e4ckerland-Route", subtitle:"Abwechslung zwischen T\u00f6pfereien, Westerw\u00e4lder Dom und Erlenhofsee", difficulty:"schwer", km:"48", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=37926269&project=oar-rlp", stats:{duration:"3,8 h", ascent:"528 hm", descent:"528 hm"}},

{id:4, _status:"stats_complete", title:"Radrundweg Seenplatte (I)", subtitle:"Viel erleben auf dem Radrundweg Seenplatte", difficulty:"leicht", km:"20", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=37134837&project=oar-rlp", stats:{duration:"1,4 h", ascent:"124 hm", descent:"105 hm"}},

{id:5, _status:"stats_complete", title:"Nister-Wiesensee-Tour", subtitle:"Eine gro\u00dfe Rundfahrt um den Wiesensee", difficulty:"mittel", km:"34", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330843&project=oar-rlp", stats:{duration:"2,4 h", ascent:"317 hm", descent:"335 hm"}},

{id:6, _status:"stats_complete", title:"Rund um den Knoten", subtitle:"Malerische Fahrt durch typische Landschaften", difficulty:"mittel", km:"33", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14247866&project=oar-rlp", stats:{duration:"2,4 h", ascent:"388 hm", descent:"388 hm"}},

{id:7, _status:"stats_complete", title:"H\u00f6feradeln ab Flammersfeld", subtitle:null, difficulty:"schwer", km:"24", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=800218208&project=oar-rlp", stats:{duration:"2,0 h", ascent:"350 hm", descent:"351 hm"}},

{id:8, _status:"stats_complete", title:"5-Seen Radweg", subtitle:"Natur und Wasser erleben", difficulty:"schwer", km:"80", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=24981223&project=oar-rlp", stats:{duration:"6,0 h", ascent:"864 hm", descent:"864 hm"}},

{id:9, _status:"stats_complete", title:"Rundradweg WW1", subtitle:"Anspruchsvoll und kurzweilig", difficulty:"schwer", km:"213", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=23396776&project=oar-rlp", stats:{duration:"16,9 h", ascent:"2407 hm", descent:"2407 hm"}},

{id:10, _status:"stats_complete", title:"Hachenburger Westerwald", subtitle:"Abwechslungsreiche Rundtour", difficulty:"schwer", km:"75", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=50553586&project=oar-rlp", stats:{duration:"5,9 h", ascent:"994 hm", descent:"994 hm"}},

{id:11, _status:"stats_complete", title:"Helmenzen - AK-Radtour 5", subtitle:"Von Tal zu Tal", difficulty:"schwer", km:"23", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55655531&project=oar-rlp", stats:{duration:"1,7 h", ascent:"158 hm", descent:"144 hm"}},

{id:12, _status:"stats_complete", title:"Mammelzen - AK-Radtour 8", subtitle:"Die kleine Tour", difficulty:"mittel", km:"11", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55679699&project=oar-rlp", stats:{duration:"0,8 h", ascent:"145 hm", descent:"147 hm"}},

{id:13, _status:"stats_complete", title:"Die Backesd\u00f6rfer-Tour", subtitle:"Genussvolles Radfahren zwischen Wallmerod und Westerburg", difficulty:"mittel", km:"25", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=20715791&project=oar-rlp", stats:{duration:"1,8 h", ascent:"308 hm", descent:"308 hm"}},

{id:14, _status:"stats_complete", title:"Bad Marienberg-Tour", subtitle:"Abenteuer f\u00fcr Fortgeschrittene", difficulty:"schwer", km:"45", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330701&project=oar-rlp", stats:{duration:"3,4 h", ascent:"545 hm", descent:"545 hm"}},

{id:15, _status:"stats_complete", title:"Saynbachroute", subtitle:"Aus dem Saynbachtal hinauf zum W\u00f6lferlinger Kopf", difficulty:"schwer", km:"32", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3417656&project=oar-rlp", stats:{duration:"2,3 h", ascent:"518 hm", descent:"518 hm"}},

{id:16, _status:"stats_complete", title:"Radrundtour Puderbacher Land", subtitle:"Eine Fahrt mit H\u00f6hen und Tiefen", difficulty:"mittel", km:"45", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3417589&project=oar-rlp", stats:{duration:"3,6 h", ascent:"602 hm", descent:"602 hm"}},

{id:17, _status:"stats_complete", title:"Hohlwege um Altenkirchen", subtitle:"Mit dem Rad entdecken", difficulty:"mittel", km:"21", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=59627800&project=oar-rlp", stats:{duration:"1,7 h", ascent:"248 hm", descent:"248 hm"}},

{id:18, _status:"stats_complete", title:"Weyerbusch - AK-Radtour 2", subtitle:"Wassergrenze zwischen Wied und Sieg", difficulty:"mittel", km:"11", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55444130&project=oar-rlp", stats:{duration:"0,8 h", ascent:"125 hm", descent:"126 hm"}},

{id:19, _status:"stats_complete", title:"AHRound-Tour (II)", subtitle:"Entdecke malerische D\u00f6rfer auf einer kleinen Runde", difficulty:"mittel", km:"14", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=37134865&project=oar-rlp", stats:{duration:"1,1 h", ascent:"219 hm", descent:"219 hm"}},

{id:20, _status:"stats_complete", title:"Hilkhausen - AK-Radtour 3", subtitle:"Zwischen Birnbach- und Mehrbachtal", difficulty:"mittel", km:"14", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55448772&project=oar-rlp", stats:{duration:"1,1 h", ascent:"177 hm", descent:"178 hm"}},

{id:21, _status:"stats_complete", title:"Aubach-Tour (XVII)", subtitle:"Sch\u00f6ne Rundtour f\u00fcr einen entspannten Nachmittag", difficulty:"mittel", km:"32", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=24344471&project=oar-rlp", stats:{duration:"2,3 h", ascent:"255 hm", descent:"255 hm"}},

{id:22, _status:"stats_complete", title:"Kircheib - AK-Radtour 1", subtitle:"Kirchen und andere Altert\u00fcmer", difficulty:"mittel", km:"13", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55252270&project=oar-rlp", stats:{duration:"0,9 h", ascent:"166 hm", descent:"165 hm"}},

{id:23, _status:"stats_complete", title:"Oberwambach - AK-Radtour 7", subtitle:"Herzberg oder Harzburg", difficulty:"schwer", km:"15", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55669734&project=oar-rlp", stats:{duration:"1,2 h", ascent:"144 hm", descent:"155 hm"}},

{id:24, _status:"stats_complete", title:"K\u00f6ppel-Route", subtitle:"Unterwegs im Kannenb\u00e4ckerland zwischen H\u00f6hr-Grenzhausen und Montabaur", difficulty:"mittel", km:"26", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=56200840&project=oar-rlp", stats:{duration:"2,2 h", ascent:"434 hm", descent:"434 hm"}},

{id:25, _status:"stats_complete", title:"St\u00f6ffelmaus-Tour", subtitle:"Rund um die St\u00f6ffelmaus unterwegs in wunderbaren Landschaften", difficulty:"mittel", km:"27", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330967&project=oar-rlp", stats:{duration:"2,0 h", ascent:"330 hm", descent:"330 hm"}},

{id:26, _status:"stats_complete", title:"Bahntrassen-Tour", subtitle:"Von Bad Marienberg ins sch\u00f6ne Nistertal", difficulty:"mittel", km:"15", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330848&project=oar-rlp", stats:{duration:"1,3 h", ascent:"259 hm", descent:"252 hm"}},

{id:27, _status:"stats_complete", title:"Altenkirchen - AK-Radtour 4", subtitle:"Blick \u00fcber Altenkirchen", difficulty:"mittel", km:"18", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55560657&project=oar-rlp", stats:{duration:"1,4 h", ascent:"222 hm", descent:"218 hm"}},

{id:28, _status:"stats_complete", title:"W\u00e4llerLand-Man\u00f6ver", subtitle:"In reizvollen Schleifen durch das W\u00e4ller Land", difficulty:"mittel", km:"22", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=56042769&project=oar-rlp", stats:{duration:"1,7 h", ascent:"272 hm", descent:"272 hm"}},

{id:29, _status:"stats_complete", title:"Fuchskauten Tour", subtitle:null, difficulty:"schwer", km:"34", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330853&project=oar-rlp", stats:{duration:"3,0 h", ascent:"501 hm", descent:"501 hm"}},

{id:30, _status:"stats_complete", title:"Buchfinken-Gelbach-Tour (XII)", subtitle:"Bezaubernde Region zwischen Buchfinkenlandschaft und Gelbachtal", difficulty:"mittel", km:"33", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=24343803&project=oar-rlp", stats:{duration:"3,0 h", ascent:"466 hm", descent:"466 hm"}},

{id:31, _status:"stats_complete", title:"Hilgenroth - AK-Radtour 6", subtitle:"Am h\u00f6chsten Punkt", difficulty:"schwer", km:"15", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=55667781&project=oar-rlp", stats:{duration:"1,1 h", ascent:"187 hm", descent:"185 hm"}},

{id:32, _status:"stats_complete", title:"Kleine Nister-Tour", subtitle:"Waldreiche Tour und malerische Orte im Gebiet der Kleinen Nister", difficulty:"leicht", km:"21", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330943&project=oar-rlp", stats:{duration:"1,5 h", ascent:"162 hm", descent:"162 hm"}},

{id:33, _status:"stats_complete", title:"Raiffeisen-Runde", subtitle:null, difficulty:"mittel", km:"22", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=801446956&project=oar-rlp", stats:{duration:"1,9 h", ascent:"317 hm", descent:"317 hm"}},

{id:34, _status:"stats_complete", title:"H\u00f6feradeln ab Altenkirchen (Westerwald)", subtitle:null, difficulty:"mittel", km:"24", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=800044407&project=oar-rlp", stats:{duration:"1,8 h", ascent:"241 hm", descent:"241 hm"}},

{id:35, _status:"stats_complete", title:"Familien-Radtour in der Verbandsgemeinde Asbach", subtitle:null, difficulty:"mittel", km:"19", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=804371983&project=oar-rlp", stats:{duration:"1,4 h", ascent:"234 hm", descent:"234 hm"}},

{id:36, _status:"stats_complete", title:"Mit dem Bike durch \u201eLicht und Schatten rund um Selters\u201c", subtitle:null, difficulty:"leicht", km:"20", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=800723937&project=oar-rlp", stats:{duration:"1,4 h", ascent:"187 hm", descent:"187 hm"}}

];


/**
 * Guck ma, Westerwald – Datendatei
 * Radfahren: Streckenradwege
 * 
 * Quelle: westerwald.info/streckenradwege/
 * Stand: April 2026
 * 
 * 16 Streckenradwege, exakt wie auf westerwald.info gelistet.
 */

var DATA_RADFAHREN_STRECKENRADWEGE = [

{id:1, _status:"stats_complete", title:"Wied-Radweg", subtitle:"Durch herrliche Flusst\u00e4ler radeln", difficulty:"mittel", km:"98", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=7751131&project=oar-rlp", stats:{duration:"7,5 h", ascent:"237 hm", descent:"619 hm"}},

{id:2, _status:"stats_complete", title:"Nister-Radweg", subtitle:"Eine reizvolle Tour von der Quelle bis zur M\u00fcndung", difficulty:"mittel", km:"69", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3417903&project=oar-rlp", stats:{duration:"5,2 h", ascent:"384 hm", descent:"785 hm"}},

{id:3, _status:"stats_complete", title:"Radtour S\u00fcdlicher Westerwald", subtitle:"Eine sch\u00f6ne Fahrt f\u00fcr Anspruchsvolle", difficulty:"schwer", km:"59", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3417754&project=oar-rlp", stats:{duration:"4,8 h", ascent:"599 hm", descent:"545 hm"}},

{id:4, _status:"stats_complete", title:"Westerwaldschleife", subtitle:"In vier Etappen durch die Region", difficulty:"schwer", km:"224", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=52014430&project=oar-rlp", stats:{duration:"17,5 h", ascent:"2537 hm", descent:"2483 hm"}},

{id:5, _status:"stats_complete", title:"Westerwaldschleife: Linz/Rhein \u2013 Wissen/Sieg", subtitle:null, difficulty:"schwer", km:"75", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=8485669&project=oar-rlp", stats:{duration:"5,9 h", ascent:"991 hm", descent:"885 hm"}},

{id:6, _status:"stats_complete", title:"Westerwaldschleife: Wissen \u2013 Daaden", subtitle:null, difficulty:"schwer", km:"63", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=52015426&project=oar-rlp", stats:{duration:"5,3 h", ascent:"640 hm", descent:"511 hm"}},

{id:7, _status:"stats_complete", title:"Westerwaldschleife: Daaden \u2013 Wiesensee", subtitle:null, difficulty:"schwer", km:"50", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=52015751&project=oar-rlp", stats:{duration:"3,8 h", ascent:"706 hm", descent:"604 hm"}},

{id:8, _status:"stats_complete", title:"Westerwaldschleife: Wiesensee \u2013 Diez", subtitle:null, difficulty:"mittel", km:"39", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=52015751&project=oar-rlp", stats:{duration:"2,9 h", ascent:"368 hm", descent:"670 hm"}},

{id:9, _status:"stats_complete", title:"Rundradweg WW1", subtitle:"Anspruchsvoll und kurzweilig", difficulty:"schwer", km:"213", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=23396776&project=oar-rlp", stats:{duration:"16,9 h", ascent:"2407 hm", descent:"2407 hm"}},

{id:10, _status:"stats_complete", title:"WW1: Fuchskaute \u2013 Hachenburg", subtitle:null, difficulty:"mittel", km:"50", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=50556855&project=oar-rlp", stats:{duration:"3,7 h", ascent:"378 hm", descent:"693 hm"}},

{id:11, _status:"stats_complete", title:"WW1: Grenzau \u2013 Nomborn", subtitle:null, difficulty:"schwer", km:"59", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=50555237&project=oar-rlp", stats:{duration:"5,3 h", ascent:"889 hm", descent:"901 hm"}},

{id:12, _status:"stats_complete", title:"WW1: Nomborn \u2013 Fuchskaute", subtitle:null, difficulty:"schwer", km:"55", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=50556453&project=oar-rlp", stats:{duration:"4,3 h", ascent:"736 hm", descent:"298 hm"}},

{id:13, _status:"stats_complete", title:"WW1: Hachenburg \u2013 Grenzau", subtitle:null, difficulty:"mittel", km:"50", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=50553586&project=oar-rlp", stats:{duration:"3,8 h", ascent:"362 hm", descent:"483 hm"}},

{id:14, _status:"stats_complete", title:"Ruhr-Sieg-Radweg", subtitle:null, difficulty:"mittel", km:"23", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3417720&project=oar-rlp", stats:{duration:"1,5 h", ascent:"278 hm", descent:"52 hm"}},

{id:15, _status:"stats_complete", title:"Westerwald-Lahn-Radweg", subtitle:"Einmal quer durch die Region", difficulty:"schwer", km:"92", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=24196067&project=oar-rlp", stats:{duration:"23,0 h", ascent:"1354 hm", descent:"1429 hm"}},

{id:16, _status:"stats_complete", title:"Westerwald-Rhein-Radweg", subtitle:"Von der Kirchlinde bis zum Limes", difficulty:"schwer", km:"72", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3417839&project=oar-rlp", stats:{duration:"5,3 h", ascent:"615 hm", descent:"778 hm"}}

];


/**
 * Guck ma, Westerwald – Datendatei
 * Radfahren: Gravelbike-Touren
 * 
 * Quelle: westerwald.info/gravelbike/
 * Stand: April 2026 – 9 Touren
 */
var DATA_RADFAHREN_GRAVELBIKE = [
{id:1, _status:"stats_complete", title:"Hachenburger Westerwald", subtitle:"Abwechslungsreiche Rundtour", difficulty:"schwer", km:"75", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14417554&project=oar-rlp", stats:{duration:"5,9 h", ascent:"994 hm", descent:"994 hm"}},
{id:2, _status:"stats_complete", title:"Bad Marienberg-Tour", subtitle:"Abenteuer f\u00fcr Fortgeschrittene", difficulty:"schwer", km:"45", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330701&project=oar-rlp", stats:{duration:"3,4 h", ascent:"545 hm", descent:"545 hm"}},
{id:3, _status:"stats_complete", title:"Kannenb\u00e4ckerland-Route", subtitle:"Abwechslung zwischen T\u00f6pfereien, Westerw\u00e4lder Dom und Erlenhofsee", difficulty:"schwer", km:"48", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=37926269&project=oar-rlp", stats:{duration:"3,8 h", ascent:"528 hm", descent:"528 hm"}},
{id:4, _status:"stats_complete", title:"Fuchskauten Tour", subtitle:null, difficulty:"schwer", km:"34", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14330853&project=oar-rlp", stats:{duration:"3,0 h", ascent:"501 hm", descent:"501 hm"}},
{id:5, _status:"stats_complete", title:"Rund um den Knoten", subtitle:"Malerische Fahrt durch typische Landschaften", difficulty:"mittel", km:"33", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=14247866&project=oar-rlp", stats:{duration:"2,4 h", ascent:"388 hm", descent:"388 hm"}},
{id:6, _status:"stats_complete", title:"Sechs-B\u00e4che-Tour", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"47", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=67738080&project=oar-rlp", stats:{duration:"4,5 h", ascent:"1103 hm", descent:"1016 hm"}},
{id:7, _status:"stats_complete", title:"Schottern durchs Rengsdorfer Land", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"39", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=67738373&project=oar-rlp", stats:{duration:"3,0 h", ascent:"686 hm", descent:"696 hm"}},
{id:8, _status:"stats_complete", title:"Holy Gravel!", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"27", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=807370581&project=oar-rlp", stats:{duration:"3,5 h", ascent:"657 hm", descent:"657 hm"}},
{id:9, _status:"stats_complete", title:"WiedHeights", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"48", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=807270910&project=oar-rlp", stats:{duration:"3,5 h", ascent:"706 hm", descent:"706 hm"}}
];


/**
 * Guck ma, Westerwald – Datendatei
 * Radfahren: Mountainbike-Strecken
 * 
 * Quelle: westerwald.info/mountainbike/
 * Stand: April 2026 – 9 Strecken
 * Hinweis: Touren 6-9 sind identisch mit Gravelbike (Gravel & eMTB)
 */
var DATA_RADFAHREN_MOUNTAINBIKE = [
{id:1, _status:"stats_complete", title:"Hauptroute (A)", subtitle:"Sportliche MTB-Tour mit kleineren sowie drei gro\u00dfen Anstiegen", difficulty:"schwer", km:"46", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3234381&project=oar-rlp", stats:{duration:"3,0 h", ascent:"1006 hm", descent:"1006 hm"}},
{id:2, _status:"stats_complete", title:"F\u00fcsseberg-Runde (B)", subtitle:"Auf der Einsteigertour durch den N\u00f6rdlichen Westerwald", difficulty:"leicht", km:"14", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3234451&project=oar-rlp", stats:{duration:"1,0 h", ascent:"341 hm", descent:"341 hm"}},
{id:3, _status:"stats_complete", title:"Bergmannspfad (C)", subtitle:"Reizvolle Tour mit rund 100 Metern H\u00f6henunterschied", difficulty:"leicht", km:"8", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3234466&project=oar-rlp", stats:{duration:"0,7 h", ascent:"105 hm", descent:"105 hm"}},
{id:4, _status:"stats_complete", title:"Galgenkopf-Runde (D)", subtitle:"Sportliche MTB-Herausforderung im Tierschutzgebiet Westerwald", difficulty:"mittel", km:"14", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3234473&project=oar-rlp", stats:{duration:"1,6 h", ascent:"317 hm", descent:"317 hm"}},
{id:5, _status:"stats_complete", title:"Scheuerberg-Schleife (E)", subtitle:"Herausfordernde MTB-Tour durch den Wald s\u00fcdwestlich von Betzdorf", difficulty:"leicht", km:"11", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=3234479&project=oar-rlp", stats:{duration:"1,2 h", ascent:"285 hm", descent:"285 hm"}},
{id:6, _status:"stats_complete", title:"Sechs-B\u00e4che-Tour", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"47", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=67738080&project=oar-rlp", stats:{duration:"4,5 h", ascent:"1103 hm", descent:"1016 hm"}, _alsoIn:"gravelbike"},
{id:7, _status:"stats_complete", title:"Schottern durchs Rengsdorfer Land", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"39", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=67738373&project=oar-rlp", stats:{duration:"3,0 h", ascent:"686 hm", descent:"696 hm"}, _alsoIn:"gravelbike"},
{id:8, _status:"stats_complete", title:"Holy Gravel!", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"27", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=807370581&project=oar-rlp", stats:{duration:"3,5 h", ascent:"657 hm", descent:"657 hm"}, _alsoIn:"gravelbike"},
{id:9, _status:"stats_complete", title:"WiedHeights", subtitle:"Gravel & eMTB | Wiedtal-Westerwald", difficulty:"mittel", km:"48", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=807270910&project=oar-rlp", stats:{duration:"3,5 h", ascent:"706 hm", descent:"706 hm"}, _alsoIn:"gravelbike"}
];


/**
 * Guck ma, Westerwald – Datendatei
 * Radfahren: Rennradtouren
 * 
 * Quelle: westerwald.info/rennrad/
 * Stand: April 2026 – 5 Touren
 */
var DATA_RADFAHREN_RENNRAD = [
{id:1, _status:"stats_complete", title:"Westerw\u00e4lder Express-Runde", subtitle:null, difficulty:"leicht", km:"62", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=18441102&project=oar-rlp", stats:{duration:"3,9 h", ascent:"784 hm", descent:"803 hm"}},
{id:2, _status:"stats_complete", title:"Westerw\u00e4lder Seen-Runde", subtitle:null, difficulty:"mittel", km:"99", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=18441144&project=oar-rlp", stats:{duration:"6,2 h", ascent:"1233 hm", descent:"1239 hm"}},
{id:3, _status:"stats_complete", title:"Westerw\u00e4lder Klassiker-Runde", subtitle:null, difficulty:"schwer", km:"155", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=18441150&project=oar-rlp", stats:{duration:"9,5 h", ascent:"2189 hm", descent:"2174 hm"}},
{id:4, _status:"stats_complete", title:"Westerw\u00e4lder Feierabend-Runde", subtitle:null, difficulty:"schwer", km:"72", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=18741156&project=oar-rlp", stats:{duration:"3,9 h", ascent:"932 hm", descent:"932 hm"}},
{id:5, _status:"stats_complete", title:"Westerw\u00e4lder Stadt-Land-Klosterrunde", subtitle:null, difficulty:"schwer", km:"121", gpxUrl:"https://www.tourenplaner-rheinland-pfalz.de/de/download.tour.gpx?i=18830570&project=oar-rlp", stats:{duration:"6,6 h", ascent:"1459 hm", descent:"1459 hm"}}
];


/**
 * Guck ma, Westerwald – Datendatei
 * E-Bike Infrastruktur (Verleih, Ladestationen, Reparatur, Shops)
 * 
 * Quelle: westerwald.info/e-bike/
 * Stand: April 2026 – 23 Infrastrukturen
 */
var DATA_EBIKE_INFRASTRUKTUR = [
{id:1, type:"Fahrradverleih", name:"E-Bike Verleih: Zweirad Schnell", ort:"Hachenburg", address:"Koblenzer Stra\u00dfe 38a, 57627 Hachenburg"},
{id:2, type:"E-Bike/Pedelec Akku-Wechselstation", name:"Ladestation f\u00fcr E-Bikes und Pedelecs", ort:"Rennerod", address:"Verbandsgemeindeverwaltung Rennerod"},
{id:3, type:"E-Bike/Pedelec Akku-Wechselstation", name:"Ladestationen f\u00fcr e-Bikes und Pedelecs Rathaus", ort:"Haiger", address:"Vor dem Rathaus in Haiger"},
{id:4, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E Bike Ladestation Steimel", ort:"Steimel", address:null},
{id:5, type:"Campingplatz", name:"Camping Im Eichenwald", ort:"Mittelhof", address:null},
{id:6, type:"Fahrradreparatur", name:"Bikesport Meyer", ort:"Daaden", address:null},
{id:7, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E-Bike Ladestation am Dorfgemeinschaftshaus", ort:"Giesenhausen", address:"Hauptstra\u00dfe 22, 57612 Giesenhausen"},
{id:8, type:"Fahrradreparatur", name:"Fahrrad-Reparaturstation am Dreifelder Weiher", ort:"Steinebach/Wied", address:"Haus am See, Seeburger Stra\u00dfe 1"},
{id:9, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E Bike Ladestation Puderbach", ort:"Puderbach", address:null},
{id:10, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E Bike Ladestation Raubach", ort:"Raubach", address:null},
{id:11, type:"Gesch\u00e4fte/Shops", name:"W\u00e4ller Sport - Der HAMMER in Altenkirchen", ort:"Altenkirchen", address:"Sportfachh\u00e4ndler am Westerwaldsteig"},
{id:12, type:"Gesch\u00e4fte/Shops", name:"Tretm\u00fchle Betzdorf", ort:"Betzdorf", address:null},
{id:13, type:"E-Bike- und Pedelec-Stationen", name:"E-Bike Ladestation an der Tourist-Information", ort:"Hachenburg", address:"Alter Markt 4-6, 57627 Hachenburg"},
{id:14, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E Bike Ladestation D\u00f6ttesfeld", ort:"D\u00f6ttesfeld", address:null},
{id:15, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E-Bike Ladestation an der Verbandsgemeinde", ort:"Hachenburg", address:"Gartenstra\u00dfe 11, 57627 Hachenburg"},
{id:16, type:"Gesch\u00e4fte/Shops", name:"Tretm\u00fchle Wissen", ort:"Wissen", address:null},
{id:17, type:"Fahrradreparatur", name:"Fahrrad-Reparaturstation am Wilhelmsteg", ort:"Heuzert", address:"Wilhelmsteg 1, 57627 Heuzert"},
{id:18, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E Bike Ladestation Urbach", ort:"Urbach", address:null},
{id:19, type:"E-Bike/Pedelec Akku-Wechselstation", name:"E-Bike Ladestation am Hotel Hammerm\u00fchle", ort:"Wahlrod", address:"Hammerm\u00fchle 1, 57614 Wahlrod"},
{id:20, type:"E-Bike/Pedelec Akku-Wechselstation", name:"Akkuwechselstation Hotel-Restaurant Im Heisterholz", ort:"Hammelzen", address:null},
{id:21, type:"Gesch\u00e4fte/Shops", name:"Zweiradhaus K\u00e4mpflein", ort:"Daaden", address:null},
{id:22, type:"E-Bike/Pedelec Akku-Wechselstation", name:"Ladestation f\u00fcr e-Bikes und Pedelecs", ort:"Neustadt/Wied", address:null},
{id:23, type:"E-Bike/Pedelec Akku-Wechselstation", name:"Ladestation f\u00fcr e-Bikes und Pedelecs", ort:"Selters", address:null}
];


