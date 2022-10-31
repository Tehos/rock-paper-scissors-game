const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
};

const insesitiveCase = function (string) {
  firstLetterCapitalized =
    string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
  return firstLetterCapitalized;
};

function playRound(playerSelection, computerSelection) {
  playerSelection = insesitiveCase(playerSelection);
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    return `It's a tie!`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
