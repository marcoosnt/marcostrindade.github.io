const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let winner =  [0,0];
console.log(buttons);

 for (var i = 0; i <  buttons.length; i++) {
   buttons[i].addEventListener("click",playGame);
 }


 function playGame(e){
   let playerSelection = e.target.innerText;
   console.log(e.target.innerText);
   let computerSelection = Math.random();
   console.log(computerSelection)
   if (computerSelection < 0.34) {
    computerSelection = "Rock";
  }else if (computerSelection <= 0.67) {
    computerSelection = "Paper";
  } else {
    computerSelection = " Scissor";
  }
   console.log(computerSelection,playerSelection);
   let result = checkWinner(playerSelection,computerSelection);
   console.log (result);

    if (result == "Player") {
       result += "wins!" ;
       winner[0]++;
    } else if(result == "Computer") {
      result += "wins!";
      winner[1]++;
    }else{
      result += "results tie in a match";
    }
  score.innerHTML = "Player 1: ["+winner[0]+"]  Machine:["+winner[1]+"]";
  messager(playerSelection+"vs"+computerSelection+"<br><br><b>"+result+"</b>");
 }

    function messager(mess){
    message.innerHTML=(mess);
    }

 function checkWinner(playerSelection,computerSelection){
      if (playerSelection === computerSelection) {
        return "draw";
      }

      if (playerSelection === "Rock") {
         if(computerSelection === "Paper"){
           return "Computer";
         }else {
           return "Player ";
         }
      }


      if (playerSelection === "Paper") {
         if(computerSelection === "Scissor"){
           return "Computer";
         }else {
           return "Player";
         }
      }

      if (playerSelection === "Scissor") {
         if(computerSelection === "Rock"){
           return "Computer";
         }else {
           return "Player";
         }
      }


 }
