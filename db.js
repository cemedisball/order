const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection=mysql.createPool({
    host : process.env.DBHOST,
    user : process.env.DBUSER,
    pass : process.env.DBPASS,
    database : process.env.DBNAME,
    port : process.env.PORT
});
module.exports=connection.promise();