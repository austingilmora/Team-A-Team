const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];
const makeHTML = require('./src/makeHTML');
const fs = require('fs');

const startTeam = function() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the team manager's id number?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the team manager's email?"
        },
        {
            type: 'text',
            name: 'officeNum',
            message: "What is the team manager's office number?"
        }])
        .then(({ name, id, email, officeNum }) => {
            const manager = new Manager(name, id, email, officeNum);

            team.push(manager);
            restOfTeam();
        });
}

const restOfTeam = function() {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'confirm',
            message: "Do you want to add more employees to the team?"
        })
        .then(response => {
            if(response.confirm) {
                menu();
            } else {
                createTeam();
            }
        })
}

const menu = function() {
    inquirer
        .prompt({
            type: 'list',
            name: 'employeeType',
            message: "What type of Employee would you like to add?",
            choices: ['Engineer', 'Intern']
        })
        .then(response => {
            if (response.employeeType === 'Engineer'){
                doEngineer();
            } else {
                doIntern();
            }
        })
}

const doEngineer = function() {
    inquirer 
        .prompt([{
            type: 'text',
            name: 'name',
            message: "What is the Engineer's name?"

        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Engineer's id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Engineer's email?"
        },
        {
            type: 'text',
            name: 'github',
            message: "What is the Engineer's github?"
        }])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);

            team.push(engineer);
            restOfTeam();
        })
}

const doIntern = function() {
    inquirer 
        .prompt([{
            type: 'text',
            name: 'name',
            message: "What is the Intern's name?"

        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Intern's id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Intern's email?"
        },
        {
            type: 'text',
            name: 'school',
            message: "Where does the Intern attend school?"
        }])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);

            team.push(intern);
            restOfTeam();
        })
}

const createTeam = function() {
    const pageHTML = makeHTML(team);
    
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
}




startTeam();