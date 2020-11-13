const db = require('../db');

const getOrder = (id, callback) => {
  db.query(
    `SELECT * FROM transactions INNER JOIN users ON transactions.userId = users.id WHERE transactions.id = ?`, [id], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data[0]);
      };
    });
};

const saveOrder = (newOrder, callback) => {
  let { firstName, lastName, email, phone, street1, street2, city, state, zip, quantity, total, ccNum, expMM, expYY } = newOrder;
  let expDate = `${expMM}/${expYY}`
  let date = new Date();
  let currentMonth = date.getMonth() + 1;

  //EDIT CHECKUSER SQL AND INSERTORDERSQL AND INSERTUSERSQL PARAMS

  let checkUserSql = `SELECT id FROM users WHERE first_name = ? AND last_name = ? AND email = ? AND phone = ? LIMIT 1`;

  let insertOrderSql = `INSERT INTO transactions (quantity, total, fulfilled, order_date, userId) VALUES (?, ?, false, curdate(), ?)`;

  let insertUserSql = `INSERT INTO users (first_name, last_name, email, phone, street1, street2, city, us_state, zip, cc_num, exp_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  let selectId = 'SELECT id FROM users ORDER BY id DESC LIMIT 1';

  let checkQuantitySql = 
  `SELECT SUM(quantity) totalQuantity FROM transactions INNER JOIN users ON transactions.userId = users.id WHERE transactions.userId = ? AND MONTH(order_date) = ?`;

  db.query(checkUserSql, [firstName, lastName, email, phone], (err, res) => {
    if (err) {
      callback(err);
    } else if (res.length === 0) {
      db.query(insertUserSql, [firstName, lastName, email, phone, street1, street2, city, state, zip, ccNum, expDate], (err) => {
        if(err) {
          callback(err);
        } else {
          db.query(selectId, (err, id) => {
            if (err) {
              callback(err);
            } else {
              db.query(insertOrderSql, [quantity, total, id[0].id], (err, data) => {
                if(err){
                  callback(err);
                } else {
                  console.log('how did this work');
                  callback(null, data);
                } 
              });
            }
          });
        };
      });
    } else {
      db.query(checkQuantitySql, [res[0].id, currentMonth], (err, totalQty) => {
        if (err) {
          callback(err);
          console.log('error at checking total quantity');
        } 
        else if (totalQty[0].totalQuantity + parseInt(quantity) > 3) {
          console.log('cannot place order, orders reached for month')
          callback(null, totalQty);
        } else {
          db.query(insertOrderSql, [quantity, total, res[0].id], (err, data) => {
            if(err){
              callback(err);
            } else {
              console.log('we hit a success and need to insert and did it');
              callback(null, data);
            } 
          });
        };
      });
    }
  })
};

const updateOrder = (id, callback) => {
  db.query(
    `UPDATE transactions SET fulfilled = true WHERE fulfilled = false and id = ?`, [id], (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      };
    });
};

const deleteOrder = (id, callback) => {
  db.query(
    `DELETE FROM transactions WHERE id = ?`, [id], (err, data) => {
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