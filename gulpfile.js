/**
 * Created by Jackey Li on 2015/8/18.
 */

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    rimraf = require('gulp-rimraf'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    watch = require('gulp-watch');


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

var basePath = './www';

gulp.task('index', function () {
    //basePath + '/**/*.js' : all files in basePath
    //basePath + '/*/*.js' : the first level in basePath
    //basePath + '/*/*/*.js' : the second level in basePath
    //'!' + basePath + '/lib/*/*.js' : ignore the files

    watch(basePath + '/**/*.js', {base: basePath}, function () {
        return gulp.src('./build/index.html')

            .pipe(inject(gulp.src([basePath + '/app/**/*.css'], {read: false}), {
                name: 'css',
                addRootSlash: false
            }), {relative: true})

            .pipe(inject(gulp.src([basePath + '/*/*.js'], {read: false}), {
                name: 'module',
                addRootSlash: false
            }), {relative: true})

            .pipe(inject(gulp.src([basePath + '/platform/*/*.js'], {read: false}), {
                name: 'platform',
                addRootSlash: false
            }), {relative: true})


            .pipe(inject(gulp.src([basePath + '/*/*/*.js', '!' + basePath + '/lib/*/*.js', '!' + basePath + '/platform/*/*.js'], {read: false}), {
                name: 'submodule',
                addRootSlash: false
            }), {relative: true})
            .pipe(gulp.dest('./build'));
    });

});


gulp.task('default', ['clean', 'buildJs']);
