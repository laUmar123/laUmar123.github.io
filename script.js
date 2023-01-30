'use strict';

// Variables
let computerLives = 5;
let userLives = 5;
let round = 0;

// Selectors
const loreAndRulesButtons = document.querySelectorAll('.lore-rules-buttons');
const userRockButton = document.getElementById('rock-hero');
const userPaperButton = document.querySelector('.button-shield-hero');
const userScissorButton = document.querySelector('.button-sword-hero');
const computerRockButton = document.querySelector('.button-rock-enemy');
const computerPaperButton = document.querySelector('.button-shield-enemy');
const computerScissorButton = document.querySelector('.button-sword-enemy');
const userLivesText = document.querySelector('.user-lives');
const computerLivesText = document.querySelector('.computer-lives');
const roundText = document.querySelector('.round');
const roundOutcome = document.querySelector('.round-text');
const playAgainButton = document.querySelector('.play-again-button-container')
const mainTitle = document.querySelector('.title');
const infoButtons = document.querySelector('.info-buttons');
const gameArea = document.querySelector('.game-section');

for (let i = 0; i < loreAndRulesButtons.length; i++) {
    if (i === 0) {
        loreAndRulesButtons[i].addEventListener('click', function () {
            document.querySelector('.modal-lore').classList.toggle('hidden');
        });
    } else if (i === 1) {
        loreAndRulesButtons[i].addEventListener('click', function () {
            document.querySelector('.modal-rules').classList.toggle('hidden');
        });
    }
}

// 1) Create a function that will generate the computer's choice
const getComputerChoice = function () {
    let computerChoice = Math.trunc(Math.random() * 3) + 1; // Number generated between 1-3
    switch (computerChoice) { // Depending on the number, the value rock, paper or scissors is assigned 
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        default:
            return null;
    }
};

const chooseCorrectWeapon = function (weapon) {
    if (computerRockButton.classList.contains('weapon-select-enemy')) computerRockButton.classList.toggle('weapon-select-enemy');
    if (computerPaperButton.classList.contains('weapon-select-enemy')) computerPaperButton.classList.toggle('weapon-select-enemy');
    if (computerScissorButton.classList.contains('weapon-select-enemy')) computerScissorButton.classList.toggle('weapon-select-enemy');
    if (weapon === "rock") {
        computerRockButton.classList.toggle('weapon-select-enemy');
    } else if (weapon === "paper") {
        computerPaperButton.classList.toggle('weapon-select-enemy');
    } else if (weapon === "scissor") {
        computerScissorButton.classList.toggle('weapon-select-enemy');
    }
}

//A function that will run a single round, with the parameters being the user's choice and the computer's choice
const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissor"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissor" && computerSelection === "paper") {
        computerLivesText.textContent = `Knight Lives Remaining: ${--computerLives}`;
        roundText.textContent = `Round: ${++round}`;
        if (playerSelection === "rock") {
            roundOutcome.textContent = `The mighty hero pulls out his magic rock and shatters the knight's sword as he tries to attack`;
        } else if (playerSelection === "paper") {
            roundOutcome.textContent = `The hero rams their shield into the knight's powerful rock, causing a small exposion, stunning the knight`;
        } else {
            roundOutcome.textContent = `Out of nowehere the hero pulls their swords out and slices the knight's shield in half, and pushes a sword into the knight's armour`;
        }
    } else if (playerSelection === computerSelection) {
        roundText.textContent = `Round: ${++round}`;
        roundOutcome.textContent = `The town looks on as the two battle out fiercly, matching each move with a counter, neither of them get the upper-hand in this round`;
    } else {
        userLivesText.textContent = `User Lives Remaining: ${--userLives}`;
        roundText.textContent = `Round: ${++round}`;
        if (computerSelection === "rock") {
            roundOutcome.textContent = `The knight seems too powerful, pulling out his magic rock and blinding the town's hero, things are not looking good right now for the majestic hero`;
        } else if (computerSelection === "paper") {
            roundOutcome.textContent = `The knight stands strong, pulling his large purple shield out and prevents the damage from the hero's magic rock`;
        } else {
            roundOutcome.textContent = `The knight pulls out his large purple stone powered sword, and slashes the hero's shield. A menacing "muhahaha" can be heard coming from the knight's mouth`;
        }
    }
};

