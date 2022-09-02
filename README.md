# examen_levinson_company
Examen de admission para Levinson company

```bash
  #Run
  npm intall -g nodemon
  #Run
  npm install
  #Run
  nodemon app
  #server in por 3010
  http://localhost:3010/
```

const express = require("express");
var fetch = require("node-fetch");
const app = express();
let array = [];
var set_entries;


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
  for (let index = 0; index < 10; index++) {
    array = [...array, index]
  }
})

console.log(array)
// set_entries = Object.values(data)
// set_entries.forEach(element => {
//   if (element.email.match("google")){
//     // console.log(element.email)
//     array.push('hello')
//   }else if(element.email.match("soundcloud")){
//     // console.log(element.email)
//   }
// });