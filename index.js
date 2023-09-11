const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res)=> {
    res.sendFile(__dirname+"/index.html")
})

app.listen(3000, ()=>{
 console.log("listening at port 3000");
})