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
    watch = require('gulp-watch'),
    inject = require('gulp-inject'),
    minifyCss = require('gulp-minify-css'),
    ngMin = require('gulp-ngmin');


var cssPath = [
    //'ionic/lib/10_ionic/css/ionic.css',
    'ionic/app/content/css/style.css',
    'ionic/app/content/css/animate.min.css',
    'ionic/app/content/css/animate-leave.css'
];

gulp.task('minCss', function () {
    return gulp.src(cssPath)
        .pipe(minifyCss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('ionic/build/css'));
});

var libPath = [
    'ionic/lib/10_ionic/js/ionic.bundle.js',
    'ionic/lib/20_angular-translate/angular-translate.js'
];

gulp.task('libJs', function () {
    return gulp.src(libPath)
        .pipe(uglify())
        .pipe(concat('lib.min.js'))
        .pipe(gulp.dest('ionic/build/js'));
});

var modulePath = [
    'ionic/platform/*.js',
    'ionic/contacts/*.js',
    'ionic/language/*.js',
    'ionic/login/*.js',
    'ionic/setting/*.js',
    'ionic/tweet/*.js'
];

gulp.task('moduleJs', function () {
    return gulp.src(modulePath)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('module.min.js'))
        .pipe(gulp.dest('ionic/build/js'));
});

var subModulePath = [
    'ionic/contacts/*/*.js',
    'ionic/language/*/*.js',
    'ionic/login/*/*.js',
    'ionic/platform/*/*.js',
    'ionic/setting/*/*.js',
    'ionic/tweet/*/*.js'
];

gulp.task('submoduleJs', function () {
    return gulp.src(subModulePath)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('submodule.min.js'))
        .pipe(gulp.dest('ionic/build/js'));
});


gulp.task('clean', function () {
    return gulp.src(['ionic/build/js/*.js'], {read: false})
        .pipe(rimraf({force: true}));
});

var basePath = './ionic';

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


gulp.task('default', ['clean', 'minCss', 'moduleJs', 'submoduleJs']);
