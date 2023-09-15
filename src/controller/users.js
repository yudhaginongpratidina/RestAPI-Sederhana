const createNewUser = (req, res) => {
    res.json ({
        message: 'Create New User Success'
    })
}


const getAllUsers = (req, res) => {
    res.json ({
        message: 'Get All Users Success'
    })
}

module.exports = {
    createNewUser,
    getAllUsers
}