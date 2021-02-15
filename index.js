// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')
const generatePage = require('./Utils/generatePage')

// TODO: Create an array of questions for user input
const questions = [
    console.log(questions),
    {
        type: "input",
        name: "title",
        message: "Please enter your project title." 
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation process if any."
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose license for your project",
        choices: [
            "afl-3.0",
            "apache-2.0",
            "bsl-1.0",
            "gpl",
            "ms-pl",
            "mit",
            "mpl-2.0",
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Are there any contributors in your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test included in your project?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } 
        console.log("Your file has been successfully created.")
    });
}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
