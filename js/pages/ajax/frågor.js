"strict mode";
{
  /*
   [Fråga 1]
  */
  let outputElement = document.querySelector("#q1_out");

  function getCityWeatherUrl(cityName) {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");

    url.searchParams.append("q", cityName);
    url.searchParams.append("appid", "ac5d516646126253361022bafa972296");
    url.searchParams.append("mode", "json");
    url.searchParams.append("units", "metric");
    url.searchParams.append("lang", "se");

    outputElement.innerText = url;

    return url;
  }

  const url = getCityWeatherUrl("Göteborg");
  window.url = url;

  /* 
   [Fråga 2]
  */
  function getCityWeatherInfo(cityName, useObject) {
    const url = getCityWeatherUrl(cityName);

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.responsType = "json";

    xhr.onload = function () {
      console.log(xhr.status + " " + xhr.statusText);
      console.log(xhr.response);

      let obj = JSON.parse(xhr.response);

      let essentials = {
        city: obj.name,
        time: obj.dt,
        weather: obj.weather[0].main,
      };

      useObject(essentials);
    };

    xhr.send();
  }

  outputElement = document.querySelector("#q2_out");

  getCityWeatherInfo("Göteborg", function (info) {
    // instruktioner för när jag har fått informationen
    outputElement.innerText = info.city;
  });

  /* 
   [Fråga 3]
  */
  (async function () {
    // stoppa in await anrop här inne
  })();

  /* 
   [Fråga 4]

      nyttja move-down, move-right, move-up, move-left CSS klasserna
      såsom nedan:
        ball.style.animation = "move-down 1s 1";

      classList.add/remove("not-clickable");
      för att visa när bollen går att klicka på eller ej
  */

  /* 
   [Fråga 5]
  */

  function defer(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  /* 
   [Fråga 6]
  */
  {
    let balls = document.querySelectorAll("#q6 .ball");
    for (let ball of balls) {
      ball.addEventListener("click", moveSequence);
    }

    async function moveSequence(e) {
      for (let ball of balls) {
        ball.classList.add("not-clickable");
        ball.removeEventListener("click", moveSequence);
      }

      // Börja alla async operationer här via 'moveBallAndWait'
      // ge lite olika tider för att testa effekten

      // Använd Promise.all() för att await:a att alla ska exekvera färdigt

      for (let ball of balls) {
        ball.classList.remove("not-clickable");
        ball.style.animation = "";
        ball.addEventListener("click", moveSequence);
      }
    }

    async function moveBallAndWait(ball, s) {
      ball.style.animation = `lat-move ${s}s 1`;
      await defer(s * 1000);
    }
  }
}
