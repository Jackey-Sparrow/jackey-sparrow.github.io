/**
 * Created by Jackey Li on 2015/8/18.
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


var jsPaths = [

    //'www/js/angular/angular-translate.js',
    //'www/js/global.js',
    //'www/js/app.js',

    'www/js/platform/*.js',

    'www/js/language/services/*.js',
    'www/js/language/controllers/*.js',

    'www/js/login/*.js',

    'www/js/tweet/services/*.js',
    'www/js/tweet/controllers/*.js',

    'www/js/contacts/services/*.js',
    'www/js/contacts/controllers/*.js',


    'www/js/setting/controllers/*.js'


];

gulp.task('buildJs', function () {
    return gulp.src(jsPaths)
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('www/build'));
});


gulp.task('clean', function () {
    return gulp.src(['www/build/*.js'], {read: false})
        .pipe(rimraf({force: true}));
});


gulp.task('default', ['clean','buildJs']);
