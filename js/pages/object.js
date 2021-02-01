//
// Objekt är en samling med properties

//
// Vad är objekt och vad är values?

//
// Man kan loopa över properties precis som arrayer

//
// for( of ) för arrayer

//
// for( in ) för properties



/* Fråga 1 
  Skriv en funktion som loopar igenom alla keys i ett objekt
  och skriver ut alla properties och vilken typ de är.

  Använd for( in ) för att loopa. https://www.w3schools.com/jsref/jsref_forin.asp

  Använd typeof för att kolla typen på value

  Använd <br/> för radbyte

  
  Bonus:
  Använd <span> för att ändra färg beroende på
  typ av value. string blir grön, number blir röd etc.
  https://www.w3schools.com/tags/tag_span.asp 
*/
//#region test kod
let teacher = {
    namn: "Björn",
    yrke: "Lärare",
    gift: true,
    ålder: 28,

    kunskap: {javascript: true, csharp: true, java: false},
    familjemedlemmar: ["Honoka", "Candie"],

    titel: function(){
        return `${this.yrke} ${this.name}`
    },
}
//#endregion

//
// .name ger funktionens namn

//
// .toString() låter oss titta på hela funktionen


/* Fråga 2
  Funktioner är inte bara en lista med instruktioner,
  funktioner är också objekt, med sina egna key/value pairs

  Skriv en funktion som kollar på ett HTML objekts 
  event handlers ('myObj.onclick etc.') och dimmar 
  ut de som är 'undefined' samt visar en snutt av 
  källkoden om det finns en handler funktion registrerad

  ------------------------------------------------------
  
  kolla om nyckeln börjar med 'on' för att sortera
  bort properties som inte är event handlers

  if( !== null) 
  kollar om en variabel eller property 
  pekar på ett objekt/funktion

  myFunc.toString() 
  ger funktionens källkod

  Använd <span> för att ändra färg
  https://www.w3schools.com/tags/tag_span.asp


  Bonus:
  Det är många event handlers som inte används
  hoppa över när det är flera i rad som inte används

    onabort      : not used
    ...skipped 45 rows...
    onmouseleave : not used
    onmousemove  : (e) => { `x:${e.x} y:...
    onmouseout   : not used
    ...skipped 23 rows...
*/
//#region test kod
let testElement = document.createElement("a");

function logEvent(e) { 
    console.log(e.type); 
}

testElement.onclose = logEvent;
testElement.onmousedown = logEvent;
testElement.onscroll = logEvent;
testElement.onplay = logEvent;

document.onmouseup = (e) => console.log(`x:${e.x} y:${e.y}`);
//#endregion

//
// JSON används för att skicka objekt över nätet som text
// https://www.w3schools.com/js/js_json_intro.asp
// Web API exempel https://openweathermap.org/ 

//
// JSON är regler för hur JS objekt ska representeras i text

//
// JSON.parse(jsonText, reviverFunc)

//
// JSON.stringify(object, replacerFunc, spacing)

/* Fråga 3
  Använd JSON.parse för att tolka de två första
  JSON texterna. Kalla på alert med något medelande
  som bygger på informationen i objekten.

  JSON nr2 kommer från https://openweathermap.org/current 
  
  För den sista knappen så ska du göra om teacher
  till en JSON string och lägga in den i #q3_out
  
  Sätt JSON strängen innuti ett <pre></pre> element
  innan du stoppar in det i #q3_out.
  Det är för att nya rader ('\n') ska visas ordentligt.

  Bonus:
  Datum informationen "dt" i den andra JSON strängen
  är bara en stor siffra som är svårtolkad, men det
  är egentligen ett datum.
  
  När vi kallar på JSON.parse så kan vi skicka med
  en funktion kallad reviver, 'återupplivare'
  som kan jobba lite extra och omvandla tex
  "dt" från en siffra till ett datum
  
  https://www.w3schools.com/Jsref/jsref_parse_json.asp
  Läs på lite om hur det fungerar och se till att
  alla datum blir JS Date objekt istället för siffor.

  (motsvarande finns för JSON.stringify med. då kallas
   funktionen man skickar med för en replacer, 'ersättera')
*/