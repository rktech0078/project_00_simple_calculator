import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Please Enter Your First Digit: ",
    },
    {
        name: "num2",
        type: "number",
        message: "Please Enter Your Second Digit: ",
    },
    {
        name: "operator",
        type: "list",
        choices: [
            "Addition",
            "Subtraction",
            "Division",
            "Multiplication",
            "Modulus",
            "Exponent",
        ],
        message: "Please Select Your Operator: ",
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === "Division") {
    console.log(answer.num1 / answer.num2);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === "Modulus") {
    console.log(answer.num1 % answer.num2);
}
else if (answer.operator === "Exponent") {
    console.log(answer.num1 ** answer.num2);
}
else {
    console.log("Invalid Attempt, Please Try Again Later");
}
