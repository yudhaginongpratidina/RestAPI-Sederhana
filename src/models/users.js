const dbpool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbpool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
}