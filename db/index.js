const mysql = require('mysql');
// const config = require('./config.js');

var pool  = mysql.createPool({
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


// function handleDisconnect() {
//   connection = mysql.createConnection('mysql://b75352c28ce8dc:4c06cf8c@us-cdbr-east-02.cleardb.com/heroku_e98030fc61e2c0f?reconnect=true')
  
//   connection.connect(function(err) {
//     if(err) {
//       console.log('db connection error', err)
//       setTimeout(handleDisconnect, 2000);
//     }
//     console.log('potion peddler')
//   });

//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') {
//       handleDisconnect();          
//     } else {          
//       throw err;    
//     }
//   });
// }

// handleDisconnect();

module.exports = pool;