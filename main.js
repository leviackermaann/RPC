let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return "ROCK";
  } else if (random == 1) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice : Rock, Paper or Scissor");

  if (choice == null) return null;

  const finalChoice = choice.trim().toUpperCase();

  if (
    finalChoice == "ROCK" ||
    finalChoice == "PAPER" ||
    finalChoice == "SCISSOR"
  ) {
    return finalChoice;
  }

  console.log("Invalid Input");
  return null;
}

function playRound(humanChoice, computerChoice) {
  console.log("Computer's choice :", computerChoice);
  if (humanChoice == computerChoice) {
    console.log("This round is a tie");
  } else if (
    (humanChoice == "ROCK" && computerChoice == "SCISSOR") ||
    (humanChoice == "PAPER" && computerChoice == "ROCK") ||
    (humanChoice == "SCISSOR" && computerChoice == "PAPER")
  ) {
    humanScore = humanScore + 1;
    console.log("You win!");
  } else {
    computerScore = computerScore + 1;
    console.log("You lose, computer wins");
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    if (humanSelection == null) {
      i--;
      continue;
    }
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore == computerScore) {
    console.log("The game is a tie");
  } else if (humanScore > computerScore) {
    console.log("You win the game");
  } else {
    console.log("You lost the game");
  }
}

const startButton = document.querySelector("#start-game");

startButton.addEventListener("click", () => {
  playGame();
});
