// lägg till detta
"use strict";

/* Fråga 1
 
  Skapa en funktion som tänder en fjäril genom
  att sätta style.filter = "grayscale(0%)"
  när man svävar över den.

  https://www.w3schools.com/jsref/met_element_setattribute.asp

  Använd onmouseenter eller mouseenter
  https://www.w3schools.com/js/js_events.asp

  för att få tag på fjärilen skickar du med
  en parameter, som brukar namnges 'event'
  sen kan man få tag på HTMLElementet via
  'event.currentTarget'
*/

function belysFjäril(e){
  let butterfly = e.currentTarget;
  butterfly.style.filter = "grayscale(0%)";
}
//belysFjäril();

let hej = 5;
let obj = { namn:"björn", yrke:"lärare" };
let ref = obj;

let func = belysFjäril;
//func();

let butterfly = document.querySelector("#q1 .butterfly");
butterfly.onmouseenter = belysFjäril;
//butterfly.onmouseenter();

butterfly.addEventListener("mouseenter", belysFjäril);



/* Fråga 2
  Pröva att använda dig av funktioner utan namn
  s.k. 'anonyma funktioner'. Antingen genom

  function() {

  }

  formen eller

  () => {

  }

  formen. (arrow-function)

  Gör en för onmouseenter som fungerar samma som tidigare,
  och en för onmouseleave som sätter style till en tom sträng.

  butterfly.style.filter = "grayscale(0%)"; // ge fjäril färg

  butterfly.style.filter = "grayscale(100%)"; // låt fjäril bli grå
  butterfly.style.filter = ""; // låt fjäril bli grå
*/
{
  let butterfly = document.querySelector("#q2 img");

  butterfly.onmouseenter = function (e){
    let butterfly = e.currentTarget;
    butterfly.style.filter = "grayscale(0%)"; // ge fjäril färg
  }; 
  butterfly.onmouseleave = function (e){
    let butterfly = e.currentTarget;
    butterfly.style.filter = "grayscale(100%)"; // låt fjäril bli grå
  };
  
  let calc = 5 + 2;
}

/* Fråga 3

  Använd nu en funktion som har namn igen. Pröva att binda onmouseover
  eventet på alla tre sätt som går i JavaScript

  På första fjärilen så går du via HTML onmouseover="foo()" metoden
  Andra fjärilen går via .onmouseover = foo; metoden
  Tredje går via addEventListener("mouseover", foo); metoden

  Vad är det för för- och nackdelar med de olika metoderna?
*/

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

/*
b1.onmouseover = function(event){
  // innehållet i funktionen
  belysFjäril(event);
}
*/
// <img id="b1" onMouseOver="belysFjäril(event)" class="butterfly" src="/img/butterfly.webp">

function skrik(e){
  alert("AAAAAA!!");
}

b2.onmouseover = belysFjäril;
//b2.onmouseover += skrik;
/*
b2.addEventListener("mouseover", belysFjäril);
b2.addEventListener("mouseover", skrik);
*/

b3.addEventListener("mouseover", belysFjäril);

//TODO timer
window.setInterval(skrik, 10_000);


/* Fråga 4
  
  Målet är att fjärilen ska börja flyga genom avancerat event användande.

  Använd addEventListener för att binda två funktioner
  till "click" eventet.

  Den första funktion är samma som innan, den tänder fjärilen.

  Den andra funktionen sätter i sin tur två nya event:
    En addEventListener på hela 'document' för "mousemove", som flyttar runt fjärilens position. 
    En addEventListener på "click" som tar bort ovanstående med removeEventListener och 
    återställer första klick eventet.

  Alla "click" event ställs in så att de bara kör en gång innan de försvinner via
  addEventListener("click", foo, {once:true})


  Trick:
  
  Se till att fjärilen är ett direkt barn till <body>
  Sätt CSS position till absolute
  Sätt CSS z-position till något högt värde
  Sätt position via CSS left och top
  Hämta musposition via document.onmousemove eventet 
    som gäller vart somhelst i websidan
 */

 
function flyga(){
  // gör så att fjärilen följer muspekaren
}
 document.onmousemove = flyga;












// ----------------------------
// |         Facit            |
// ----------------------------

// Fråga 1
/*
function lightUp(event) {
  let butterfly = event.currentTarget;
  butterfly.style.filter = "grayscale(0%)";
}

document.querySelector("#q1 img").onmouseenter = lightUp;
*/

// Fråga 2
/*
let img = document.querySelector("#q2 img");

img.onmouseenter = function (event) {
  let butterfly = event.currentTarget;
  butterfly.style.filter = "grayscale(0%)";
};
img.onmouseleave = (event) => {
  let butterfly = event.currentTarget;
  butterfly.style.f
*/

// Fråga 3
/*
function lightUp(event){
    let butterfly = event.currentTarget;
    butterfly.style.filter = "grayscale(0%)";
}

// inne i events.html
<img id="b1" class="butterfly" onhover="lightUp(event)" src="/img/butterfly.webp">

let b2 = document.querySelector("#b2");
b2.onmouseover = lightUp;

let b3 = document.querySelector("#b3");
b3.addEventListener("mouseover", lightUp);
*/

// Fråga 4
/*
let bf = document.querySelector("#q4 img");

bf.addEventListener("click", lightUp);
bf.addEventListener("click", startFlying, {once:true});

function lightUp(event){
    let butterfly = event.currentTarget;
    butterfly.style.filter = "grayscale(0%)";
}
function startFlying(event){
    let butterfly = event.currentTarget;

    document.body.append(butterfly);

    butterfly.addEventListener("click", stopFlying, {once:true});
    document.addEventListener("mousemove", fly);
}
function stopFlying(event){
    let butterfly = event.currentTarget;

    document.querySelector("#q4 div").append(butterfly);
    butterfly.style = "";

    butterfly.addEventListener("click", startFlying, {once:true});
    document.removeEventListener("mousemove", fly);
}
function fly(event){
    let butterfly = bf;

    butterfly.style.left = event.pageX - butterfly.offsetWidth / 2 + 'px';
    butterfly.style.top = event.pageY - butterfly.offsetHeight / 2 + 'px';
}
*/