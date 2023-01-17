const express = require("express");

const promosRouter = express.Router();
const { mainCost } = require("../controllers/shipping-cost");

promosRouter.get("/cost", mainCost);

module.exports = promosRouter;
