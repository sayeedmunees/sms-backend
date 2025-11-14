const students = require("../model/studentModel");

// add student
exports.addStudentController = async (req, res) => {
  // logic
  const { name, email, course, batch } = req.body;
  console.log({ name, email, course, batch });
  try {
    const existingStudent = await students.findOne({ email });
    if (existingStudent) {
      res.status(400).json("Existing Student");
    } else {
      const newStudent = new students({
        name,
        email,
        course,
        batch,
      });
      await newStudent.save(); // mongodb save
      res.status(200).json(newStudent);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// view student
exports.viewStudentsController = async (req, res) => {
  console.log("Inside view Students controller");

  try {
    const allStudents = await students.find();
    if (allStudents) {
      res.status(200).json(allStudents);
    } else {
      res.status(400).json("No students data available");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update student
exports.updateStudentController = async (req, res) => {
  // logic
  const { email } = req.body;
  console.log(req.body);
  try {
    const existingStudent = await students.findOne({ email });
    if (existingStudent) {
      const updatedStudent = await students.findOneAndUpdate(
        { email },
        req.body
      );
      res.status(200).json("Updated Succesfully", updatedStudent);
    } else {
      res.status(200).json("No Student Existing");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete student
exports.deleteStudentController = async (req, res) => {
  // logic
  const { email } = req.body;
  console.log({ email });
  try {
    const existingStudent = await students.findOne({ email });
    if (existingStudent) {
      const deletedStudent = await students.findOneAndDelete({ email });
      res.status(200).json("Deleted Succesfully", deletedStudent);
    } else {
      res.status(200).json("Not Student Existing");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

