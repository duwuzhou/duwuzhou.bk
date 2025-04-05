const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql.sqlpub.com',
  port: 3306,
  user: 'duwuzhou',
  password: '6ai23FuAgXbKUaTt',
  database: 'kongtianjun',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;