const express = require("express");
const cors = require("cors");
const path = require("path");
const { products, appEvents } = require("./api");

const { CreateChannel } = require("./utils");
const ErrorHandler = require("./utils/error-handler");

module.exports = async (app, channel) => {
  app.use(express.json());
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  //api
  // appEvents(app);

  products(app, channel);

  // error handling
  app.use(ErrorHandler);
};
