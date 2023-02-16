const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, position, github, email }) =>
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
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${position}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is: ${github}</li>
        <li class="list-group-item">Email: ${email}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Team member name?',
        },
        {
            type: 'input',
            name: 'position',
            message: 'Team member position?',
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
        },
        {
            type: 'input',
            name: 'email',
            message: 'Team member email?',
        },
    ])
    then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });