const coinArray = ["Heads","Tails"]; // criou array com  bolinha x
let score = [0,0]; // pontuação
const message = document.querySelector(".message"); // capturou mensagem
const buttons = document.querySelectorAll("button"); // capturou valor dos clicks
console.log(buttons); // imprimiu os clicks

for (var i = 0; i < buttons.length; i++) { // contador de jogadas
  console.log(buttons[i]);
  buttons[i].addEventListener("click",tossCoin); // repassou o click para o botão
}

function tossCoin(e) {

  let playerGuess = e.target.innerText; // recebeu valor do player
  let computerToss = Math.floor(Math.random()*2); // criou valor aleatório pc
  let computerGuess  = coinArray[computerToss] // recebeu aposta pc
  message.innerHTML = "Computer Selected :"+computerGuess;
  let output;
   if (playerGuess === computerGuess){
        // win // comparou as duas jogadas
        output = " Player wins";
        score [0] ++ ;// recebeu um pontuação


   }else {
       output = " Computer wins";
       score [1] ++ ;// computador recebeu pontuação
      // lost
   }
   message.innerHTML = output+"<br> Player: " + score[0] + "Computer: "+ score[1];

}
