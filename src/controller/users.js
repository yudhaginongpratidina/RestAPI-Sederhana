const userModel = require('../models/users');

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json ({
        message: 'Create New User Success',
        data: req.body
    })
}


const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModel.getAllUsers();
    
        res.json ({
            message: 'Get All Users Success',
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }
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