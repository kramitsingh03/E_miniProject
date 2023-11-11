const express = require("express");
const app = express();
const port = 3001;

//DataBase Json File setup
const Estore = require("./database/data.json");
let EstoreData = Estore.products;




//define path
const path = require("path");
const { title } = require("process");

// set view engine
app.set("view engine","ejs");
//set path of views engine
 app.set("views",path.join(__dirname,"/views"))

// Serving Static Files
app.use(express.static(path.join(__dirname,"public")));


// render main page
app.get("/",(req,res)=>{
    res.render("main",{EstoreData});
})
// render product page
app.get("/product.ejs",(req,res)=>{
    res.render("product");
})

app.listen(port,(req,res)=>{
    console.log(`listening to port ${port}`);
})