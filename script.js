const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
};

function insesitiveCase(string) {
  return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = insesitiveCase(playerSelection);
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "win";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "win";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "win";
  } else if (playerSelection == computerSelection) {
    return "tie";
  } else {
    return "lose";
  }
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(playRound(btn.textContent, getComputerChoice()));
  });
});

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
