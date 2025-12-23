/**  
 * Game Choices
*/
const choice = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/**
 * Add const what is stronger than what
 */

const beats = {
    rock : ['scissors', 'lizard'],
    paper : ['rock', 'spock'],
    scissors : ['paper', 'lizard'],
    lizard : ['spock', 'paper'],
    spock : ['scissors', 'rock']
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


let playerChoiceImage;
let computerChoiceImage;
let resultMessage;


/**
 * DOM Elements
 */
const controlButtons = document.querySelectorAll('.control');
const startButton = document.querySelector('.btn-start');
const restartButton = document.getElementById('restart-btn');

const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');

const roundDisplay = document.getElementById('round-display');
const tieScoreEl = document.getElementById('tie-score');

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

const choicesArea = document.getElementById('choices-area');
const chooseTitle = document.getElementById('choose-title');
/**
 * Functions
 */
function startGame() {
    gameActive = true;
    resultMessage.textContent = 'Make Your move!';

    choicesArea.style.display = 'flex';
  chooseTitle.style.display = 'block';

    enableChoiceButtons();
}

function restartGame() {
    round = 1;
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    gameActive = false;

 playerChoiceText.textContent = '';
  computerChoiceText.textContent = '';

     playerChoiceImage.src = 'assets/images/rock-paper-scissors-lizard-spock-clipart-lg.png';
     computerChoiceImage.src = 'assets/images/rock-paper-scissors-lizard-spock-clipart-lg.png';

  
    resultMessage.textContent = 'Game Restarted! Click Start to play again.';
    updateRoundInfo();
    updateScoreBoard();
    enableChoiceButtons();

    choicesArea.style.display = 'none';
  chooseTitle.style.display = 'none';
}

function updateRoundInfo() {
  roundDisplay.textContent = round;
}

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
    playerChoiceImage.alt = `Player chose ${playerChoice}`;
    computerChoiceImage.src = `assets/images/${computerChoice}.png`;
    computerChoiceImage.alt = `Computer chose ${computerChoice}`;

    playerChoiceText.textContent = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    computerChoiceText.textContent = computerChoice[0].toUpperCase() + computerChoice.slice(1);
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
function updateScoreBoard() { 
    playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  tieScoreEl.textContent = tieScore;
}

function enableChoiceButtons() {
    const buttons = document.querySelectorAll('.control');
    buttons.forEach(button => {
        button.disabled = !gameActive;
    });
}
/**
 * End Game
 */
function endGame() { 
    gameActive = false;
    enableChoiceButtons(false);
    if (playerScore > computerScore) {
        resultMessage.textContent = `Congratulations! You Won the Game!(${playerScore} - ${computerScore})`;
    } else if (computerScore > playerScore) {
        resultMessage.textContent = `Sorry! You Lost the Game, Computer Won (${playerScore} - ${computerScore})!`;
    } else {
        resultMessage.textContent = `The Game is a Tie! Well Played (${playerScore} - ${computerScore})!`;
    }
}

/**
 * Event Listeners
 */

playerChoiceImage = document.getElementById('player-image');
computerChoiceImage = document.getElementById('computer-image');
resultMessage = document.getElementById('result-message');

controlButtons.forEach (button => {
    button.addEventListener('click', () => {
    const choiceIndex = Number(button.dataset.choice);
    runGame(choiceIndex);
    });
});
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

restartGame();