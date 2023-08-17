const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const db = require("./config/db");
const userDetail = require("./models/details");
var cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
db();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));  

app.get("/view", async (req, res) => {
    const users =await  userDetail.find();
  
    res.json({ users: users });
});
app.post("/add", async (req, res) => {
  const addRes = await userDetail.create({
    name: req.body.name,
    age: req.body.age,
  });
  res.json({ user: addRes });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
