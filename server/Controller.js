const getOrder = (req, res) => {
  const { id } = req.params;
  console.log(id);
}

const saveOrder = (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(firstName, lastName);
};

const updateOrder = (req, res) => {
  const { id, fulfilled } = req.body;
  console.log(id, fulfilled);
}

const deleteOrder = (req, res) => {
  const { id } = req.params;
  console.log(id);
}

module.exports = {
  getOrder,
  saveOrder,
  updateOrder,
  deleteOrder
}