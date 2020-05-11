require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.json({
    speed: app.locals.speed,
  });
});

app.get("/setSpeed", (req, res, next) => {
  app.locals.speed = req.query.speed;
  res.status(200).send("OK");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port ${process.env.PORT}`);
});
