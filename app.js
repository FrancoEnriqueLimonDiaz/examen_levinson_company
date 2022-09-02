const express = require("express");
var fetch = require("node-fetch");
const app = express();
let by_Make = []
let by_Model = []
let by_Color = []
let type_cars = []
let cars = []
const count1= {};
const count2 = {};
const count3 = {};

fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen3", 
{
  headers: ({
    'Authorization': 'G9zn5KTz8y2PMll11TXx', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }), 
})
.then((response) => response.json())
.then((data) => {
  // console.log(data)
  for (let index = 0; index < data.length; index++) {
    by_Make = [...by_Make, data[index].make];
    by_Model = [...by_Model, data[index].model];
    by_Color = [...by_Color, data[index].color];
  }
  type_cars = [...type_cars, by_Make, by_Model, by_Color]
  type_cars[0].forEach(element => {
    count1[element] = (count1[element] || 0) + 1;
  });
  type_cars[1].forEach(element => {
    count2[element] = (count2[element] || 0) + 1;
  });
  type_cars[2].forEach(element => {
    count3[element] = (count3[element] || 0) + 1;
  });
  var set_entrie1 = Object.entries(count1)
  var set_entrie2 = Object.entries(count2)    
  console.log(set_entrie1)
  console.log(set_entrie2)
  // console.log(Object.entries(count3))
  // const by_make = JSON.stringify(count1)
  // const by_model = JSON.stringify(count2)
  // const by_color = JSON.stringify(count3)
  //tenemos los tipos
  // console.log(by_make)
  // console.log(by_model)
  // console.log(by_color)
  //creamos los grupos

})



