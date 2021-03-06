// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
app.set("trust proxy", true)
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// API ENDPOINT
app.get("/api/whoami", function (req, res) {
  var ip = req.ip || req.ips
  var lan = req.acceptsLanguages()
  var os = req.headers["user-agent"]

  res.json({"ipaddress": ip, "language": lan, "software": os});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//To use it locally we comment the above listener
//app.listen(5000, console.log("Listening on local port 5000..."))
