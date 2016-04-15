/**
 * Created by Anita on 13/04/2016.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('default', ['lint', 'compass'], function () {
    console.log('chuchi es lo mas lindo del universo!!! <3');
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('concat-css', function() {
    return gulp.src('app/*.css')
        .pipe(concat('*.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', ['clean'], function () {
    return gulp.src('app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('compass', ['clean'], function () {
    return gulp.src('app/*.scss')
        .pipe(compass({
            config_file: './compass-config.rb',
            css: 'dist/styles',
            sass: 'app'
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});