// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const router = require("./router")

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


// Here is the endpoint.
// We use a router from router.js for a cleaner code, for all methods starting with url "/api"
app.use("/api", router)

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//To use it locally we comment the above listener
//app.listen(5000, console.log("Listening on local port 5000..."))
