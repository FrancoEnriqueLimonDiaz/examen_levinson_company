const express = require("express");
var fetch = require("node-fetch");
const app = express();
let array_male = [];

fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen2", 
{
  headers: ({
    'Authorization': 'G9zn5KTz8y2PMll11TXx', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }), 
})
.then((response) => response.json())
.then((data) => {
  set_entries = Object.values(data)
  set_entries.forEach(element => {
    array_male.push(element);
  });
})

console.log(array_male)