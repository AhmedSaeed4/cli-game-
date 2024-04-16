#! /usr/bin/env node

import inquirer from "inquirer"

const randomnumber = Math.floor(Math.random()* 6+ 1)
const answer = await inquirer.prompt([
    {
    name:"numberGame",
    type:"number",
    message:"guess a number between 1 and 6: ",
},
]);
if (answer.numberGame === randomnumber){
    console.log("you got it ")
} else  console.log("you gussed the wrong number");

