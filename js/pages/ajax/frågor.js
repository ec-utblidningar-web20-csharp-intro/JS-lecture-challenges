"strict mode";
{
  /*
   [Fråga 1]
  */

  /* 
   [Fråga 2]
  */

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
    for(let ball of balls){
      ball.addEventListener("click", moveSequence);
    }
    
    
    async function moveSequence(e) {
      for(let ball of balls){
        ball.classList.add("not-clickable");
        ball.removeEventListener("click", moveSequence);
      }

      // Börja alla async operationer här via 'moveBallAndWait'
      // ge lite olika tider för att testa effekten

      // Använd Promise.all() för att await:a att alla ska exekvera färdigt

      for(let ball of balls){
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
