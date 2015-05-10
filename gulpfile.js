var gulp        = require("gulp");
var notify      = require("gulp-notify");
var plumber     = require("gulp-plumber");
var browserify  = require('gulp-browserify');

function notifyErr() {
  return plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  });
}

gulp.task("default", function() {
  return gulp.src("./assets/js/app.js")
    .pipe(notifyErr())
    .pipe(browserify({
      transform: ['babelify'],
      debug: true
    }))
    .pipe(gulp.dest('./public/js'));
});
