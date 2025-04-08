function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let computerChoice;
  if (random === 0) {
    return (computerChoice = "Rock");
  } else if (random === 1) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissors");
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock,Paper or Scissors?");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let roundHumanChoice = humanChoice.toLowerCase();
  let roundComputerChoice = computerChoice.toLowerCase();

  console.log(`You chose: ${roundHumanChoice}`);
  console.log(" ");
  console.log(`Computer chose: ${roundComputerChoice}`);
  console.log(" ");

  if (roundHumanChoice === roundComputerChoice) {
    return "It's a tie";
  }
  if (
    (roundHumanChoice === "rock" && roundComputerChoice === "scissors") ||
    (roundHumanChoice === "scissors" && roundComputerChoice === "paper") ||
    (roundHumanChoice === "paper" && roundComputerChoice === "rock")
  ) {
    console.log(
      `You win! ${
        roundHumanChoice.charAt(0).toUpperCase() + roundHumanChoice.slice(1)
      } beats ${roundComputerChoice}`
    );
    return 1;
  } else {
    console.log(
      `You lose! ${
        roundComputerChoice.charAt(0).toUpperCase() +
        roundComputerChoice.slice(1)
      } beats ${roundHumanChoice}`
    );
    return 2;
  }
}

let humanScore = 0;
let computerScore = 0;
function playgame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);
    if (result === 1) {
      humanScore++;
    } else if (result === 2) {
      computerScore++;
    }
    console.log("HumanScore:", humanScore);
    console.log("ComputerScore:", computerScore);
    console.log(" ");
    console.log(" ");
  }
  console.log(
    "ComputerScore:" + computerScore + " " + "HumanScore:" + humanScore
  );
}
playgame();
