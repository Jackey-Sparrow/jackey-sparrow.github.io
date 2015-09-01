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

var rootPath = 'ionic/';

var cssPath = [
    rootPath + 'app/content/css/style.css',
    rootPath + 'app/content/css/animate.min.css',
    rootPath + 'app/content/css/animate-leave.css'
];

gulp.task('minCss', function () {
    return gulp.src(cssPath)
        .pipe(minifyCss())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest(rootPath + 'build/css'));
});

var libPath = [
    rootPath + 'app/global.js',
    rootPath + 'lib/20_angular-translate/angular-translate.js',
    rootPath + 'lib/30_ngCordova/dist/ng-cordova.js',
    rootPath + 'app.js',
    rootPath + 'app/translate-config.js'
];

gulp.task('libJs', function () {
    return gulp.src(libPath)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('lib.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'));
});

var modulePath = [
    rootPath + 'platform/*.js',
    rootPath + 'contacts/*.js',
    rootPath + 'language/*.js',
    rootPath + 'login/*.js',
    rootPath + 'setting/*.js',
    rootPath + 'tweet/*.js'
];

gulp.task('moduleJs', function () {
    return gulp.src(modulePath)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('module.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'));
});

var subModulePath = [
    rootPath + 'contacts/*/*.js',
    rootPath + 'language/*/*.js',
    rootPath + 'login/*/*.js',
    rootPath + 'platform/*/*.js',
    rootPath + 'setting/*/*.js',
    rootPath + 'tweet/*/*.js'
];

gulp.task('submoduleJs', function () {
    return gulp.src(subModulePath)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('submodule.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'));
});


gulp.task('clean', function () {
    return gulp.src([rootPath + 'build/js/*.js'], {read: false})
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

var allPaths = [
    rootPath + 'build/js/lib.min.js',
    rootPath + 'build/js/module.min.js',
    rootPath + 'build/js/submodule.min.js'
];

gulp.task('all.min', function () {
    return gulp.src(allPaths)
        .pipe(ngMin({dynamic: true}))
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(rootPath + 'build/js'));
});


gulp.task('default', ['clean', 'minCss', 'libJs', 'moduleJs', 'submoduleJs']);
gulp.task('all-min', ['all.min']);