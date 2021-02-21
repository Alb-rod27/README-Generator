// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown')

//const createFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser () => {}
    return inquirer.prompt ([
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
        type: "input",
        name: "credits",
        message: "List any collaborators, if any or type 'N/A':"
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
        name: "username",
        message: "Please enter your Github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
  ])
;
const createFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await promptUser;
        const createContent = generateMarkdown(data);
        
    } catch(err) {
        console.log(err);
    };
}
init();
