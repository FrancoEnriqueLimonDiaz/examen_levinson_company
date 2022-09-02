const express = require("express");
var fetch = require("node-fetch");
const app = express();
const by_make= {};
const by_model= {};
const by_color= {};

let names = [];
let models = [];
let colors = [];

fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen3", 
{
  headers: ({
    'Authorization': 'G9zn5KTz8y2PMll11TXx', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }), 
})
.then((response) => response.json())
.then((data) => {

  // names
  data.forEach(element => {
    names.push(element.make)
  });
  // names
  names.forEach(element => {
    by_make[element] = (by_make[element] || 0) + 1;
  });

  // model
  data.forEach(element => {
    models.push(element.model)
  });
  // model
  models.forEach(element => {
    by_model[element] = (by_model[element] || 0) + 1;
  });

  // color
  data.forEach(element => {
    colors.push(element.color)
  });
  // color
  colors.forEach(element => {
    by_color[element] = (by_color[element] || 0) + 1;
  });



  // names
  var exam = { 
    by_make, by_model, by_color
  }
  
  console.log(exam)
})





