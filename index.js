// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
// Overall- readme
//      a)title
//      b) Description
//      c) Table of Contemts
//      d) Installation
//      e) Usage
//      f) Contributing
//      g) tests
//      h) Questions
//  1) Title- Displays as title of readme
//  2) description, installation instructions, usage info, contribution guidelines, test instructions
//  3) license badge- added near the top to section titled license
//  4) github name- added to section questions
//      a)name and link to github profile
//  5) e-mail address- added to section Questions
//  6) table of contents clickable links
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/readme-template');
const writeFile = require ('./utils/generateMarkdown');

// This prompts the user for quetsions about title, description, installation, usage, contributions test instructions.
const promptTitle = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You forgot to enter the Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who has contributed to this project?'
        }
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?'
        },
    ]);
};

promptTitle()
    .then((data=>{
        console.log(data);
        fs.writeFile("READMEGen.md", generateMarkdown(data), function(err){
            if(err) {
                console.log("Error")
            } else {console.log("README generate!")}
        })
    }))
