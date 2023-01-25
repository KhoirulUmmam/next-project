const util = require('util');
const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextcrud'
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PORTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if(err.code === 'ER_CON_CONT_ERROR') {
            console.error('Darabase has too many connections.');
        }
        if(err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }

    if(connection) connection.release();

    return;
});

// Promisify for node.js async/await.
const executeQuery = (query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParms, (err, data) => {
                if(err) {
                    console.log("error in executin the query");
                    reject(err);
                }
                resolve(data);
            });
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = { executeQuery };