#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() *6 + 1);
console.log(chalk.bold.yellow("Welcome to my Guessing Number Game:"))

const answer = await inquirer.prompt([{
    name:"userGuessedNumber",
    type:"number",
    message:"Please Guess a number between 1 till 7"
}]);

if (answer.userGuessedNumber == randomNumber) {
    console.log("Congratulation! you guess a right number")
}else {
    console.log("Sorry! you guess a wrong number")
}
console.log(answer);
console.log(randomNumber);