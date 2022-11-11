let playerScore = 0,
  computerScore = 0,
  rounds = 0,
  playerData = document.querySelector('.score'),
  currentRound = document.querySelector('.round'),
  actions = document.querySelector('.results'),
  result = '',
  maxRounds = 5;

playerData.innerText = '';
currentRound.innerText = '';
actions.innerText = '';

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let playerSelection = e.target.innerText
    game(playerSelection);
  })
})

function getComputerChoice() {
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

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
    playerScore++;
    playerData.innerText = 'Player score: ' + playerScore + ' | ' + 'Computer score: ' + computerScore;
    currentRound.innerText = 'Round ' + rounds
    result = ("Player won! Rock beats scissors" + "\n\n"); 
    actions.innerText += '' + result
  }
  else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
    playerScore++;
    playerData.innerText = 'Player score: ' + playerScore + ' | ' + 'Computer score: ' + computerScore;
    currentRound.innerText = 'Round ' + rounds
    result = ("Player won! Paper beats rock" + "\n\n");
    actions.innerText += '' + result
  }
  else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
    playerScore++;
    playerData.innerText = 'Player score: ' + playerScore + ' | ' + 'Computer score: ' + computerScore;
    currentRound.innerText = 'Round ' + rounds
    result = ("Player won! Scissors beats rock" + "\n\n");
    actions.innerText += '' + result
  }
  else if (playerSelection === computerSelection) {
    currentRound.innerText = 'Round ' + rounds
    result = ("It's a tie!" + "\n\n")
    actions.innerText += '' + result
  }
  else if ((playerSelection === "Restart") && (rounds > 0)) {
    location.reload();
  }
  else {
    computerScore++;
    currentRound.innerText = 'Round ' + rounds
    playerData.innerText = 'Player score: ' + playerScore + ' | ' + 'Computer score: ' + computerScore;
    result = `Player lost! ${computerSelection} beats ${playerSelection}` + "\n\n";
    actions.innerText += '' + result
  }
}

function game(playerSelection) {
  rounds += 1;
  if (rounds < maxRounds) {
    console.log(playRound(playerSelection, getComputerChoice()));
    console.log(`Player: ${playerScore} | CPU: ${computerScore}`);
  }
  else if ((playerSelection === "Restart") && (rounds > 0)) {
    location.reload();
  }  
  else if (rounds == maxRounds) {
    console.log(playRound(playerSelection, getComputerChoice()));
    return results();
  }
  else {
    console.log("Game completed, please refresh to restart!");
  }
}

function results() {
if (playerScore > computerScore) { 
  console.log("Player wins the game!")
  result = ("Player wins the game!")
  actions.innerText += '' + result
}
else if (playerScore < computerScore) {
  console.log("CPU wins the game!")
  result = ("CPU wins the game!")
  actions.innerText += '' + result
}
else {
  console.log("The game is tied!")
  result = ("The game is tied!")
  actions.innerText += '' + result
}
}

playerData.innerText = 'Player score: ' + playerScore + ' | ' + 'Computer score: ' + computerScore;
currentRound.innerText = 'Round ' + rounds