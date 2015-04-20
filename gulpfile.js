var gulp    = require("gulp");
var concat  = require("gulp-concat");
var less    = require("gulp-less");
var react   = require("gulp-react");
var notify  = require("gulp-notify");
var plumber = require("gulp-plumber");
var bower   = require("main-bower-files");
var _       = require("underscore");

var paths = {
  jsx:  "jsx/**/*.jsx",
  less:   "less/**/*.less",
}

function notifyErr() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}



//==================================================================
//  WATCH
//==================================================================

gulp.task("watch", function() {
  gulp.watch(paths.less, ["less"]);
  gulp.watch(paths.jsx, ["jsx"]);
  gulp.watch("bower.json", ["bower:assets"]);
});



//==================================================================
//  COMPILING ASSETS
//==================================================================

// -- JSX REACT -- //

gulp.task("jsx", function(){
  return gulp.src(paths.jsx)
    .pipe(notifyErr())
    .pipe(react())
    .pipe(gulp.dest("public/js/_jsx_compiled"));
});

// -- LESS -- //

gulp.task("less", function(){
  return gulp.src(paths.less)
    .pipe(notifyErr)
    .pipe(less())
    .pipe(gulp.dest("public/css"));
});



//==================================================================
//  BOWER ASSETS
//==================================================================

// -- ALL -- //

gulp.task("bower:assets", [
  "bower:assets:js",
  "bower:assets:css",
  "bower:assets:fonts",
  "bower:assets:dev"
]);

// -- JS -- //

gulp.task("bower:assets:js", function(){
  return gulp.src(bower({filter: "**/*.js"}))
    .pipe(notifyErr())
    .pipe(gulp.dest("vendor/js"));
});

// -- CSS -- //

gulp.task("bower:assets:css", function(){
  return gulp.src(bower({filter: "**/*.css"}))
    .pipe(notifyErr())
    .pipe(gulp.dest("vendor/css"));
});

// -- FONTS -- //

gulp.task("bower:assets:fonts", function(){
  return gulp.src(bower({filter: /\.(eot|svg|ttf|woff|woff2|otf)$/g}))
    .pipe(notifyErr())
    .pipe(gulp.dest("vendor/fonts"));
});

// -- DEV -- //

gulp.task("bower:assets:dev", function(){
  var files = _.difference(bower({includeDev: true}), bower());

  return gulp.src(files)
    .pipe(notifyErr())
    .pipe(gulp.dest("vendor/dev"));
});
