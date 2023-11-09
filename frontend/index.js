const express = require("express");
const app = express();
const port = 3000;

//define path
const path = require("path");

// set view engine
app.set("view engine","ejs");
//set path of views engine
 app.set("views",path.join(__dirname,"/views"))

// Serving Static Files
app.use(express.static(path.join(__dirname,"public")));



// render main page
app.get("/",(req,res)=>{
    res.render("main");
})

app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`);
})