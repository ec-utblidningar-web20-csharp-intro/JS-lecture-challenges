"strict mode";
{
  /* 
  ________________________________________
  |            inför Fråga 1             |
  ---------------------------------------- 
  */

  function belysFjäril(e) {
    let butterfly = e.currentTarget;
    butterfly.classList.remove("greyed-out");
  }
  //belysFjäril();

  let hej = 5;
  let obj = { namn: "björn", yrke: "lärare" };
  let ref = obj;

  let func = belysFjäril;
  //func();

  let butterfly = document.querySelector("#q1 .butterfly");
  butterfly.onmouseenter = belysFjäril;
  //butterfly.onmouseenter();

  butterfly.addEventListener("mouseenter", belysFjäril);

  /*
  ________________________________________
  |            inför Fråga 2             |
  ---------------------------------------- 
  */
  {
    let butterfly = document.querySelector("#q2 img");

    function toggleColor(e) {
      let butterfly = e.currentTarget;
      butterfly.classList.toggle("greyed-out");
    }

    butterfly.onmouseenter = toggleColor;
    butterfly.onmouseleave = toggleColor;

    let calc = 5 + 2;
  }

  /* 
  ________________________________________
  |            inför Fråga 3             |
  ---------------------------------------- 
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

  function skrik(e) {
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
}
