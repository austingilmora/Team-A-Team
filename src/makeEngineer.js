const makeEngineer = team => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class='card-header bg-primary'>
                <h5 class="card-title text-white">${team.engineer.getName()}</h5>
                <h6 class="card-title text-white"><i class='fas fa-jedi'></i> Engineer</h6>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${team.engineer.getID()}</li>
                <li class="list-group-item">Email: ${team.engineer.getEmail()}</li>
                <li class="list-group-item">Github: ${team.engineer.getGithub()}</li>
            </ul>
        </div>
    </div>
    `;
};


