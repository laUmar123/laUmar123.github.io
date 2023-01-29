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