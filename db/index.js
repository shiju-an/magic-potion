const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if(err) {
    console.log('db connection error', err)
  } else {
    console.log('do you come in potion database')
  }
});

module.exports = connection;