const dbpool = require('../config/database');

const createNewUser = (body) => {
    const SQLQuery = `INSERT INTO users (name, email, address) VALUES (
        '${body.name}',
        '${body.email}',
        '${body.address}'
    )`;

    return dbpool.execute(SQLQuery)
}

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbpool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery = `UPDATE users SET 
        name    = '${body.name}', 
        email   = '${body.email}', 
        address = '${body.address}'

        WHERE id    = ${id}
    `;

    return dbpool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id = ${id}`;

    return dbpool.execute(SQLQuery);
}

module.exports = {
    createNewUser,
    getAllUsers,
    updateUser,
    deleteUser
}