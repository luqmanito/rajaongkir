const express = require("express");
const promosRouter = require("./shiping-cost");
const mainRouter = express.Router();

const prefix = "/api/show";

mainRouter.use(`${prefix}/promos`, promosRouter);

mainRouter.get("/", (req, res) => {
    res.json({
      msg: "Welcome2",
    });
  });

  module.exports = mainRouter;