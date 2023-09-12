const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();


app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res)=> {
  var processes = [];

  res.render("index", {
    processes: processes,
    option: "FCFS",
    inputA: req.body.arrivalTimes,
    inputB: req.body.burstTimes,
    ganttChart: processes,
    averages: processes,
  });
  //res.render("index.ejs");
})

app.listen(3000, ()=>{
 console.log("listening at port 3000");
})

module.exports.handler = serverless(app);
