#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;

console.log("\n \t Welcome to Sana's Todo-List Application\n");

while(condition)
{let todoQuestions = await inquirer.prompt(
    [
    
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default:"false",
        }
    ]
);
todos.push(todoQuestions.firstQuestion);

// the loop is running on the based of this variable condition.
condition = todoQuestions.secondQuestion
console.log(todos);

}

// read,update,delete,add