var gulp = require('gulp');
var sass = require('gulp-sass');
var base64 = require('gulp-base64');
var cleanCSS = require('gulp-clean-css');


gulp.task('sass', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(base64({
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build/css'))
});