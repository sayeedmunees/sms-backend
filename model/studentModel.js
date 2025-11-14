// import mongoose
const mongoose = require("mongoose");

// create schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const students = mongoose.model("students", studentSchema);

module.exports = students;
