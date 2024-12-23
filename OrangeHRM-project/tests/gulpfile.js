import gulp from 'gulp';
import mocha from 'gulp-mocha';

gulp.task("test", function() {
  return gulp.src([
      "./loginTest.mjs",
      "./logoutTest.js"
    ])
    .pipe(mocha());
});