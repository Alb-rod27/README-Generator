// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

const ReadMeTemplate = require('./src/ReadMeTemplate');

const createFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
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
        message: "Any credits to mention?, if none type 'N/A':"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose license for your project",
        choices: [
            "afl-3.0",
            "Mozilla",
            "apache-2.0",
            "bsl-1.0",
            "gpl",
            "ms-pl",
            "MIT",
            "mpl-2.0",
        ]
    },
    {
        type: "input",
        name: "contributors",
        message: "Are there any contributors in your project?"
    },
  ])
};

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await promptUser();
        const createContent = ReadMeTemplate(data);
        
        await createFile("./sample/README.md", createContent);
        console.log('README.md file successfully created!');
    } catch(err) {
        console.log(err);
    }
    //init();
};

init();

