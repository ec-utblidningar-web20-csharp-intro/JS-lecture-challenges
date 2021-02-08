"strict mode";

/*
 [Fråga 1]
 */
// ------------test kod-----------------
let teacher = {
  namn: "Björn",
  yrke: "Lärare",
  gift: true,
  ålder: 28,

  kunskap: { javascript: true, csharp: true, java: false },
  familjemedlemmar: ["Honoka", "Candie"],

  titel: function () {
    return `${this.yrke} ${this.name}`;
  },
};
// -------------------------------------

/* 
 [Fråga 2]
*/
// ------------test kod-----------------
let testElement = document.createElement("a");

function logEvent(e) {
  console.log(e.type);
}

testElement.onclose = logEvent;
testElement.onmousedown = logEvent;
testElement.onscroll = logEvent;
testElement.onplay = logEvent;

document.oncopy = logEvent;
// -------------------------------------


/* 
 [Fråga 3]
*/