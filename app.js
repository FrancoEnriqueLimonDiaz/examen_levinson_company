const express = require("express");
var fetch = require("node-fetch");
const app = express();
let array = [];

fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen1", 
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
    array.push(element);
  });
})

app.listen(3010, () => {
  console.log("Starting exam in 3010");
});

app.get("/", (req, res) => {
  res.send(`<h1 id="hello">${array}</h1>`);
});
