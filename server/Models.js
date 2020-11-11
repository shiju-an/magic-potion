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
  console.log(id);
};

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
};