
const generateEmployees = function(team) {
    return `
    <div class="container">
        <div class="row g-4">
            ${team
            .filter(member => member.getRole() === 'Manager')
            .map(({ name, id, email, officeNum }) =>{
                return `
                <div class="col-sm-4">
                    <div class="card">
                        <div class='card-header bg-primary'>
                            <h5 class="card-title text-white">${name}</h5>
                            <h6 class="card-title text-white"><i class='fas fa-coffee'></i> Manager</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                                <li class="list-group-item">Office number: ${officeNum}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            })
            .join('')}

            ${team
            .filter(member => member.getRole() === 'Engineer')
            .map(({ name, id, email, github}) =>{
                return `
                <div class="col-sm-4">
                    <div class="card">
                        <div class='card-header bg-primary'>
                            <h5 class="card-title text-white">${name}</h5>
                            <h6 class="card-title text-white"><i class='fas fa-jedi'></i> Engineer</h6>
                        </div>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                </div>
                `
            })
            .join('')}

            ${team
            .filter(member => member.getRole() === 'Intern')
            .map(({ name, id, email, school}) => {
                return `
                <div class="col-sm-4">
                    <div class="card">
                        <div class='card-header bg-primary'>
                            <h5 class="card-title text-white">${name}</h5>
                            <h6 class="card-title text-white"><i class="fas fa-baby"></i> Intern</h6>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item">School: ${school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `;
            })
            .join('')}
        </div>
    </div>
    `;
};

const makeHTML = function(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/1a9a28ccd1.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="p-5 mb-4 rounded-3 bg-danger">
            <div class="container-fluid py-3">
            <h1 class="display-5 fw-bold text-center text-white">My Team</h1>
            </div>
        </div>
        ${generateEmployees(team)}
    </body>
    </html>
    `;
}

module.exports = makeHTML;

