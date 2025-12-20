/**  
 * Game Choices
*/
const choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/**
 * Add const what is stronger than what
 */

const beats = {
    Rock : ['Scissors', 'Lizard'],
    Paper : ['Rock', 'Spock'],
    Scissors : ['Paper', 'Lizard'],
    Lizard : ['Spock', 'Paper'],
    Spock : ['Scissors', 'Rock']
};
/**
 * Game Variables
 */
let round = 1;
let maxRounds = 5;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let gameActive = false;

/**
 * Functions
 */
function startGame() {
    gameActive = true;
    resultMessage.textContent = 'Game Started! Make your choice.';
    enableChoiceButtons(true);
}

function restartGame() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    gameActive = false;
    playerChoiceImage.src = '';
    computerChoiceImage.src = '';
    roundInfo.textContent = '';
    scoreInfo.textContent = '';
    resultMessage.textContent = 'Game Restarted! Click Start to play again.';
    updateRoundInfo();
    updateScoreBoard();
}

/**
 * Event Listeners
 */
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer () {

}

function incrementScore() { 

}

function incrementWrongAnswer() {

}

function incrementTie() {

}
/**
 * Display photos and results
 */
function displayChoice() {

}

function displayRoundResult() { 

}

function updateRoundInfo () {
 
}

function enableChoiceButtons() {

}
/**
 * End Game
 */
function endGame() { 
}

