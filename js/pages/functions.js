"use strict";

// ------------------------------------------------------------------------
//#region Globala Variabler
// let & const
{
  let i = 0;
  let A = "A";
  let B = "B";
}
//#endregion
// ------------------------------------------------------------------------

/* Fråga 1

  Pröva att kopiera innehållet från A till B

  https://www.w3schools.com/js/js_functions.asp
*/
{
  let A = document.querySelector("#q1 .A");
  let B = document.querySelector("#q1 .B");

  B.innerText = A.textContent;
}


/* Fråga 2

  Skriv en funktion som räknar antal ord i A
  och skriver ut i B

  Rätt antal: 186

  lista på sträng metoder:
  https://www.w3schools.com/jsref/jsref_obj_string.asp
  klicka på alla try me's
  https://www.w3schools.com/js/js_string_methods.asp
*/
// beskriva vad som ska ske
function räknaOrd(){
  let A = document.querySelector("#q2 .A");
  let B = document.querySelector("#q2 .B");

  let string = A.innerText;
  let word = string.split(" ");
  B.innerText = `Det var ${word.length} ord i A`;

  /*
  let spaces = 0;
  for(let charIndex = 0; charIndex < string.length; charIndex++){
    let char = string[charIndex];
    if(char == " "){
      spaces++;
    }
  }
  B.innerText = `Det var ${spaces+1} ord i A`;
  console.log(A);
  */
};
räknaOrd();

/* Fråga 3

  Förbättra funktionen från fråga två så att
  den kan återanvändas på vilket HTMLElement som helst

  Kalla den på de tre elementen i låda A
  och skriv resultatet i låda B

  parametrar   - data som åker in till funktionen
               - ingredienser till ett recept
  retrur värde - data som åker ut ur funktionen
  https://www.w3schools.com/js/js_function_parameters.asp
*/

function bakeCake(milk, flour, sugar){
 let cake = (milk + flour + sugar * 0.01) / 3.0;
 return cake;
}

// baka en kaka
let cakeWeight = bakeCake(/*lättmjölk 2l*/ 2, /*Grahamsmjöl 1l*/1, /*rörsocker 500gr*/500);
// baka en dubbelt så stor kaka
cakeWeight = bakeCake(/*lättmjölk 2l*/ 2*2, /*Grahamsmjöl 1l*/1*2, /*rörsocker 500gr*/500*2);

function countWords(/*kanske en <div> eller en <button>*/htmlElement){
  let string = htmlElement.innerText;
  let words = string.split(" ");
  let wordCount = words.length;

  return wordCount;
}

let paragraph = document.querySelector("#q3 p");
let button = document.querySelector("#q3 button");
let link = document.querySelector("#q3 a");

let B = document.querySelector("#q3 .B");

let paragraphCount = countWords(paragraph);
B.innerText = `Det var ${paragraphCount} ord i <p>`;
B.innerText += `Det var ${countWords(button)} ord i <button>`;
B.innerText += `Det var ${countWords(link)} ord i <a>`;

// ----------------------------
// |         Facit            |
// ----------------------------

// Fråga 1
/*
{
  let A = document.querySelector("#q1 .A");
  let B = document.querySelector("#q1 .B");

  B.innerText = A.innerText;
}
*/

// Fråga 2
/*
function countWords(){
  let A = document.querySelector("#q2 .A");
  let B = document.querySelector("#q2 .B");

  let words = A.innerText.split(" ");
  let count = words.length;

  B.innerText = "There are " + count + " words.";
}

countWords();
*/

// Fråga 3
/*
{
  let paragraph = document.querySelector("#q3 p");
  let button = document.querySelector("#q3 button");
  let link = document.querySelector("#q3 a");

  let B = document.querySelector("#q3 .B");

  function countWords(htmlElement){
    let words = htmlElement.innerText.split(" ");
    let count = words.length;

    return "There are " + count + " words in " + htmlElement.tagName;
  }
  
  let report = countWords(paragraph);
  report += "<br>" + countWords(button);
  report += "<br>" + countWords(link);
  B.innerHTML = report;
}
*/
