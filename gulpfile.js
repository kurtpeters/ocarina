var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {
    return gulp.src('./src/ocarina.js')
    .pipe(concat('ocarina.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});