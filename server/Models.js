const db = require('../db');

const getOrder = (id, callback) => {
  console.log(id);
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