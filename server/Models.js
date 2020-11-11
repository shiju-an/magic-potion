const db = require('../db');

const getOrder = (id, callback) => {
  db.query(
    `SELECT * FROM transactions INNER JOIN users ON transactions.userId = users.id WHERE transactions.id = ${id}`, (err, data) => {
      if (err) {
        console.log('error at db model thing', err);
        callback(err);
      } else {
        callback(null, data[0]);
      };
    });
};

const saveOrder = (newOrder, callback) => {
  //check if user exists in user table
    //if not, insert user and transaction data
  //else user exists in table
    //if user exists, check if transaction quantities < 3 and if transaction quantities + current quantities < 3
      //if so, insert transaction with existing user id 
    //if not, don't do anything
};

const updateOrder = (id, callback) => {
  db.query(
    `UPDATE transactions SET fulfilled = true WHERE id = ${id}`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log(data.affectedRows + ' ' + "record(s) updated");
        callback(null, data);
      };
    });
    //need to address updating same row
};

const deleteOrder = (id, callback) => {
  db.query(
    `DELETE FROM transactions WHERE id = ${id}`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log(data.affectedRows + ' ' + "record(s) deleted");
      };
    });
};

//do same for update for delete

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
};