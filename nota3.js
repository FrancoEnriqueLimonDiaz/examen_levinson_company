const express = require("express");
var fetch = require("node-fetch");
const app = express();
let google = [];
let sound = [];
var set_entries;
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
  set_entries = Object.values(data)
  set_entries.forEach(element => {
    if (element.email.match("google")){
      // console.log(element.email)
      google.push(element.email);
    }else if(element.email.match("soundcloud")){
      // console.log(element.email)
      sound.push(element.email);
    }
  });
  text = `{"google":"${google.length}", "soundcloud":"${sound.length}"}`;
})

app.listen(3010, () => {
  console.log("Starting exam in 3010");
});

app.get("/", (req, res) => {
  res.send(`<h1>${text}</h1>`);
});
