const makeIntern = team => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class='card-header bg-primary'>
                <h5 class="card-title text-white">${team.intern.getName()}</h5>
                <h6 class="card-title text-white"><i class="fas fa-baby"></i> Intern</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team.intern.getID()}</li>
                    <li class="list-group-item">Email: ${team.intern.getEmail()}</li>
                    <li class="list-group-item">School: ${team.intern.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
};
