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

    playerImageSrc = 'assets/images/placeholder.png';
    computerImageSrc = 'assets/images/placeholder.png';

    enableChoiceButtons(false);
}

/**
 * Event Listeners
 */
document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('restart-button').addEventListener('click', restartGame);

/**
 * Main Game Logic
 */
 

function runGame(playerChoiceIndex) {
    if (!gameActive) {
        resultMessage.textContent = 'Please start the game first!';
        return;
    }

    if (round > maxRounds) {
        endGame();
        return;
    }
    const playerChoice = choice[playerChoiceIndex];
    const computerChoice = calculateCorrectAnswer ();

    displayChoice(playerChoice, computerChoice);

    const outcome = checkAnswer(playerChoice, computerChoice);
    displayRoundResult(outcome, playerChoice, computerChoice);

    updateScoreBoard();

    if (round >= maxRounds) {
        endGame();
    } else {
        round++;
        updateRoundInfo();
    }
}

/** 
 * Wins/Losses/Ties Logic
 */
function checkAnswer(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (beats[playerChoice] && beats[playerChoice].includes(computerChoice)) {
        return 'win';
    } else {
        return 'lose';
    }
}

function calculateCorrectAnswer () {
    const calculatedIndex = Math.floor(Math.random() * choice.length);
    return choice[calculatedIndex];
}

function incrementScore() { 
    playerScore++;
}

function incrementWrongAnswer() {
    computerScore++;
}

function incrementTie() {
    tieScore++;
}

/**
 * Display photos and results
 */
function displayChoice(playerChoice, computerChoice) { 
    playerChoiceImage.src = `assets/images/${playerChoice}.png`;
    computerChoiceImage.src = `assets/images/${computerChoice}.png`;
}   

function displayRoundResult(outcome) { 
    if (outcome === 'win') {
        resultMessage.textContent = 'Good job!You Win this Round!';
        incrementScore();
    } else if (outcome === 'lose') {
        resultMessage.textContent = 'You Lose this Round! Maybe Next time!';
        incrementWrongAnswer();
    } else {
        resultMessage.textContent = 'This Round is a Tie!';
        incrementTie();
    }   
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

