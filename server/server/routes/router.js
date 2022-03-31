const express = require("express");
const route = express.Router();
const path = require("path");
const controllers = require("../controller/controller")



route.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
   });
   route.get("/addUser", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "views", "adduser.html"));
   });
   route.get("/updateUser", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "views", "updateuser.html"));
   });

   //create Api
   route.post("/api/Users", controllers.Create);
   route.get("/api/Users", controllers.find);
   route.put("/api/Users/:id", controllers.update);
   route.delete("/api/Users/:id", controllers.delete);
   module.exports = route