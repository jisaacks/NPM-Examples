// -- Load Modules -- //

var express     = require("express");
var hbs         = require("express-handlebars");
var handlebars  = require("handlebars");


// -- Setup Express -- //

var app = express();

// Create Handlebars engine
var hbsEngine = hbs({
  extname       : 'hbs',     // Set template extension to .hbs
  defaultLayout : 'main',    // Set default layout
  handlebars    : handlebars // Use custom build of handlebars
});

// Register engine
app.engine('hbs', hbsEngine);

// Set engine as view engine
app.set('view engine', 'hbs');


// -- Routes -- //

app.get('/', function (req, res) {
  res.render('index', {
    name  : "Student",
    title : "Welcome to Handlebars"
  });
});


// -- Start Server -- //

console.log("listening on :8025");
app.listen(8025);
