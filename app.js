const dotENV = require("dotenv");
dotENV.config()

const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet =require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp =require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const router = require("./src/routes/api");




const app = express();


app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb"  }));
app.use(cookieParser());
app.use(cors());
app.use(hpp());
app.use(mongoSanitize());
app.use(helmet());





//Database connect
let url = "mongodb://127.0.0.1:27017/lariv";

let options = {
  user : process.env.DB_USER,
  pass : process.env.DB_PASS,
  autoIndex: true,
  serverSelectionTimeoutMS: 50000,
};

mongoose.connect(url)
.then((res) => {
    console.log("Database connected");
})
.catch((err) => {
    console.error("Database connection error:", err);
});


let limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 1 minute
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later."
});
app.use(limiter);


//api end point
app.use("/api/v1",router)
app.use(express.static('client'))
app.use("/api/v1/get-file",express.static('client'))


module.exports = app;