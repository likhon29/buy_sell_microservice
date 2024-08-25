const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.send("Welcome to Customer");
});

app.listen(8003, () => {
  console.log("Server is running on port 8003");
});
