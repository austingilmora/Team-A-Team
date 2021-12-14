const makeManager = team => {
    return `
    <div class="col-sm-4">
        <div class="card">
            <div class='card-header bg-primary'>
                <h5 class="card-title text-white">Name</h5>
                <h6 class="card-title text-white"><i class='fas fa-coffee'></i> ${team.manager.getName()}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team.manager.getID()}</li>
                    <li class="list-group-item">Email: ${team.manager.getEmail()}</li>
                    <li class="list-group-item">Office number: ${team.manager.getOfficeNum()}</li>
                </ul>
            </div>
        </div>
    </div>
    `;
};

