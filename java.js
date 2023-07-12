function getComputerChoice(choice) {
    const randomChoice = Math.floor(Math.random() * choice.length);
    const item = choice[randomChoice];
    return item;
}

const choice = ['rock','paper','scissor'];

const playerSelection = prompt('What is your choice going to be?').toLowerCase();
const computerSelection = getComputerChoice(choice);

function game() {
    for (let i = 0; i<5; i++) {
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === 'rock' && computerSelection === 'rock') {
                return 'It is a draw'
            } else if (playerSelection === 'rock' && computerSelection === 'paper') {
                return 'You lose'
            } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
                return 'You win!'
            } else if (playerSelection === 'paper' && computerSelection === 'rock'){
                return 'You win!'
            } else if (playerSelection === 'paper' && computerSelection === 'paper') {
                return 'It is a draw'
            } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
                return 'You lose.'
            } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
                return 'You lose.'
            } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
                return 'You win!'
            } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
                return 'It is a draw'
            } else {
                return 'Invalid choice'
            }
        }
    } 
    console.log(playRound(playerSelection, computerSelection))
}

game();