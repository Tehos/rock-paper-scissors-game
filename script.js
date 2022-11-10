const choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
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
  return [playerScore, computerScore];
}

function countScore() {
  playerScoreEl.textContent = `Player score: ${playerScore}`;
  computerScoreEl.textContent = `Computer score: ${computerScore}`;
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(playRound(btn.textContent, getComputerChoice()));
    countScore();
  });
});
