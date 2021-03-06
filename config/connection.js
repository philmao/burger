// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'phil',
    password: 'p4ssword',
    database: 'burgerdb'
  });
};

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;