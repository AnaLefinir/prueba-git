/**
 * Created by Anita on 14/04/2016.
 */
var gulp = require('gulp'),
    path = {},
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    useref = require('gulp-useref'),
    rename = require('gulp-rename'),
    gulpIf = require('gulp-if');


gulp.task('demo', function () {
    return gulp.src('source/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('useref', function () {
    return gulp.src('source/html/index.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});

path.watch = {
    javascript : ['source/js/*.js']

};

path = {
    html :['source/html/*.html']
}

gulp.task('watch', function(){
   gulp.watch(path.watch.javascript, function(){
       console.log('alguien esta toqueteando tu código!!!');
   })
});

gulp.task('html', function(){
   return gulp.src(path.html)
       .pipe(rename({extname: '.phtml'}))
       .pipe(gulp.dest('dist'))
});
