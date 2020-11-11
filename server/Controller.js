const getOrder = (req, res) => {
  const { id } = req.params;
  console.log(id);
}

// const saveOrder = (req, res) => {

// }

module.exports = {
  getOrder
}