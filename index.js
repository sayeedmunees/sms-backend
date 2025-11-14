// import dotenv config
require("dotenv").config();

// import express library
const express = require("express");
// import cors
const cors = require("cors");
// import route
const route = require("./routes.js");
// import db connection files
require("./databaseConnection.js");

// Create server
const studentManagmentServer = express();

// server using cors
studentManagmentServer.use(cors());
studentManagmentServer.use(express.json()); //parse json middleware
studentManagmentServer.use(route);

// Create port
PORT = 4000 || process.env.PORT;

studentManagmentServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

studentManagmentServer.get("/", (req, res) => {
  res.status(200).send(`<h1>Server Started!!</h1>`);
});
