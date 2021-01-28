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
  butterfly.classList.remove("greyed-out");
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

  function toggleColor(e){
    let butterfly = e.currentTarget;
    butterfly.classList.toggle("greyed-out");
  }
  
  butterfly.onmouseenter = toggleColor; 
  butterfly.onmouseleave = toggleColor;
  
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
//window.setInterval(skrik, 10_000);


/* Fråga 4
  
  Målet är att fjärilen ska börja flyga.

  Börja med att den flyger hela tiden, 
  lös klickande och sånt senare.

  Trick:
  Se till att fjärilen är ett direkt barn till <body>
  Sätt CSS position till absolute
  Sätt CSS z-position till något högt värde
  Sätt position via CSS left och top
  Hämta musposition via document.onmousemove eventet 
    som gäller vart somhelst i websidan
    
  https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent


  
  Använd addEventListener för att binda två funktioner
  till "click" eventet.

  Den första funktion är samma som innan, den tänder fjärilen.

  Den andra funktionen sätter i sin tur två nya event:
    En addEventListener på hela 'document' för "mousemove", som flyttar runt fjärilens position. 
    En addEventListener på "click" som tar bort ovanstående med removeEventListener och 
    återställer första klick eventet.

  Alla "click" event ställs in så att de bara kör en gång innan de försvinner via
  addEventListener("click", foo, {once:true})
 */

{ 
  let butterfly = document.querySelector("#q4 img");
  butterfly.classList.add("abs-pos");
  document.body.append(butterfly);

  butterfly.classList.remove("greyed-out");
  // Tyvärr kan vi inte flyga med .flying samtidigt 
  // som vi förflyttar oss med transform :(
  //butterfly.classList.add("flying");

  butterfly.style.left = "0px";
  butterfly.style.top = "0px";
  
  let latestX = 0;
  let latestY = 0;

  function setButterflyPos(x, y){
    latestX = x;
    latestY = y;

    x += window.scrollX; // förändras på onscroll
    y += window.scrollY; // förändras på onscroll

    x -= butterfly.offsetWidth / 2;
    y -= butterfly.offsetHeight / 4;

    // Tyvärr kan vi inte flyga med .flying samtidigt 
    // som vi förflyttar oss med transform :(
    butterfly.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  document.onmousemove = function (mouseEvent){
    let x = mouseEvent.x; // förändras på onmousemove
    let y = mouseEvent.y; // förändras på onmousemove
    setButterflyPos(x,y);
  };
  document.onscroll = function (event){
    let x = latestX;
    let y = latestY;
    setButterflyPos(x,y);
  };
}
 












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
//skapa ett lokalt scope så att jag inte bråkar med
 //andra variabler definierat i tidigare uppgifter
{ 
  // CSS selector syntax
  let butterfly = document.querySelector("#q4 img");
  butterfly.classList.add("abs-pos");

  function flyga(e){
    //console.log(`Sido koordinater x:${e.clientX} y:${e.clientY}`);
    let x = window.scrollX + e.clientX;
    let y = window.scrollY + e.clientY;

    x -= butterfly.offsetWidth / 2;
    y -= butterfly.offsetHeight / 2;

    butterfly.style.left = x + "px";
    butterfly.style.top = y + "px";
    // gör så att fjärilen följer muspekaren
  }

  //börja/sluta flyga om vi klickar
  butterfly.onclick = function(){
     // om onmousemove inte är definierad
    if(!document.onmousemove){
      document.onmousemove = flyga;

    }else{
      document.onmousemove = undefined;
    }

    butterfly.classList.toggle("greyed-out");
  };
}
*/