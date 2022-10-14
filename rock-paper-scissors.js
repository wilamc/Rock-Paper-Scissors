function getComputerChoice() { //Randomly return rock, paper, or scissors
  let computerSelection = Math.floor(Math.random() * 3)
  if (computerSelection === 0) {
    return "Rock";
  }
  else if (computerSelection === 1) {
    return "Paper";
  }
  else if (computerSelection === 2) {
    return "Scissors";
  }
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) { //plays a single round and returns a winner
  if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
    playerScore++;
    return `You won! Rock beats scissors`; 
  }
  else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
    playerScore++;
    return `You won! Paper beats rock`;
  }
  else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
    playerScore++;
    return `You won! Scissors beats rock`;
  }
  else if (playerSelection === computerSelection) {
    return "It's a tie!"
  }
  else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function verify(playerSelection) { // verify if the players selection is a valid option
  if ((playerSelection !== "Rock") && (playerSelection !== "Paper") && (playerSelection !== "Scissors")) {
    return 'Please enter a valid response ("rock, "paper", or "scissors")';
  }
  else {
      return playRound(playerSelection, getComputerChoice());
  }

}

function game() {
  for (i = 0; i < 5; i++) { // look a prompt that then proceeds to a game 5 times
    let playerSelection = prompt("Please choose rock, paper, or scissors:");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1,69);
    console.log(verify(playerSelection));
    console.log(`Player: ${playerScore} | CPU: ${computerScore}`)
  }
}

console.log(game())

if (playerScore > computerScore) { // display winner/loser/tied
  console.log("You win the game!")
}
else if (playerScore < computerScore) {
  console.log("You lose the game!")
}
else {
  console.log("The game is tied!")
}