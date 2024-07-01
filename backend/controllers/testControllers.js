const testControllers = (req, res) => {
  res.status(200).send({
    message: "Test Route",
    success: true,
  });
};

module.exports = { testControllers };
