var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('compress', function (cb) {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['compress']);