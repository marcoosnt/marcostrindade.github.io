const button = document.querySelector("#button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector("#output");



button.addEventListener("click",function(){
  console.log("works");
  let rolls = [roll(6),roll(6)];
  let temp;
  console.log(rolls);
  if (rolls[0] == rolls[1]) {
   temp="Its a draw";
 }else if (rolls[0] > rolls[1]) {
   temp= "Player 1 Wins";
 }else if (rolls[0] < rolls[1]) {
   temp= "Player 2  Wins"
 }
 output.innerHTML = temp ;
 console.log(rolls);
 player1.innerHTML = rolls[0];
 player2.innerHTML = rolls[1];
})

function  roll(num){
  let rNumber = Math.floor(Math.random()*num) + 1;
  let n = 9855 + rNumber;
  let char = "&#"+n+";";
   return  "" + char;
}
