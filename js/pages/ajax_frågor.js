"strict mode";
{
  /*
   [Fråga 1]
  */
  let url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.searchParams.set("q", "Varberg,Sweden");
  url.searchParams.set("appid", "din_hashkod_här");
  url.searchParams.set("mode", "html");
  url.searchParams.set("units", "metric");
  url.searchParams.set("lang", "se");

  for(let [key, val] in url.searchParams){
    console.log(`${key}:${val}`);
  }

  document.querySelector("#q1_out").innerText = url;
  /* 
   [Fråga 2]
  */

  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();

  xhr.onload(function(){

  });
  /* 
   [Fråga 3]
  */
}
