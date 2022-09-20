const { series, src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

const compress = function () {
    return src('src/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist'))
}

exports.default = series([compress])