const scoreChecker = function (userScore, computerScore) {
    if (userScore < 1) {
        document.body.style.backgroundImage = "url('losing-screen.jpg')";
        mainTitle.classList.toggle("hidden");
        infoButtons.classList.toggle("hidden");
        gameArea.classList.toggle("hidden");
        document.querySelector('.user-side').style.display = "none";
        document.querySelector('.computer-side').style.display = "none";
        document.querySelector('.game-information').style.display = "none";
        document.querySelector('.modal-loss').classList.toggle('hidden');
    } else if (computerScore < 1) {
        document.body.style.backgroundImage = "url('winning-screen.jpg')";
        mainTitle.classList.toggle("hidden");
        infoButtons.classList.toggle("hidden");
        gameArea.classList.toggle("hidden");
        document.querySelector('.user-side').style.display = "none";
        document.querySelector('.computer-side').style.display = "none";
        document.querySelector('.game-information').style.display = "none";
        document.querySelector('.modal-win').classList.toggle('hidden');
    }
};

playAgainButton.addEventListener('click', function () {
    computerLives = 5;
    userLives = 5;
    round = 0;
    if (userRockButton.classList.contains('selected-weapon')) userRockButton.classList.toggle('selected-weapon');
    if (userPaperButton.classList.contains('selected-weapon')) userPaperButton.classList.toggle('selected-weapon');
    if (userScissorButton.classList.contains('selected-weapon')) userScissorButton.classList.toggle('selected-weapon');
    if (computerRockButton.classList.contains('weapon-select-enemy')) computerRockButton.classList.toggle('weapon-select-enemy');
    if (computerPaperButton.classList.contains('weapon-select-enemy')) computerPaperButton.classList.toggle('weapon-select-enemy');
    if (computerScissorButton.classList.contains('weapon-select-enemy')) computerScissorButton.classList.toggle('weapon-select-enemy');
    roundOutcome.textContent = '';
    computerLivesText.textContent = `Knight Lives Remaining: ${computerLives}`
    roundText.textContent = `Round: ${round}`;
    userLivesText.textContent = `User Lives Remaining: ${userLives}`;
    document.body.style.backgroundImage = "url('background-image.jpg')";
    if (mainTitle.classList.contains('hidden')) mainTitle.classList.toggle('hidden');
    if (infoButtons.classList.contains('hidden')) infoButtons.classList.toggle('hidden');
    if (gameArea.classList.contains('hidden')) gameArea.classList.toggle('hidden');
    if (document.querySelector('.game-information').style.display === "none") document.querySelector('.game-information').style.display = null;
    if (document.querySelector('.user-side').style.display === "none") document.querySelector('.user-side').style.display = null;
    if (document.querySelector('.computer-side').style.display === "none") document.querySelector('.computer-side').style.display = null;
    if (!document.querySelector('.modal-loss').classList.contains('hidden')) document.querySelector('.modal-loss').classList.toggle('hidden');
    if (!document.querySelector('.modal-win').classList.contains('hidden')) document.querySelector('.modal-win').classList.toggle('hidden');
});

userRockButton.addEventListener('click', () => {
    userRockButton.classList.toggle('selected-weapon');
    if (userPaperButton.classList.contains('selected-weapon')) userPaperButton.classList.toggle('selected-weapon');
    if (userScissorButton.classList.contains('selected-weapon')) userScissorButton.classList.toggle('selected-weapon');
    let computerChoice = getComputerChoice();
    chooseCorrectWeapon(computerChoice);
    playRound("rock", computerChoice);
    scoreChecker(userLives, computerLives);
});

userPaperButton.addEventListener('click', () => {
    userPaperButton.classList.toggle('selected-weapon');
    if (userRockButton.classList.contains('selected-weapon')) userRockButton.classList.toggle('selected-weapon');
    if (userScissorButton.classList.contains('selected-weapon')) userScissorButton.classList.toggle('selected-weapon');
    let computerChoice = getComputerChoice();
    chooseCorrectWeapon(computerChoice);
    playRound("paper", computerChoice);
    scoreChecker(userLives, computerLives);
});

userScissorButton.addEventListener('click', () => {
    userScissorButton.classList.toggle('selected-weapon');
    if (userPaperButton.classList.contains('selected-weapon')) userPaperButton.classList.toggle('selected-weapon');
    if (userRockButton.classList.contains('selected-weapon')) userRockButton.classList.toggle('selected-weapon');
    let computerChoice = getComputerChoice();
    chooseCorrectWeapon(computerChoice);
    playRound("scissor", computerChoice);
    scoreChecker(userLives, computerLives);
});