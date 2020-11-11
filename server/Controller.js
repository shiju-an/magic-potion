const Models = require('./Models.js');

const getOrder = (req, res) => {
  const { id } = req.params;
  Models.getOrder(id, (err, data) => {
    if (err) {
      console.log(err, 'get error');
      res.status(404).send();
    } else if (data.length === 0) {
      console.log('no id found');
      res.status(404).send();
    } else {
      console.log('get success');
      res.status(200).send(data);
    };
  });
};

const saveOrder = (req, res) => {
  const newOrder = req.body;
  Models.saveOrder(newOrder, (err, data) => {
    if (err) {
      console.log(err, 'save error');
      res.status(404).send();
    } else if (data[0].totalQuantity) {
      console.log('total quantity reached for the month');
      res.status(404).send();
    } else {
      console.log(JSON.stringify(data))
      res.status(201).send(JSON.stringify(data.insertId));
    };
  });
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  Models.updateOrder(id, (err, data) => {
    if (err) {
      console.log(err, 'update error');
      res.status(404).send();
    } else if (data.affectedRows === 0) {
      console.log('invalid id');
      res.status(404).send();
    } else {
      console.log('update success');
      res.status(204).send();
    };
  });
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  Models.deleteOrder(id, (err, data) => {
    if (err) {
      res.status(404).send();
    } else if (data.affectedRows === 0) {
      console.log('no id found');
      res.status(404).send();
    } else {
      console.log('delete success');
      res.status(204).send();
    };
  });
};

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
}