// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How can someone install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How should your project be used?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How should some contribute to your project?',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How can someone test your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want to use with your project?',
            choices: ['Apache', 'BSD-3', 'BSD-2', 'GPL', 'LGPL', 'MIT', 'Mozilla', 'Eclipse'],
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email for people to contact you?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub profile link?',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data));
};

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((answers) => writeToFile(README.md), answers)
    .then(() => console.log('README generated successfully!'))
    .catch((err) => console.err(err));
}

// Function call to initialize app
init();