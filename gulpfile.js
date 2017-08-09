var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCss = require('gulp-clean-css');
var inject = require('gulp-inject');
var concat = require('gulp-concat');

// gulp.task('index', function () {
//     var target = gulp.src('app/index.html');
//     // It's not necessary to read the files (will speed up things), we're only after their paths:
//     var sources = gulp.src(['./app/**/*.js', 'app/**/*.css'], {read: false});
//
//     return target.pipe(inject(sources, {ignorePath: '/app/', addRootSlash: false}))
//         .pipe(gulp.dest('app'));
// });

gulp.task('index', function () {
    var target = gulp.src('app/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./app/**/*.module.js','./app/**/*.js', 'app/**/*.css'], {read: false});

    return target.pipe(inject(sources, {ignorePath: '/app/', addRootSlash: false}))
        .pipe(gulp.dest('app'));
});

gulp.task('sass', function(){
    return gulp.src('app/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('scripts', function() {
    return gulp.src(['./app/**/*.module.js','./app/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app'));
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('**/*.js', uglify()))
        .pipe(gulpIf('**/*.css', minifyCss()))
        .pipe(gulp.dest('dist'))
});


gulp.task('serve', ['index', 'browserSync', 'sass'], function(){
    gulp.watch('app/**/*.scss', ['sass']);
    // Reloads the browser whenever html or js files change
    gulp.watch('app/**/*.html').on('change',browserSync.reload);
    gulp.watch('app/**/*.js').on('change',browserSync.reload);
});

