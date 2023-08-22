// TODO: Include packages needed for this application
const Inquirer = require('./node_modules/inquirer/lib/inquirer.js');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Project Title?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your github ID?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What was the motivation? Why did you build this project? What problem did you solve? What did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the Correct License.',
        choices: ["Apache License 2.0","GNU General Public License v3.0","MIT License","BSD 2-Clause \"Simplified\" License","BSD 3-Clause \"New\" or \"Revise\" License","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License 3.0","GNU General Public License 2.0","GNU Lesser General Public License 3.0","Mozilla Public License 2.0","No License"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}

// TODO: Create a function to initialize app
function init() {
  Inquirer.prompt(questions).then((answers) => {
    writeToFile("../README.md", generateMarkdown.generateMarkdown(answers) );}).catch((err) => {
    if (err) throw err;
  });
}

// Function call to initialize app
init();
