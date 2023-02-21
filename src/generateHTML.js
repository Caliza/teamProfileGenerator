
const generateHTML = (employeeArr) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Document</title>
</head>
<header class="display-1 text-center bg-info">Team Roster</header>
<body>
  <header class="p-5 mb-4 header bg-light">
  <div class="container d-flex teamCards">
    ${employeeArr.map(employee => {
        if (employee.getRole() === 'Manager') {
            return `
            <div class="m-1 p-2 eachCard">    
        <h1 class="display-4 lead">My name is ${employee.getName()}</h1>
      <p class="display-6">I am a ${employee.getRole()}.</p>
      <h3><span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My office number is: ${employee.getOfficeNumber()}</li>
        <li class="list-group-item">Email: ${employee.getEmail()}</li>
      </ul>
      </div>
        `
        }
        else if (employee.getRole() === 'Engineer') {
            return `
            <div class="m-1 p-2 eachCard">
        <h1 class="display-4 lead">My name is ${employee.getName()}</h1>
      <p class="display-6">I am an ${employee.getRole()}.</p>
      <h3><span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is: ${employee.getGithub()}</li>
        <li class="list-group-item">Email: ${employee.getEmail()}</li>
      </ul>
      </div>
        `
        }
        else if (employee.getRole() === 'Intern') {
            return `
            <div class="m-1 p-2 eachCard">
        <h1 class="display-4 lead">My name is ${employee.getName()}</h1>
      <p class="display-6">I am an ${employee.getRole()}.</p>
      <h3><span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My univercity is: ${employee.getSchool()}</li>
        <li class="list-group-item">Email: ${employee.getEmail()}</li>
      </ul>
      </div>
        `
        }
    }).join('')}
      
    </div>
  </header>
</body>
</html>`;

module.exports = generateHTML