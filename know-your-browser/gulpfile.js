/**
 * Created by Jackey Li on 2015/12/15.
 */

var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngMin = require('gulp-ngmin');

var rootPath = '';

var cssPath = [
    rootPath + 'lib/*/*.css',
    rootPath + 'app/**/*.css',
    rootPath + 'desktop/**/*.css'
];

gulp.task('minCss', function () {
    return gulp.src(cssPath)
        .pipe(minifyCss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest(rootPath + 'build/css'));
});

var libPath = [
    rootPath + 'lib/01_angular/angular.js',
    rootPath + 'lib/01_angular/angular-ui-router.js',
    rootPath + 'lib/05_angular-chart/Chart.js',
    rootPath + 'lib/05_angular-chart/angular-chart.js'
];

gulp.task('libJs', function () {
    return gulp.src(libPath)
        //.pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('lib.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'))
});

var moduleJsPath = [
    rootPath + 'app.js',
    rootPath + 'app/*.js',
    rootPath + 'app/components/*/*.js',
    rootPath + 'app/services/*.js',
    rootPath + 'desktop/*.js',
    rootPath + 'desktop/services/*.js',
    rootPath + 'desktop/controllers/*.js',
    rootPath + 'desktop/directives/*.js'
];

gulp.task('moduleJs', function () {
    return gulp.src(moduleJsPath)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('module.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'))
});

var allJs = [
    rootPath + 'build/js/*.js'
];

gulp.task('allJs', function () {
    return gulp.src(allJs)

        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'))
});

//gulp.task('default', ['minCss', 'libJs', 'moduleJs','allJs']);
gulp.task('default', ['allJs']);