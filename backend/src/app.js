const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("./db/conn");
const User = require("./models/register");

const { json } = require("express");
let port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/adduser", async (req, res) => {
  try {
    const {
      gender,
      firstname,
      lastname,
      date,
      month,
      year,
      religion,
      community,
      country,
      profession,
      email,
      phonenumber,
      password,
    } = req.body;

    if (password) {
      const registerEmployee = await new User({
        gender:req.body.gender,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        date: req.body.date,
        month: req.body.month,
        year: req.body.year,
        religion:req.body.religion,
        community:req.body.community,
        country: req.body.country,
        profession: req.body.profession,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password: req.body.password,
      });

      const registered = await registerEmployee.save();
      res.status(201).send(registered);
      console.log(registered, "this is data");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

port = 4000;
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
module.exports = app;
