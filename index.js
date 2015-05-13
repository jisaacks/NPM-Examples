// -- Load Modules -- //

var express   = require("express");
var mincer    = require("mincer");
var mincerEnv = require("./mincer_env");


// -- Setup Express -- //

var app = express();


// Set jade as view engine
app.set('view engine', 'jade');


// Set public assets
app.use(express.static(process.cwd() + '/public'));

// Setup mincer
mincer.logger.use(console);
app.use("/assets", mincer.createServer(mincerEnv));

// -- Routes -- //

app.get('/', function (req, res) {
  res.render('index');
});


// -- Start Server -- //

console.log("listening on :8025");
app.listen(8025);
