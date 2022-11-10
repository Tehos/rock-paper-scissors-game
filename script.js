const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
};

// function insesitiveCase(string) {
//   return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
// }

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");

function playRound(playerSelection, computerSelection) {
  // playerSelection = insesitiveCase(playerSelection);
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

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(playRound(btn.textContent, getComputerChoice()));
    countScore();
  });
});

function countScore() {
  playerScoreEl.textContent = `Player score: ${playerScore}`;
  computerScoreEl.textContent = `Computer score: ${computerScore}`;
}

// const playerSelection = "Rock";
// const computerSelection = getComputerChoice();
// console.log(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (i = 0; i < 5; i++) {
//     let playerChoice = prompt("Choose Rock Paper Scissors.");
//     let computerChoice = getComputerChoice();
//     console.log(playerChoice, computerChoice);
//     if (playRound(playerChoice, computerChoice) == "win") {
//       playerScore = playerScore + 1;
//       console.log(`You won a round! ${playerChoice} beats ${computerChoice}`);
//     } else if (playRound(playerChoice, computerChoice) == "lose") {
//       computerScore = computerScore + 1;
//       console.log(`You lost a round! ${computerChoice} beats ${playerChoice}`);
//     } else {
//       console.log("It's a tie!");
//       i--;
//     }
//   }
//   if (playerScore > computerScore) {
//     console.log("You won the game!");
//   } else {
//     console.log("You lost the game!");
//   }
// };
