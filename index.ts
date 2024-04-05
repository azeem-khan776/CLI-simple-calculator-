#! /usr/bin/env node

import inquirer from "inquirer";
// printung a Wellcome message
console.log("\n\tWellcome To \'azeem\' - CLI Simple Calculater\n");


// asking questions from users thorugh Inquirer


let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstnumber"},
    {message: "Enter Second Number", type: "number", name: "secondnumber"},
    {
        message: "select one operator to perform operators",
        type: "list",
        name: "operator",
        choices: ["addition","subtrections","Multiplication","Division"],
    },
]);

console.log(answers);

// conditional statement if-Else

if(answers.operator === "addition"){
 console.log(answers.firstnumber + answers.secondnumber)

}

else if(answers.operator === "subtrections"){
    console.log(answers.firstnumber - answers.secondnumber)
}


else if(answers.operator === "Multiplication"){
    console.log(answers.firstnumber * answers.secondnumber)
}


else if(answers.operator === "Division"){
    console.log(answers.firstnumber / answers.secondnumber)
}

else{
    console.log("invalid input")
}

