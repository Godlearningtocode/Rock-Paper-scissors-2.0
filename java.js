let playerScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice(choice) {
    const randomChoice = Math.floor(Math.random() * choice.length);
    const item = choice[randomChoice];
    return item;
}

const choice = ['rock','paper','scissor'];
const computerSelection = getComputerChoice(choice);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Draw."
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return playerWinRound;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return playerWinRound;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return playerWinRound;
    } else {
        return computerWinRound;
    }
}

let playerWinRound = "Player win's this round!";
let computerWinRound = "Computer win's this round!";
let playerWin = "Congratulations! You have won the game."
let computerWin = "Computer win's the game."

for (i=0; i<1000; i++) {
    const playerSelection = prompt('What is your choice going to be?').toLowerCase();
    const computerSelection = getComputerChoice(choice);
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    gameScore(result);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}

function gameScore(result) {
    if (result === playerWinRound) {
        playerScore++;
    } else if (result === computerWinRound) {
        computerScore++;
    } else {
        draw++; 
    }

    if (playerScore === 5) {
        console.log(playerWin);
        return;
    }

    if (computerScore === 5) {
        console.log(computerWin);
        return; 
    }
}