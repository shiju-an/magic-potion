const db = require('../db');

const getOrder = (id, callback) => {
  db.query(
    `SELECT * FROM transactions INNER JOIN users ON transactions.userId = users.id WHERE transactions.id = ${id}`, (err, data) => {
      if (err) {
        console.log('error at db model thing', err);
        callback(err);
      } else {
        callback(null, data);
      };
    });
};

const saveOrder = (newOrder, callback) => {
  console.log(newOrder);
};

const updateOrder = (id, callback) => {
  console.log(id);
};

const deleteOrder = (id, callback) => {
  db.query(
    `DELETE FROM transactions WHERE id = ${id}`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        console.log(data.affectedRows + '' + "record(s) deleted");
      };
    });
};

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
};