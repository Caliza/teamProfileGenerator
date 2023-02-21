const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { run } = require('jest');
const employeeArray = [];

const generateHTML = (employeeArr) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
    ${employeeArr.map(employee => {
    if (employee.getRole() == 'Manager') {
      return `
        <h1 class="display-4">Hi! My name is ${employee.name}</h1>
      <p class="lead">I am from ${employee.getRole()}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is: ${employee.officeNumber}</li>
        <li class="list-group-item">Email: ${employee.email}</li>
      </ul>
        `
    }
    else if (employee.getRole() == 'Manager') {
      return `
        <h1 class="display-4">Hi! My name is ${employee.name}</h1>
      <p class="lead">I am from ${employee.getRole()}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is: ${employee.officeNumber}</li>
        <li class="list-group-item">Email: ${employee.email}</li>
      </ul>
        `
    }
    else if (employee.getRole() == 'Manager') {
      return `
        <h1 class="display-4">Hi! My name is ${employee.name}</h1>
      <p class="lead">I am from ${employee.getRole()}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is: ${employee.officeNumber}</li>
        <li class="list-group-item">Email: ${employee.email}</li>
      </ul>
        `
    }
  })}
      
    </div>
  </header>
</body>
</html>`;
function init(){
inquirer
  .prompt([
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
  ])
  .then((answers) => {
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
    if(answer.choice === "Yes"){
      init();
    }else{
      console.log("Team has been made");
      console.log('beta1', employeeArray);
    } 
  })
}

init();



    //  const input = employeeArray.push(manager);
    //  console.log(input);
     //; fs.writeFile('index.html', employeeArray, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
  
  