'use strict';

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    sourcemaps = require('gulp-sourcemaps');

var vendorPaths = path.src.vendorJS.join(', ');


gulp.task('js:dev', function() {
  gulp.src([vendorPaths, path.src.js])
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});


gulp.task('js:prod', function() {
  gulp.src([vendorPaths, path.src.js])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.build.js));
});
