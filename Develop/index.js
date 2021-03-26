// TODO: Include packages needed for this application
//Which packages are needed?  Inquirer, fs, other modules written
const inquirer = require('inquirer');
const fs = require('fs');

// Ask questions about user
const userQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput =>{
                if (nameInput){
                    return true
                } else{
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput =>{
                if (githubInput){
                    return true
                } else{
                    console.log('Please enter your GitHub username.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput =>{
                if (emailInput){
                    return true
                } else{
                    console.log('Please enter your email address.')
                    return false;
                }
            }
        },

    ])
};

//Ask questions about project
const projectQuestions = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project? (Required)',
            validate: titleInput =>{
                if (titleInput){
                    return true
                } else{
                    console.log('You must have a title for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please enter a description for your project. (Required)',
            validate: descriptionInput =>{
                if (descriptionInput){
                    return true
                } else{
                    console.log("Every project needs a description.")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmGit',
            message: 'Is your project deployed to GitHub?',
            default: true
        },
        {
            type: 'input',
            name: 'githubLink',
            message: 'What is the URL of your GitHub repository?',
            when: ({ confirmGit }) => {
                if(confirmGit){
                    return true
                } else {
                    return false;
                }
            }
            
        },
        {
            type: 'confirm',
            name: 'confirmContents',
            message: 'Do you need a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'contentsInput',
            message: 'Please input your table of contents, separated by commas.',
            when: ({ confirmContacts }) =>{
                if(confirmContacts){
                    return true
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installInput',
            message: 'Describe the process to install the app. (Required)',
            validate: installInput =>{
                if(installInput){
                    return true
                } else {
                    console.log('Please enter the method to install the app.  If no installation is needed, please say so.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usageInput',
            message: 'Please describe how to use the app. (Required)',
            validate: usageInput =>{
                if(usageInput){
                    return true
                } else {
                    console.log('Users need to know how to use your product.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'creditsConfirm',
            message: 'Does anyone need credit for helping you develop this product?',
            default: true
        },
        {
            type: 'input',
            name: 'creditsInput',
            message:'Please give credit to your collaborators or any outside sources.',
            when: creditsConfirm =>{
                if(creditsConfirm){
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenseCheckbox',
            message: 'Which license does your app fall under?',
            choices: ['MIT', 'ISC', 'GNU GPLv3', 'Unlicense']
        },
        {
            type: 'confirm',
            name: 'badgeConfirm',
            message: 'Do you want to add badges to your README?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'badgeCheckbox',
            message: 'Which badges would you like to include?',
            choices: ['GitHub Language Count', 'GitHub Top Language', 'GitHub Issues Counter', 'GitHub Closed Issues', 'GitHub Pull Requests', 'License Type', 'GitHub Last Commit Date'],
        },
        {
            type: 'confirm',
            name: 'featuresConfirm',
            message: 'Would you like a separate section for application features?',
            default: true
        },
        {
            type: 'input',
            name: 'featureInput',
            message: 'Please list the features of your app.',
            when: featuresConfirm =>{
                if (featuresConfirm){
                    return true
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'testingConfirm',
            message: 'Would you like a section for testing procedures?',
            default: true
        },
        {
            type: 'input',
            name: 'testingInput',
            message: 'Please describe the methodologies used to test your app.',
            when: testingConfirm =>{
                if(testingConfirm){
                    return true
                } else{
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'contactConfirm',
            message: 'Your GitHub username and email are automatically populated into the contact section.  Do you have anything else to add?',
            default: true
        },
        {
            type: 'input',
            name: 'contactInput',
            message: 'Please enter any additional contact information you would like.',
            when: contactConfirm =>{
                if (contactConfirm){
                    return true
                } else {
                    return false
                }
            }
        }
    ])
}

//which sections are needed in a readme?
//Project title - Title
//Description of project - Description
//Maybe table of contents - Table of Contents
//Maybe installation steps - Installation
//How to use app - Usage
//Maybe credits - Credits
//License information - Licensing
//^^List of options
//Maybe badges - Badges
//^^Add to top of page
//Maybe features - Features
//Maybe testing information - Testing
//Where to ask questions - Questions/Comments
//^^Need Github username and an email address

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();