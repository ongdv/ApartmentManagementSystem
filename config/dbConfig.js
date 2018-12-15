var mysql = require('mysql');
var dbConfig = {
    host: "localhost",
    user: "ong",
    password: "package.json",
    database: "apt"
};

var pool = mysql.createPool(dbConfig);

module.exports = pool;