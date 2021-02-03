"strict mode";
{
  // ES6 let, const
  // använd gärna function(){}

  /* 
  ________________________________________
  |            inför Fråga 1             |
  ---------------------------------------- 
  */
  //
  // Objekt är en samling med properties

  // bestämma properties när objektet skapas
  let läraren = {
    name: "Björn", // ett element i ett objekt kallas för 'property'
    husdjur: 1,
    längd: 179.5,
    kanHoppaTvåMeter: false,
    fruktJagGillar: ["äpple", "päron", "apelsin"],

    rekommenderaFrukt: function () {
      let i = Math.round(Math.random() * (this.fruktJagGillar.length - 1));
      return this.fruktJagGillar[i];
    },
  };

  // bestämma properties allt eftersom
  let granne = {};
  granne.name = "Börje";
  granne.husdjur = 2;

  // Tips!
  // om man vill kolla på htmlElement objekt som tex 'document' objektet i
  // konsollen så kan man använda console.dir(document)

  //
  // Vad är objekt och vad är values?

  // Objekt och Arrayer och Funktioner är alla objekt (pass by reference)
  let person = granne; // objekt skickas runt per referens
  person.name = "sir " + person.name;

  // Values är strängar, nummer och boolska värden (pass by value)
  let namn = "Hilda";
  let kopia = namn;
  kopia = kopia.replace("i", "u");

  //
  // Man kan loopa över properties precis som arrayer

  // en array
  let customers = ["gg.homie@gmail.com", "jänta65@hotmail.se"];
  // loopa array med for-loop
  for (let i = 0; i < customers.length; i++) {
    let element = customers[i];
    console.log(`i:${i} element:${element}`);
  }

  let bok = {
    // key : value       (key/value pair)
    titel: "Catcher in the rye",
    pris: 349.9,
  };

  console.log("titel: " + bok.titel); // detta är
  console.log("titel: " + bok["titel"]); // samma som detta

  let bokKeys = Object.keys(bok); // plocka fram alla nycklar i objektet
  for (let i = 0; i < bokKeys.length; i++) {
    let key = bokKeys[i]; // ta fram en nyckel
    let value = bok[key]; // använd nyckeln i objektet för att hitta motsvarande värde

    console.log(`i:${i} key:${key} value:${value}`);
  }

  let kvPairs = Object.entries(bok);
  for (let i = 0; i < kvPairs.length; i++) {
    let key = kvPairs[i][0];
    let value = kvPairs[i][1];

    console.log(`i:${i} key:${key} value:${value}`);
  }

  for (let i = 0; i < kvPairs.length; i++) {
    [key, value] = kvPairs[i];

    console.log(`i:${i} key:${key} value:${value}`);
  }

  //
  // for( of ) för arrayer
  for (let element of customers) {
    console.log(`element:${element}`);
  }

  //
  // for( in ) för properties i ett objekt
  for (let key in bok) {
    let value = bok[key];
    console.log(`key:${key} value:${value}`);
  }

  /* 
  ________________________________________
  |            inför Fråga 2             |
  ---------------------------------------- 
  */
  function sägHej() {
    alert("Hej på dig min vän!");
  }
  //
  // .name ger funktionens namn
  let myFunc = sägHej;
  console.log("myFunc variabeln refererar till " + myFunc.name);

  //
  // .toString() låter oss titta på hela funktionen
  console.log(myFunc.name + " är definierad såhär \n\n" + myFunc.toString());

  //
  // vi kan lägga till vad som helst till objekt
  console.log("sägHej.body är " + sägHej.body);

  Function.prototype.makeSpecial = function () {
    this.body = function () {
      let whole = this.toString();
      let body = whole.substring(whole.indexOf("{"));
      return body;
    };
  };
  sägHej.makeSpecial();

  console.log("sägHej.body är " + sägHej.body);

  console.log("funktionskroppen:\n" + sägHej.body());

  /* 
  ________________________________________
  |            inför Fråga 3             |
  ---------------------------------------- 
  */
  //
  // JSON används för att skicka objekt över nätet som text
  // https://www.w3schools.com/js/js_json_intro.asp
  // Web API exempel https://openweathermap.org/current#current_JSON

  //
  // JSON är regler för hur JS objekt ska representeras i text

  //
  // JSON.stringify(object, replacerFunc, spacing)
  let lärareSomText = JSON.stringify(läraren);
  console.log(lärareSomText);
  //
  // JSON.parse(jsonText, reviverFunc)
  let objektIgen = JSON.parse(lärareSomText);
  console.log(objektIgen);
}
