#! /usr/bin/env node

import inquirer from "inquirer"

const ans :{
    sent : string;
   } =  await inquirer.prompt([{
        name: "sent",
        type: "input",
        message: "Enter your sentence to count the given words:"
   }]);

//    output defines
const Done = ans.sent.trim().split(" ")
console.log(Done);

console.log(`Your sentence word count is ${Done.length}`)