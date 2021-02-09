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

  /* De fem magiska stegen för att använda XMLHttpRequest
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.responsType = "json";

  xhr.onload = function(){
    console.log(xhr.status + " " + xhr.statusText);
    aleconsole.logrt(JSON.stringify(xhr.response, null, " "));
  };

  xhr.send();
  */
  // HTTP respons koder
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

  // Alla möjliga events för XMLHttpRequest som man kan registrera
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget

  // progress objekt som skickas med som parameter
  // https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent
  /* 
  ________________________________________
  |            inför Fråga 3             |
  ---------------------------------------- 
  */
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
