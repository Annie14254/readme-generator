// install required packages, import function from generateMarkdown
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: 'What is your GitHub username?',
        name: 'username' 
    },
    {
        type: "input",
        message: 'What is your email?',
        name: 'email' 
    },
    {
        type: "input",
        message: 'What is the name of the repository?',
        name: 'title' 
    },
    {
        type: "input",
        message: 'Provide a short description of the repository.',
        name: 'description' 
    },
    {
        type: "list",
        message: 'What is the license of the repository?',
        choices: ["MIT", "GPLv3", "Apache_2.0", "CC0_1.0"], 
        name: "license",
    },
    {
        type: "input",
        message: 'What command should the user use to install dependencies?',
        name: 'dependencies' 
    },
    {
        type: "input",
        message: 'What command should the user use to run tests?',
        name: 'test' 
    },
    {
        type: "input",
        message: 'What should the user know about using the repository?',
        name: 'usage' 
    },
    {
        type: "input",
        message: 'What should the user know about contributing to the repository?',
        name: 'contribution' 
    },
];

// writes to README file
function writeToFile(data) {
    fs.writeFile("generated_README.md", data, (err) =>
        err ? console.error(err) : console.log('README generated!'))

}

// initializes and uses README framework with user inputs
function init(){
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile(generateMarkdown(data));
    })
}

// initialize call
init();
