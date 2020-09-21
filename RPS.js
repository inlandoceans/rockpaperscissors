const rockButton = document.getElementById('btnRock');
const paperButton = document.getElementById('btnPaper');
const scissorsButton = document.getElementById('btnScissors');
const resetButton = document.getElementById('btnReset');


//Look at the buttons
rockButton.addEventListener('click', () => playRound('rock', computerPlay()));      
paperButton.addEventListener('click', () => playRound('paper', computerPlay())); 
scissorsButton.addEventListener('click', () => playRound('scissors', computerPlay())); 
resetButton.addEventListener('click', reset);

//Random pick from the computer
let options = ['rock', 'paper', 'scissors'];

function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
}

//Play a round

const result = document.querySelector('#result')

function playRound(playerSel, computerSel){
    if (playerSel != 'rock' && playerSel != 'paper' && playerSel != 'scissors'){
        result.textContent = 'Please enter rock, paper, or scissors!';
    }
    else if(playerSel == computerSel){
        const result = document.querySelector('#result')
        result.textContent = 'Same pick. A tie!';
    }
    else if ((playerSel == 'rock' && computerSel == 'paper')
    || (playerSel == 'paper' && computerSel == 'scissors')
    || (playerSel == 'scissors' && computerSel == 'rock'))
    {
        result.textContent = `You lose! ${playerSel} beats ${computerSel}!`;
        playerLoss();
    }
    else {
        result.textContent = `You win! ${playerSel} beats ${computerSel}!`;
        playerWin();
    }
}

// Keep score and update 

const score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function playerWin(){
    playerScore += 1;
    score.textContent = `The score is ${playerScore} - ${computerScore}.`;
    if ((playerScore + computerScore) === 5){
        if(playerScore > computerScore) {
            score.textContent = 'The game is done! You are the ultimate winner!';
        }
        }
    }



function playerLoss(){
    computerScore += 1;
    score.textContent = `The score is ${playerScore} - ${computerScore}.`;
    if ((playerScore + computerScore) === 5){
        if(playerScore < computerScore) {
            score.textContent = 'The game is done! You are the ultimate loser!';
        }
    }
}
score.textContent = `The score is ${playerScore} - ${computerScore}.`;

// Reset the game

function reset(){
    playerScore = 0;
    computerScore = 0;
    result.textContent = '';
    score.textContent = `The score is ${playerScore} - ${computerScore}.`;
}