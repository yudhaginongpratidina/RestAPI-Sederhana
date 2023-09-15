const mysql = require('mysql2');

const dbpool = mysql.createPool({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USERNAME,
    passwod : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = dbpool.promise();