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
const btns = document.querySelectorAll("button");

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
function checkGame() {
  if (playerScore === 5 || computerScore === 5) {
    this.removeEventListener("click", handler);
  }
}

function checkWinner() {
  if (playerScore === 5) {
    result.textContent = "You WON the game!";
  } else if (computerScore === 5) {
    result.textContent = "You LOST the game!";
  }
}

rockBtn.addEventListener("click", function handler() {
  checkGame();
  choice = rockBtn.textContent;
  if (playerScore < 5 && computerScore < 5) {
    playRound();
  }
  checkWinner();
});
paperBtn.addEventListener("click", function handler() {
  checkGame();

  choice = paperBtn.textContent;
  if (playerScore < 5 && computerScore < 5) {
    playRound();
  }
  checkWinner();
});
scissorsBtn.addEventListener("click", function handler() {
  checkGame();
  choice = scissorsBtn.textContent;
  if (playerScore < 5 && computerScore < 5) {
    playRound();
  }
  checkWinner();
});

// const btns = document.querySelectorAll("button");
// btns.forEach((btn) => {
//   btn.addEventListener("click", function handler() {
//     playerChoice = btn.textContent;
//     computerChoice = getComputerChoice();
//     console.log(playRound(playerChoice, computerChoice));
//     console.log(countScore());
//     if (playerScore >= 5 || computerScore >= 5) {
//       this.removeEventListener("click", handler);
//     }
//   });
// });
