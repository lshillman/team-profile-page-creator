const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');

const Manager = require('./lib/Manager'); // make sure we can access the Manager class
const Engineer = require('./lib/Engineer'); // make sure we can access the Engineer class
const Intern = require('./lib/Intern'); // make sure we can access the Intern class


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
        name: 'github',
        message: "Enter the engineer's github username:"
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'intName',
        message: "Enter the intern's name:"
    },
    {
        type: 'input',
        name: 'intID',
        message: "Enter the intern's ID #:"
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "Enter the intern's email:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:"
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
                writeToFile()
            }
          });
}

function beginEngineerInquiry() {
    console.clear();
    inquirer
        .prompt(engQuestions)
        .then((answers) => {
            employees.push(new Engineer(answers.engName, answers.engID, answers.engEmail, answers.github));
            getNextAction()
          });
}

function beginInternInquiry() {
    console.clear();
    inquirer
        .prompt(internQuestions)
        .then((answers) => {
            employees.push(new Intern(answers.intName, answers.intID, answers.intEmail, answers.school));
            getNextAction()
          });
}

function writeToFile() {
    console.clear();
    console.log(`Generating a page with ${employees.length} employees...`)
    for (employee of employees) {
        if (employee.constructor.toString().indexOf("Manager") > -1) {
            generateHTML.generateManagerCard(employee.getName(), employee.getId(), employee.getEmail(), employee.getOffice());
        } else if (employee.constructor.toString().indexOf("Engineer") > -1) {
            generateHTML.generateEngineerCard(employee.getName(), employee.getId(), employee.getEmail(), employee.getGithub());
        } else if (employee.constructor.toString().indexOf("Intern") > -1) {
            generateHTML.generateInternCard(employee.getName(), employee.getId(), employee.getEmail(), employee.getSchool());
        }
    }

    fs.writeFile(`dist/teamprofile.html`, generateHTML.generatePageHTML(), (err) =>
      err ? console.log(err) : console.log('Success!'))
}

function init() {
    console.clear();
    beginMgrInquiry();
    // console.log(generateHTML.generateManagerCard("Bob", 001, "bob@bob.com", 1010))
}

init();
