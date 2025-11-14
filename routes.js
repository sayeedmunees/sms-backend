// import express
const express = require("express");

// import userController
const studentController = require("./controller/studentController.js");

// create instance
const route = new express.Router();

// path for add student
route.post("/add-student", studentController.addStudentController);

// path for view student
route.get("/view-students", studentController.viewStudentsController);

// path for update student
route.put("/update-student", studentController.updateStudentController);

// path for delete student
route.delete("/delete-student", studentController.deleteStudentController);

// routes export
module.exports = route;
