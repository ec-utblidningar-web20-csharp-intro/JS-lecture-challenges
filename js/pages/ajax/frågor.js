"strict mode";
{
  /*
   [Fråga 1]
  */
  let url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.searchParams.append("q", "Varberg,Sweden");
  url.searchParams.append("appid", "ac5d516646126253361022bafa972296");
  url.searchParams.append("mode", "json");
  url.searchParams.append("units", "metric");
  url.searchParams.append("lang", "se");

  for (let [key, val] of url.searchParams) {
    console.log(`${key}:${val}`);
  }

  document.querySelector("#q1_out").innerText = url;
  /* 
   [Fråga 2]
  */
  {
    let out = document.querySelector("#q2_out");
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.responseType = "json";

    xhr.onload = function (e) {
      //'e.target' kommer här att peka på XMLHttpRequest objektet
      console.log(
        `Weather request status: ${e.target.status} ${e.target.statusText}`
      );

      if (e.target.status === 200) {
        // Begäran lyckades
        let jsObjekt = e.target.response;
        out.innerText = JSON.stringify(jsObjekt, null, " ");
      }
    };

    xhr.onerror = function (e) {
      console.log(url.origin + " could not be reached");
    };

    xhr.send();
  }
  /* 
   [Fråga 3]
  */
  (async function(){
    let out = document.querySelector("#q3_out");

    let response = await fetch(url);
    let object = await response.json();
    
    out.innerText = JSON.stringify(object, null, " ");
  })();
  /* 
   [Fråga 4]
  */
  {
    let ball = document.querySelector("#q4 .ball");
    ball.addEventListener("click", moveSequence, { once: true });

    function moveSequence(e) {
      ball.classList.add("not-clickable");
      ball.style.animation = "m1 1s 1";

      setTimeout(function () {
        ball.style.animation = "m2 1s 1";

        setTimeout(function () {
          ball.style.animation = "m3 1s 1";

          setTimeout(function () {
            ball.style.animation = "m4 1s 1";

            setTimeout(function () {
              ball.classList.remove("not-clickable");
              ball.addEventListener("click", moveSequence, { once: true });
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }
  /* 
   [Fråga 5]
  */
  {
    let ball = document.querySelector("#q5 .ball");
    ball.addEventListener("click", moveSequence, { once: true });

    async function moveSequence(e) {
      ball.classList.add("not-clickable");

      ball.style.animation = "m1 1s 1";
      await defer(1000);

      ball.style.animation = "m2 1s 1";
      await defer(1000);

      ball.style.animation = "m3 1s 1";
      await defer(1000);

      ball.style.animation = "m4 1s 1";
      await defer(1000);
      
      ball.classList.remove("not-clickable");
      ball.addEventListener("click", moveSequence, { once: true });
    }
    
    function defer(ms){
      return new Promise(function(resolve) {
        setTimeout(resolve, ms);
      });
    }
  }
  /* 
   [Fråga 6]
  */
}
