const mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 5,
  host: 'us-cdbr-east-02.cleardb.com',
  user: 'b75352c28ce8dc',
  password: '4c06cf8c',
  database: 'heroku_e98030fc61e2c0f'
})

pool.query('SELECT 1 + 1 AS solution', (err, res) => {
  if (err) {
    console.log(err, 'error connecting');
  }
  console.log('potion peddler');
});
  
module.exports = pool;

//uncomment below for local/dev
//create config file with below filled to local enviornment
// module.exports = {
//   user: '',
//   password: '',
//   database: 'potionsales'
// };

// const config = require('./config.js');

// var connection = mysql.createConnection(config);

// connection.connect(function(err) {
//   if(err) {
//     console.log('db connection error', err)
//   }
//   console.log('potion peddler')
// });

// module.exports = connection;