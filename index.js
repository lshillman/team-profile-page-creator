const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const Manager = require('./lib/Manager'); // make sure we can access the Manager class


const mgrQuestions = [
    {
        type: 'input',
        name: 'mgrName',
        message: "Please enter the manager's name:"
    },
    {
        type: 'input',
        name: 'mgrID',
        message: "Enter the manager's ID #:"
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: "Enter the manager's email:"
    },
    {
        type: 'input',
        name: 'office',
        message: "Enter the manager's office #:"
    },
]

const engQuestions = [
    {
        type: 'input',
        name: 'engName',
        message: "Enter the engineer's name:"
    },
    {
        type: 'input',
        name: 'engID',
        message: "Enter the engineer's ID #:"
    },
    {
        type: 'input',
        name: 'engEmail',
        message: "Enter the engineer's email:"
    },
    {
        type: 'input',
        name: 'Github',
        message: "Enter the engineer's github username:"
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'intName',
        message: "Enter the engineer's name:"
    },
    {
        type: 'input',
        name: 'intID',
        message: "Enter the engineer's ID #:"
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "Enter the engineer's email:"
    },
    {
        type: 'input',
        name: 'School',
        message: "Enter the engineer's github username:"
    },
]

const nextActionQuestions = [
    {
        type: 'list',
        name: 'nextAction',
        message: "What would you like to do now?",
        choices: ["Add an engineer", "Add an intern", "Finish building my team"]
    }
]


const employees = [];

function beginMgrInquiry() {
    inquirer
        .prompt(mgrQuestions)
        .then((answers) => {
            employees.push(new Manager(answers.mgrName, answers.mgrID, answers.mgrEmail, answers.office));
            getNextAction()
            // console.log(employees[0].email)
            // writeToFile(answers);
          });
}

function getNextAction() {
    console.clear();
    inquirer
        .prompt(nextActionQuestions)
        .then((answers) => {
            if (answers.nextAction == 'Add an engineer') {
                beginEngineerInquiry()
            } else if (answers.nextAction == 'Add an intern') {
                beginInternInquiry()
            } else {
                writeToFile(employees)
            }
            console.log(answers);
          });
}

function writeToFile(data) {
    fs.writeFile(`dist/teamprofile.html`, generateMarkdown(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!'))
}

function init() {
    console.clear();
    beginMgrInquiry();
    // console.log(generateHTML.generateManagerCard("Bob", 001, "bob@bob.com", 1010))
}

init();
