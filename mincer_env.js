var mincer = require("mincer");

// Add JSX Engine to Mincer
require("mincer-jsx")(mincer);

var env = new mincer.Environment();

env.appendPath("assets/js");
env.appendPath("assets/css");

env.appendPath("vendor/js");
env.appendPath("vendor/css");

module.exports = env;
