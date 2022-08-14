// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your new project?',
    },
    // Project description
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    // Installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How can this project be installed?',
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'What is the purpose of this project?',
    },
    // License information
    {
        type: 'list',
        name: 'license',
        message: 'What is your chosen license for this project?',
        choices: ['Apache', 'BSD3', 'LGPL', 'MIT', 'MPL', 'None']
    },
    // Contributions
    {
        type: 'input',
        name: 'contributions',
        message: 'How can other users contribute to this project?',
    },
    // Tests
    {
        type: 'input',
        name: 'tests',
        message: 'Explain how this project can be used for further testing.'
    },
    // Github
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Thank you for your time. Your new README file has been created successfully.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('FINISHEDREADME.MD', generateMarkdown(answers));
        });
};

// Function call to initialize app
init();
