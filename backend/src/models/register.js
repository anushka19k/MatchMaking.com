const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  gender: {
    type: "string",
    isrequired: true,
  },
  firstname: {
    type: "string",
    isrequired: true,
  },
  lastname: {
    type: "string",
    isrequired: true,
  },
  date: {
    type: 'number',
    isrequired: true
  },
  month: {
    type: 'number',
    isrequired: true
  },
  year: {
    type: 'number',
    isrequired: true
  },
  religion: {
    type: 'string',
    isrequired: true
  },
  community: {
    type: 'string',
    isrequired: true
  },
  country: {
    type: 'string',
    isrequired: true
  },
  profession: {
    type: 'string',
    isrequired: true
  },
  phonenumber: {
    type: 'number',
    isrequired: true
  },
  email: {
    type: "string",
    isrequired: true,
  },
  password: {
    type: "string",
    isrequired: true,
  },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`the current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`the current password is ${this.password}`);
  }
  next();
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
