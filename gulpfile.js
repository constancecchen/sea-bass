var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');

// Sass compiling
gulp.task('css', function() {
  return gulp.src('css/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('css/'))
});
/* Depending on the project and team size, also consider adding:
 * https://www.npmjs.com/package/gulp-uncss
 * https://github.com/addyosmani/critical
 * https://github.com/milworm/gulp-css-gsub
 * https://www.npmjs.com/package/gulp-scss-lint
 */

// JS compiling
gulp.task('js', function() {
  return gulp.src(['js/**/*.js', '!js/**/*.min.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

// Localhost and live reload
gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Putting it all together
gulp.task('default', ['css', 'js', 'webserver'], function() {
  gulp.watch('css/**/*.scss', ['css']);
  gulp.watch(['js/**/*.js', '!js/**/*.min.js'], ['js']);
})
