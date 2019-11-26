let result = 0;
let playerResult = 0;
let computerResult = 0;
let playerResult_span=document.getElementById("playerResult");
let computerResult_span=document.getElementById("computerResult");
let resultBoard_div=document.querySelector(".resultBoard");
let text_result_p=document.querySelector(".text_result > p")
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
let playerSelection = ["rock", "paper", "scissors"];
rock.addEventListener("click", playGameRock);
paper.addEventListener("click", playGamePaper);
scissors.addEventListener("click", playGameScissors);


function getComputerSelection() {
    let computerSelection = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3 );
    return computerSelection[randomNumber];
}

function getCapitalLetter(word) {
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
}

let computerSelection = getComputerSelection();

function playGameRock(){
    playRound("rock", getComputerSelection());
    checkWinner();
  }
function playGamePaper(){
   playRound("paper", getComputerSelection());
  checkWinner();
  }
function playGameScissors(){
   playRound("scissors", getComputerSelection());
    checkWinner();
  }
  function win(playerSelection, computerSelection) {
      playerResult++;
      playerResult_span.innerHTML=playerResult;
      computerResult_span.innerHTML=computerResult;
      text_result_p.innerHTML=getCapitalLetter(playerSelection) + " beats " + getCapitalLetter(computerSelection) + ". You win!";
      document.getElementById(playerSelection).classList.add('winning_green');
      setTimeout(function() {document.getElementById(playerSelection).classList.remove('winning_green') },500);
  }

  function lose(playerSelection, computerSelection) {
    computerResult++;
    playerResult_span.innerHTML=playerResult;
    computerResult_span.innerHTML=computerResult;
    text_result_p.innerHTML = getCapitalLetter(playerSelection) + " loses " + getCapitalLetter(computerSelection) + ". You lose!";
    document.getElementById(playerSelection).classList.add('losing_red');
    setTimeout(function() {document.getElementById(playerSelection).classList.remove('losing_red') }, 500);
}

function draw(playerSelection, computerSelection) {
    playerResult_span.innerHTML=playerResult;
    computerResult_span.innerHTML=computerResult;
    text_result_p.innerHTML = getCapitalLetter(playerSelection) + " equals to " + getCapitalLetter(computerSelection) + ". It's a draw!";
    document.getElementById(playerSelection).classList.add('draw_grey');
    setTimeout(function(){document.getElementById(playerSelection).classList.remove('draw_grey') }, 500);
}
  function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerSelection();
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                draw(playerSelection, computerSelection);
                break;
                case "paper":
                lose(playerSelection, computerSelection);
                break;
                case "scissors": 
                win(playerSelection, computerSelection);
                break;
            }
        break;
        case "paper":
            switch(computerSelection){
                case "rock":
                win(playerSelection, computerSelection);                  
                break;
                case "paper":
                draw(playerSelection, computerSelection);
                break;
                case "scissors":
                lose(playerSelection, computerSelection);
                break;
            }
        break;
        case "scissors":
            switch(computerSelection){
                case "rock":
                lose(playerSelection, computerSelection);
                break;
                case "paper":
                win(playerSelection, computerSelection);           
                break;
                case "scissors":
                draw(playerSelection, computerSelection);
                break;
            }
        break;
    }
}
    
function checkWinner() {
  if (playerResult==5 || computerResult==5 ){
      
    console.log("Game over!");
    console.log({playerResult});
    console.log({computerResult});
    rock.removeEventListener("click", playGameRock);
    paper.removeEventListener("click", playGamePaper);
    scissors.removeEventListener("click",playGameScissors);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}
}

function refresh_page() {
    window.location.reload();
}

