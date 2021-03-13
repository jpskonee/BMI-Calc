//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
  let fNUm = req.body.num1;
  let sNUm = req.body.num2;

  let result = parseInt(fNUm) + parseInt(sNUm);

  res.send("Thanks for posting :" + result)
})


//bmi calculator
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalc.html")
});

app.post("/bmicalculator", function (req, res){
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);

  let bmi = weight/(height * height);

  res.send(`Your BMI is: ${bmi}`)
})



app.listen("3000", function(){
    console.log("Server is running at port 3000");
});


