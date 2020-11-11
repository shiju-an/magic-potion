const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if(err) {
    console.log('db connection error', err)
  } else {
    console.log('do you come in potion database')
  }
});

