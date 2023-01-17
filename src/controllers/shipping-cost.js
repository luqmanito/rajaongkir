const promosRepo = require("../repos/shipping-cost");


const mainCost = async (req, res) => {
    try {
      const result = await promosRepo.getCost(12);
      res.status(200).json({ result: result.data });
    } catch (error) {
      console.log(error);
    }
  };

  const promosController = {
    mainCost
  };
  
  module.exports = promosController;