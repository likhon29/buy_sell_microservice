const express = require("express");
const cors = require("cors");
const path = require("path");
const { appEvents, shopping } = require("./api");

module.exports = async (app, channel) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  //   api
  // appEvents(app);

  //   const channel = await CreateChannel();

  shopping(app,channel);
  // error handling
};
