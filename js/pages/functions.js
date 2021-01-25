"use strict";

// ------------------------------------------------------------------------
//#region Globala Variabler
let i = 0;
let A = "A";
let B = "B";
//#endregion
// ------------------------------------------------------------------------

/* Fråga 1

  Pröva att kopiera innehållet från A till B
*/

//let A = document.querySelector("#q1 .A");
//let B = document.querySelector("#q1 .B");

/* Fråga 2

  Skriv en funktion som räknar antal ord i A
  och skriver ut i B
*/

//let A = document.querySelector("#q2 .A");
//let B = document.querySelector("#q2 .B");

/* Fråga 3

  Förbättra funktionen från fråga två så att
  den kan återanvändas på vilket HTMLElement som helst

  Kalla den på de tre elementen i låda A
  och skriv resultatet i låda B
 */

//let paragraph = document.querySelector("#q3 p");
//let button = document.querySelector("#q3 button");
//let link = document.querySelector("#q3 a");

//let B = document.querySelector("#q3 .B");














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
