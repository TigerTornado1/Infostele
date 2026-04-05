/**
 * Guck ma, Westerwald – Datendatei
 * BADESEEN & SCHWIMMBÄDER
 * 
 * Quelle: Eigene Recherche (Landkreise AK, NE, WW)
 * Stand: April 2026
 * 
 * Struktur: Nach Landkreis gruppiert (ak, ne, ww)
 * Jeder Eintrag: {t: "Name", typ: "Hallenbad/Freibad/Badesee", u: "URL"}
 * 
 * Späterer DSI-Umstieg: Diese Datei wird durch fetch()-Aufrufe
 * an die feratel DSI-Schnittstelle ersetzt.
 */

const DATA_BADESEEN = {
  ak: [
    // Freizeitb�der & Hallenb�der
    {t:'Hallenbad Altenkirchen', typ:'Hallenbad/Freizeitbad', u:'https://www.vg-altenkirchen-flammersfeld.de/hallenbad'},
    {t:'Hallenbad Daaden', typ:'Hallenbad/Freizeitbad', u:'https://www.daaden.de'},
    {t:'Freizeitbad Molzberg (Betzdorf/Kirchen)', typ:'Hallenbad/Freizeitbad', u:'https://www.freizeitbad-molzberg.com'},
    {t:'Siegtalbad Wissen (Hallen- & Freibad)', typ:'Hallenbad/Freizeitbad', u:'https://www.siegtalbad.de'},
    // Freib�der
    {t:'Waldschwimmbad Thalhauserm�hle Hamm/Sieg', typ:'Freibad', u:'https://www.vg-hamm-sieg.de/freizeit-und-tourismus/badeseen-und-schwimmbaeder'},
    {t:'Naturfreibad Schinderweiher Niederschelderh�tte', typ:'Freibad', u:'https://www.kreis-altenkirchen.de'},
    {t:'Freibad Daaden (solarbeheizt)', typ:'Freibad', u:'https://www.daaden.de'},
    {t:'Freibad Dickendorf', typ:'Freibad', u:'https://www.sv-dickendorf.de'},
  ],
  ne: [
    // Freizeitb�der & Hallenb�der
    {t:'Deichwelle Neuwied (Hallen- & Freibad)', typ:'Hallenbad/Freizeitbad', u:'https://www.deichwelle.de'},
    {t:'Wiedtalbad Hausen (Hallen- & Freibad)', typ:'Hallenbad/Freizeitbad', u:'https://www.wiedtalbad.de'},
    {t:'Aquafit Dierdorf', typ:'Hallenbad/Freizeitbad', u:'https://www.aquafit-dierdorf.de'},
    {t:'Hallenbad Puderbach', typ:'Hallenbad/Freizeitbad', u:'https://www.vg-puderbach.de'},
    {t:'Kristall Rheinpark-Therme Bad H�nningen', typ:'Hallenbad/Freizeitbad', u:'https://kristall-rheinpark-therme.de'},
    // Freib�der
    {t:'Freibad Rengsdorf', typ:'Freibad', u:'https://freibad-rengsdorf.de'},
    {t:'Freibad Urbach', typ:'Freibad', u:'https://www.urbach-ww.de/das-freibad'},
    {t:'Naturschwimmbad Niederhonnefeld', typ:'Freibad', u:'https://www.strassenhaus.de/naturschwimmbad.html'},
    {t:'Freibad Ehlscheid', typ:'Freibad', u:'https://www.ehlscheid.de'},
    // Badeseen
    {t:'Naturschwimmbad Niederhonnefeld (M�hlenweiher)', typ:'Badesee', u:'https://www.strassenhaus.de/naturschwimmbad.html'},
  ],
  ww: [
    // Freizeitb�der & Hallenb�der
    {t:'MarienBad Bad Marienberg', typ:'Hallenbad/Freizeitbad', u:'https://www.marienbad-info.de'},
    {t:'L�wenbad Hachenburg', typ:'Hallenbad/Freizeitbad', u:'https://loewenbad.hachenburg.info'},
    {t:'Mons-Tabor-Bad Montabaur (Hallen- & Freibad)', typ:'Hallenbad/Freizeitbad', u:'https://www.vg-montabaur.de'},
    {t:'Hallenbad Nauort (VG Ransbach-Baumbach)', typ:'Hallenbad/Freizeitbad', u:'https://baeder.ransbach-baumbach.de'},
    // Freib�der
    {t:'Freibad Unnau (by MarienBad)', typ:'Freibad', u:'https://www.marienbad-info.de/cms/schwimmbad/freibad-unnau/index.html'},
    {t:'Westerwaldbad Westerburg', typ:'Freibad', u:'https://www.vg-westerburg.de/bildung-soziales/westerwaldbad/'},
    {t:'Freibad Ransbach-Baumbach', typ:'Freibad', u:'https://baeder.ransbach-baumbach.de'},
    {t:'Schwimmbad Linderhohl H�hr-Grenzhausen (Naturschwimmbad)', typ:'Freibad', u:'https://www.hoehr-grenzhausen.de/leben-erleben/freizeit-sport/schwimmbad-linderhohl/'},
    {t:'Freibad Hundsangen', typ:'Freibad', u:'https://www.wallmerod.de'},
    // Badeseen
    {t:'Strandbad Freilingen / Postweiher', typ:'Badesee', u:'https://www.campingplatz-freilingen.de'},
    {t:'Dreifelder Weiher (Strandbad Seeburg)', typ:'Badesee', u:'https://www.hausamsee-dreifelderweiher.com'},
    {t:'Wiesensee / Strandbad Pottum', typ:'Badesee', u:'https://www.westerwald.info/seen/'},
    {t:'Badesee Elbingen', typ:'Badesee', u:'https://www.wallmerod.de'},
    {t:'Klingelwiese Maxsain', typ:'Badesee', u:'http://www.klingelwiese.de'},
    {t:'Krombachtalsperre (Badezone)', typ:'Badesee', u:'https://www.westerwald.info/seen/'},
  ]
};
