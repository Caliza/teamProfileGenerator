const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML')
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path')
// const { run } = require('jest');
const employeeArray = [];


function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Team member name?',
        },
        {
            type: 'list',
            name: 'position',
            message: 'Team member position?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'id',
            message: 'Team member id?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub Username',
            when: (answers) => answers.position === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school name',
            when: (answers) => answers.position === 'Intern',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number',
            when: (answers) => answers.position === 'Manager',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Team member email?',
        },
    ]).then((answers) => {
        if (answers.position === 'Manager') {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            employeeArray.push(manager);
        } else if (answers.position === 'Engineer') {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            employeeArray.push(engineer);
        } else if (answers.position === 'Intern') {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            employeeArray.push(intern);
        }
        console.log('beta0', employeeArray);
        addAnother();
    });
}

function addAnother() {
  inquirer.prompt([
      {
          type: 'list',
          name: 'choice',
          message: 'Do you want to add another team member?',
          choices: ['Yes', 'No'],
      }
  ]).then((answer) => {
      if (answer.choice === "Yes") {
          init();
      } else {
          writeToFile();
      }
  })
}


function writeToFile() {
   const htmlPageContent = generateHTML(employeeArray);

      fs.writeFile(path.join(process.cwd(), '/dist', 'index.html'), htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
      );
  }

init();



  
