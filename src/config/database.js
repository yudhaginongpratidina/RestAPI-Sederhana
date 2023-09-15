const mysql = require('mysql2');
const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    passwod: '',
    database: 'express_mysql',
});

module.exports = dbpool.promise();