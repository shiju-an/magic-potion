const Models = require('./Models.js');

const getOrder = (req, res) => {
  const { id } = req.params;
  Models.getOrder(id, (err, data) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('okay', data);
    };
  });
};

const saveOrder = (req, res) => {
  const newOrder = req.body;
  Models.saveOrder(newOrder, (err, data) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('saved', data);
    };
  });
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  Models.updateOrder(id, (err, data) => {
    if (err) {
      console.log('error', err);
    } else {
      if (data.affectedRows === 0) {
        console.log('404'); //no rows updated
      } else {
        console.log('success update');
      };
    };
  });
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  Models.deleteOrder(id, (err, data) => {
    if (err) {
      console.log('error', err);
    } else {
      console.log('deleted');
    };
  });
};

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
}