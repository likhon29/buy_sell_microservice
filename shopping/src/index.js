const express = require("express");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.send("Welcome to shopping");
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
