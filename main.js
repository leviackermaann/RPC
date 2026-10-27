function getComputerChoice() {
  let random = Math.random();
  if (random >= 0 && random <= 0.3) {
    return "Rock";
  } else if (random > 0.3 && random <= 0.7) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getHumanChoice() {
  const choice = prompt("Enter your choice : Rock, Paper or Scissor");
  return choice
}
