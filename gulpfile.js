var gulp      = require("gulp");
var notify    = require("gulp-notify");
var plumber   = require("gulp-plumber");
var bower     = require("main-bower-files");
var _         = require("underscore");
var mince     = require("gulp-mincer");
var mincerEnv = require("./mincer_env");

function notifyErr() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}



//==================================================================
//  WATCH
//==================================================================

gulp.task("watch", function() {
  gulp.watch("bower.json", ["bower:assets"]);
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


//==================================================================
//  MINCER
//==================================================================

gulp.task("mincer", function() {
  gulp.src("assets/js/application.js")
    .pipe(notifyErr())
    .pipe( mince(mincerEnv) )
    //.pipe( uglify() )
    .pipe( gulp.dest("public/assets") );

  gulp.src("assets/css/application.css")
    .pipe(notifyErr())
    .pipe( mince(mincerEnv) )
    //.pipe( minify() )
    .pipe( gulp.dest("public/assets") );
});
