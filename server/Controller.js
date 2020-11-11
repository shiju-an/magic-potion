const getOrder = (req, res) => {
  const { id } = req.params;
  console.log(id);
}

const saveOrder = (req, res) => {
  const { firstName, lastName } = req.body;
  console.log(firstName, lastName);
};



module.exports = {
  getOrder,
  saveOrder
}