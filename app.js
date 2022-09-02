const express = require("express");
var fetch = require("node-fetch");
const app = express();
const by_make= {};
let names = [];


fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen3", 
{
  headers: ({
    'Authorization': 'G9zn5KTz8y2PMll11TXx', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }), 
})
.then((response) => response.json())
.then((data) => {
  //get the name of each element
  data.forEach(element => {
    names.push(element.make)
  });
  //get the number of repetition.
  names.forEach(element => {
    by_make[element] = (by_make[element] || 0) + 1;
  });
  //add the names into object.
  var exam = { 
    by_make
  }
  console.log(exam)
})





