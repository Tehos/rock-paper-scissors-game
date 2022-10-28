let computerChoice = "";
let playerChoice = "";
const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
};
