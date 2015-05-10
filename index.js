// -- Load Modules -- //

var express = require("express");


// -- Setup Express -- //

var app = express();


// Set jade as view engine
app.set('view engine', 'jade');


// Set public assets
app.use(express.static(process.cwd() + '/public'));
app.use("/vendor", express.static(process.cwd() + '/vendor'));


// -- Routes -- //

app.get('/', function (req, res) {
  res.render('index');
});


// -- Start Server -- //

console.log("listening on :8025");
app.listen(8025);