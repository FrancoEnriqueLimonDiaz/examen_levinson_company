const express = require("express");
var fetch = require("node-fetch");
const app = express();
let array_male = [];
let array_female = [];
var text;

fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen2", 
{
  headers: ({
    'Authorization': 'G9zn5KTz8y2PMll11TXx', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }), 
})
.then((response) => response.json())
.then((data) => {
  var set_entries = Object.values(data)
  set_entries.forEach(element => {
    if (element.gender == "Male") {
      array_male.push(element.gender)
    }else{
      array_female.push(element.gender)
    }
  });
  text = `{"male":"${array_male.length}", "female":"${array_female.length}"}`
})

app.listen(3010, () => {
  console.log("Starting exam in 3010");
});

app.get("/", (req, res) => {
  res.send(`<h1>${text}</h1>`);
});
