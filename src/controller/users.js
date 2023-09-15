const userModel = require('../models/users');

const createNewUser = async (req, res) => {
    
    const { body } = req;

    try {
        await userModel.createNewUser(body);

        res.json ({
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

        res.json({
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