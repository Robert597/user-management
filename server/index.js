const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDb = require("./server/database/connectDb");
const Link = require("./Models/Link");
const cors = require("cors");
var bodyParser = require('body-parser');
const morgan = require("morgan");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
//using cors
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

//parse request body parser
app.use(bodyParser.urlencoded({extended: true}));
//used for logging requests in the console
app.use(morgan("tiny"));

//load static files
app.use("/css", express.static(path.join(__dirname, "assets", "css")));
app.use("/js", express.static(path.join(__dirname, "assets", "js")));
// built-in middleware for json 
app.use(express.json());

connectDb();

app.use(require("./server/routes/router"))

mongoose.connection.once("open", () => {
    console.log("connected");
    app.listen(PORT, () => {
        console.log("server running on port:"+ PORT);
    })
})
