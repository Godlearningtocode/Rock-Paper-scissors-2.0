let playerScore = 0;
let computerScore = 0;
let draw = 0;
const choice = ['rock','paper','scissor'];

let playerWinRound = "Player win's this round!";
let computerWinRound = "Computer win's this round!";
let playerWin = "Congratulations! You have won the game."
let computerWin = "Computer win's the game."

//adding UI below
const selectionButtons = document.querySelectorAll('[data-selection]'); 

//funciton to play the round and decide winner of round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return divPlayerWin.textContent = "It's a Draw.";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return divPlayerWin.textContent = playerWinRound;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return divPlayerWin.textContent = playerWinRound;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return divPlayerWin.textContent = playerWinRound;
    } else {
        return divPlayerWin.textContent = computerWinRound;
    }
}

/*for (i=0; i<1000; i++) {
    selectionButtons.forEach(selectionButtons => {
        selectionButtons.addEventListener('click', e => {
            const selectionName = selectionButtons.dataset.selection;
            let playerSelection = selectionName; console.log(playerSelection);
            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            gameScore(result);
            console.log("Your score is " + playerScore);
            console.log("The computer's score is " + computerScore);
            playerTally.textContent = ("Your score is " + playerScore);
            computerTally.textContent = ("The computer's score is " + computerScore);
        })
    })

    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}*/

//function to keep score
function gameScore(result) {
    if (result === playerWinRound) {
        playerScore++;
    } else if (result === computerWinRound) {
        computerScore++;
    } else {
        draw++; 
    }
}

//random computer choice


// calling out data of button 
selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection;
        const computerSelection = getComputerChoice(choice);
        function getComputerChoice(choice) {
            const randomChoice = Math.floor(Math.random() * choice.length);
            const item = choice[randomChoice];
            return item;
        }
        let playerSelection = selectionName; console.log(playerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        gameScore(result);
        console.log("Your score is " + playerScore);
        console.log("The computer's score is " + computerScore);
        playerTally.textContent = ("Your score is " + playerScore);
        computerTally.textContent = ("The computer's score is " + computerScore);
        if (playerScore === 5) {
            winner.textContent = "Congratulations, you win!";
        } else if (computerScore === 5) {
            winner.textContent = "Computer wins. Better luck next time!"
        }
    })
})

// adding div for displaying result
const divResult = document.querySelector('.divResult');
const divPlayerWin = document.createElement('div');
divPlayerWin.classList.add('divPlayerWin');
const playerTally = document.createElement('div');
playerTally.classList.add('playerScore'); 
const computerTally = document.createElement('div');
computerTally.classList.add('computerScore');
const winner = document.createElement('div');
winner.classList.add('winner');
const reset = document.createElement('button');
reset.classList.add('reset');
reset.textContent = "Reset";
reset.addEventListener('click', () => {
    window.location.reload();
})

divResult.append(divPlayerWin, playerTally, computerTally, winner, reset);