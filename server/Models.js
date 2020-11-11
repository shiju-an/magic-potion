const db = require('../db');

//need to destructure + add as param for query (all)

const getOrder = (id, callback) => {
  db.query(
    `SELECT * FROM transactions INNER JOIN users ON transactions.userId = users.id WHERE transactions.id = ${id}`, (err, data) => {
      if (err) {
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
  //promisify?

  let { firstName, lastName, quantity, total, expMM, expYY } = newOrder;
  let expDate = `${expMM}/${expYY}`
  let date = new Date();
  let currentMonth = date.getMonth() + 1;

  let checkUserSql = `SELECT id FROM users WHERE first_name = ? AND last_name = ? AND exp_date = ? LIMIT 1`;

  let insertOrderSql = `INSERT INTO transactions (quantity, total, fulfilled, order_date, userId) VALUES (?, ?, false, curdate(), ?)`;

  let insertUserSql = `INSERT INTO users (first_name, last_name, exp_date) VALUES (?, ?, ?)`;

  let selectId = 'SELECT id FROM users ORDER BY id DESC LIMIT 1';

  let checkQuantitySql = 
  `SELECT SUM(quantity) totalQuantity FROM transactions INNER JOIN users ON transactions.userId = users.id WHERE transactions.userId = ? AND MONTH(order_date) = ?`;

  db.query(checkUserSql, [firstName, lastName, expDate], (err, res) => {
    if (err) {
      console.log(err);
    } else if (res.length === 0) {
      console.log('before insert user');
      db.query(insertUserSql, [firstName, lastName, expDate], (err) => {
        if(err) {
          console.log(err, 'error');
        } else {
          console.log('before select new id')
          db.query(selectId, (err, id) => {
            if (err) {
              console.log('error');
            } else {
              console.log('before insert order');
              db.query(insertOrderSql, [quantity, total, id[0].id], (err) => {
                if(err){
                  console.log(err, 'final error');
                } else {
                  console.log('how did this work');
                } 
              });
            }
          });
        };
      });
    } else {
      //have id
      //innerjoin --> select all quantity where current month = this month
        //if this quantity + current quantity given is greater than 3
          //don't post --> exit 
        //otherwise, post the new transaction only
      db.query(checkQuantitySql, [res[0].id, currentMonth], (err, totalQty) => {
        if (err) {
          console.log(err)
          console.log('error at checking total quantity');
        } 
        else if (totalQty[0].totalQuantity + parseInt(quantity) > 3) {
          console.log('cannot place order, orders reached for month')
        } else {
          db.query(insertOrderSql, [quantity, total, res[0].id], (err) => {
            if(err){
              console.log(err, 'final error');
            } else {
              console.log('we hit a success and need to insert and did it');
            } 
          });
        };
      });
    }
  })
};

const updateOrder = (id, callback) => {
  db.query(
    `UPDATE transactions SET fulfilled = true WHERE fulfilled = false and id = ${id}`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      };
    });
};

const deleteOrder = (id, callback) => {
  db.query(
    `DELETE FROM transactions WHERE id = ${id}`, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      };
    });
};

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
};