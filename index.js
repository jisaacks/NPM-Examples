// -- Load Modules -- //

var express     = require("express");


// -- Setup Express -- //

var app = express();

// Set jade as view engine
app.set('view engine', 'jade');

// Set public assets
app.use(express.static(process.cwd() + '/public'));


// -- Routes -- //

app.get('/', function (req, res) {
  res.render('index', {
    name  : "Student",
    title : "Welcome to Jade"
  });
});


// -- Start Server -- //

console.log("listening on :8025");
app.listen(8025);
