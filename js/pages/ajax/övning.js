"strict mode";
{
  /* 
  ________________________________________
  |            inför Fråga 1  (URL)      |
  ---------------------------------------- 
  */
  // href -- hela adressen

  // origin -- allt om metod(protokoll) & 
  //           vart adressen gäller(hostname, port)

  // host -- hostname + port
  // hostname -- domän/website namn eller ip-adress (ipv4,ipv6)
  // port -- sifferkod för vilken _app_ på en server/PC du pratar med

  // protocol -- vad är det vi håller på med 
  //  (hämta hypertext? HTTP, hämta fil online? FTP, hämta fil lokalt? file)

  // pathname -- vart, i en fil&folder struktur ligger X
  // search -- parametrar till en WebAPI metod
  // hash -- fragment (en bit av) det du söker. Element id i html doc
  
  // Börja leka med googles search api
  // https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters
  function objProp2SearchParam(url, obj){
    for(const key in obj){
      url.searchParams.append(key, obj[key]);
    }
  }
  
  const url = new URL("https://google.com/search");
  
  const mySearch = {
    q: "bilar",
    num: 2,
  };
  
  objProp2SearchParam(url, mySearch);

  // loopa igenom parametrar
  let props = url.searchParams.entries();

  for(const [k, v] of props){
    console.log(k + ": " + v);
  }
  /*
  ________________________________________
  |            inför Fråga 2             |
  ---------------------------------------- 
  */
  // AJAX
  // AJAX = Asynchronous JavaScript And XML.
  // AJAX -- vi pratar med webservrar och det kan ta tid

  // Asynkron vs Synkron kod
  // asynkron = hoppa i tid
  // synkron = allt händer i rakt tidsflöde

  // De fem magiska stegen för att använda XMLHttpRequest
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.responsType = "json";

  xhr.onload = function(){
    //console.log(xhr.status + " " + xhr.statusText);
    //console.log(xhr.response);
  };

  xhr.send();

  // HTTP respons koder
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  // Alla möjliga events för XMLHttpRequest som man kan registrera
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget

  /* 
    pseudo-kod för inlämningsuppgift 2
    
    searchButton.onclick = function(){
      const cityName = document.getElementById("search-bar").value;
      const weatherUrl = getCityWeatherUrl(cityName);
      
      const info = getWeatherInfoObject(weatherUrl);
      
      document.querySelector(".title").innerText = info.weather[0].main;
    }
  */

  /* 
  ________________________________________
  |            inför Fråga 3             |
  ---------------------------------------- 
  */

  // async framför 'function' nyckelordet betyder
  // att denna funktion kan komma att göra tidshopp

  let button = document.querySelector("#q3_btn");
  let outputElement = document.querySelector("#q3_out");

  // utan callbacks
  button.onclick = async function() {
    // Från här(1)
    const url = getCityWeatherUrl("Halmstad");

    // Till här(1) reagerar vi på att användaren klickade på knappen
    const serverResponse = await fetch(url); // vänta länge på ett svar, kanske 1-2 sek
    // Från här(2)
    // Till här(2) reagerar vi på att servern svarade
    const info = await serverResponse.json(); // gör om svaret till ett JS objekt
    // Från här(3)

    outputElement.innerText = info.name;
    // Till här(3) reagerar vi på att svars objektet skapades
  }

  // med callbacks
  button.onclick = function() {
    // Från här(1)
    const url = getCityWeatherUrl("Halmstad");

    let promise = fetch(url);
    promise.then(function (serverResponse){
      // Från här(2)
      let promise = serverResponse.json();
      promise.then(function (info){
        // Från här(3)
        outputElement.innerText = info.weather[0].main;
        // Till här(3) reagerar vi på att svars objektet skapades
        console.log("end of object creation reaction");
      });
      // Till här(2) reagerar vi på att servern svarade
      console.log("end of server response reaction");
    });
    // Till här(1) reagerar vi på att användaren klickade på knappen
    console.log("end of button reaction");
  }
  
  // med callbacks 2.0
  button.onclick = function() {
    // Från här(1)
    const url = getCityWeatherUrl("Halmstad");

    fetch(url)
      .then(function (serverResponse){
        // Från här(2)
        console.log("end of server response reaction");
        return serverResponse.json();
        // Till här(2) reagerar vi på att servern svarade
      })
      .then(function (info){
        // Från här(3)
        outputElement.innerText = info.weather[0].main;
        // Till här(3) reagerar vi på att svars objektet skapades
        console.log("end of object creation reaction");
      });
    // Till här(1) reagerar vi på att användaren klickade på knappen
    console.log("end of button reaction");
  }

  /* 
  ________________________________________
  |            inför Fråga 4             |
  ---------------------------------------- 
  */
  /* 
  ________________________________________
  |            inför Fråga 5             |
  ---------------------------------------- 
  */
  /* 
  ________________________________________
  |            inför Fråga 6             |
  ---------------------------------------- 
  */
}
