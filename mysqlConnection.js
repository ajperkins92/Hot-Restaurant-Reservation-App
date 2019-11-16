require('dotenv').config();
const mysql = require('mysql');
module.exports = mysql.createConnection({
  host: process.env.host || 'locahost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: process.env.password,
  database: 'ice_creamDB'
});
