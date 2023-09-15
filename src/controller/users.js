const createNewUser = (req, res) => {
    console.log(req.body);
    res.json ({
        message: 'Create New User Success',
        data: req.body
    })
}


const getAllUsers = (req, res) => {
    const data = {
        id      : '1',
        name    : "admin",
        email   : "admin@admin.com",
        adress  : "murim"
    }
    res.json ({
        message: 'Get All Users Success',
        data : data
    })
}

const updateUser = (req, res) => {
    const { id } = req.params; 

    console.log('id User : ', id);

    res.json ({
        message : 'Update User Success',
        data    : req.body
    });
}

const deleteUser = (req, res) => {
    const { id } = req.params;

    res.json({
        message : 'Delete User Success',
        data : {
            id : id,
            name    : "admin",
            email   : "admin@admin.com",
            adress  : "murim"
        }
    });
}

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser
}