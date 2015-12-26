var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


gulp.task('compress', function() {
  return gulp.src('persianMask.js')
    .pipe(uglify())
    .pipe(rename({
            suffix: '.min'
        }))
    .pipe(gulp.dest('dist'));
});