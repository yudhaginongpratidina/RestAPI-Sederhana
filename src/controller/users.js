const userModel = require('../models/users');

const createNewUser = async (req, res) => {
    
    const { body } = req;

    if(!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message : 'Data yang dikirimkan kurang lengkap',
            data: null
        })
    }

    try {
        await userModel.createNewUser(body);

        res.status(201).json ({
            message: 'Create New User Success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }

}


const getAllUsers = async (req, res) => {
    try {
        const [data] = await userModel.getAllUsers();
    
        res.status(200).json ({
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

const updateUser = async (req, res) => {
    const { id } = req.params; 
    const { body } = req;

    try {
        await userModel.updateUser(body, id);

        res.json ({
            message : 'Update User Success',
            data    : {
                id : id,
                ...body
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }


}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await userModel.deleteUser(id);

        res.status(200).json({
            message : 'Delete User Success',
            data : null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage : error,
        })
    }

}

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser
}