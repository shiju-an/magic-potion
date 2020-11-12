const mysql = require('mysql');
// const config = require('./config.js');

const connection = mysql.createConnection('mysql://b75352c28ce8dc:4c06cf8c@us-cdbr-east-02.cleardb.com/heroku_e98030fc61e2c0f?reconnect=true');

connection.connect((err) => {
  if(err) {
    console.log('db connection error', err)
  } else {
    console.log('do you come in potion database')
  }
});

module.exports = connection;