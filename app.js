var fetch = require("node-fetch");
var result = [];
fetch("https://kpq7uxowd1.execute-api.us-east-2.amazonaws.com/dev/examen1", 
{
  headers: ({
    'Authorization': 'G9zn5KTz8y2PMll11TXx', 
    'Content-Type': 'application/x-www-form-urlencoded'
  }), 
}
)
.then(res => res.json())
.then(json => {
  var obj_json = JSON.parse(json)
  console.log(obj_json.length)
})