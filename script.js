'use strict';

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

//Function that takes user input
const getPlayerChoice = function () {
    let userChoice = prompt("choose rock, paper or scissor");
    return userChoice;
};

//Function that verifies that the user's choice is either rock, paper or scissor, with the parameter being the user's choice
const verifyPlayerChoice = function (choice) {
    let validInput = false; //boolean value that is set to false and will turn to true if the user enters a valid value
    if (typeof choice === "string") { //if the argument is of type string, we can turn it to lowercase, whereas if it's default we can't so that must be handled seperately
        choice.toLowerCase();
        if (choice !== "rock" && choice !== "paper" && choice !== "scissor") { //if the input isn't one of the expected values
            while (validInput) {
                choice = getPlayerChoice(); //we again ask for the user's choice
                if (choice === "rock" || choice === "paper" || choice === "scissor") {
                    validInput = true; //if the input is valid, then validInput is set to true and the while loop terminates
                }
            }
        }
    } else if (choice === null) { //in the event the user clicks cancel, the value returned would be null, and so we can quit the game entirely
        alert("Game has been quit");
        return;
    }
    return choice.toLowerCase(); // we can then return choice and make sure it's of lowercase
};

//A function that will run a single round, with the parameters being the user's choice and the computer's choice
const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissor"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissor" && computerSelection === "paper") {
        return (`User won as they chose ${playerSelection} and computer chose ${computerSelection}`); //these are all the possible combinations of the user winning
    } else if (playerSelection === computerSelection) {
        return (`The game is a tie as you both have used ${playerSelection}`);
    } else {
        return (`Computer won as the computer chose ${computerSelection} and the user chose ${playerSelection}`); //if it isn't a draw or if the user didn't win then the computer wins
    }
};
