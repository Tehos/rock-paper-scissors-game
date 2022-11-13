// VARIABLES
const choices = ["Rock", "Paper", "Scissors"];
let choice = "";
let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const btns = document.querySelectorAll("a");
const rockClass = rockBtn.getAttribute("class");
const paperClass = paperBtn.getAttribute("class");
const scissorsClass = scissorsBtn.getAttribute("class");
const hiddenBtn = document.querySelector(".hide");
const resetBtn = document.querySelector(".reset");
const audioEl = document.querySelector("audio");
const music = document.querySelector(".music");

// GAME FUNCTIONS
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function countScore() {
  playerScoreEl.textContent = `Player score: ${playerScore}`;
  computerScoreEl.textContent = `Computer score: ${computerScore}`;
}

function playRound() {
  let playerSelection = choice;
  let computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    result.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    result.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;
    result.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
  } else if (playerSelection == computerSelection) {
    result.textContent = `It's a tie!`;
  } else {
    computerScore++;
    result.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
  }
  countScore();
}

function checkWinner() {
  if (playerScore === 5) {
    result.textContent = "You WON the game!";
  } else if (computerScore === 5) {
    result.textContent = "You LOST the game!";
  }
}

function runGame() {
  if (playerScore < 5 && computerScore < 5) {
    playRound();
  }
}

function capitalizeFirstChar(string) {
  return string[0].toUpperCase() + string.substring(1);
}

// GAME BUTTON FUNCTIONALITY
rockBtn.addEventListener("click", function handler() {
  if (playerScore === 5 || computerScore === 5) {
    this.removeEventListener("click", handler);
  }
  choice = capitalizeFirstChar(rockClass);
  runGame();
  checkWinner();
});

paperBtn.addEventListener("click", function handler() {
  if (playerScore === 5 || computerScore === 5) {
    this.removeEventListener("click", handler);
  }
  choice = capitalizeFirstChar(paperClass);
  runGame();
  checkWinner();
});

scissorsBtn.addEventListener("click", function handler() {
  if (playerScore === 5 || computerScore === 5) {
    this.removeEventListener("click", handler);
  }
  choice = capitalizeFirstChar(scissorsClass);
  runGame();
  checkWinner();
});
resetBtn.addEventListener("click", function () {
  choice = "";
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = "Player score: 0";
  computerScoreEl.textContent = "Computer score: 0";
  result.textContent = "Choose your form!";
});
// GAME STYLE AND EFFECTS

// rockBtn.addEventListener("mouseover", function () {
//   rockBtn.setAttribute("style" );
// });

console.log(audioEl.canPlayType("audio/mpeg"));
console.log(audioEl.canPlayType("audio/ogg"));

music.addEventListener("click", function playMusic() {
  if (audioEl.paused) {
    audioEl.play();
    music.classList.toggle("mute");
  } else {
    audioEl.pause();
    music.classList.toggle("mute");
  }
});

audioEl.addEventListener("ended", () => {
  music.classList.toggle("mute");
});
