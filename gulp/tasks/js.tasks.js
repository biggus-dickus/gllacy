'use strict';

const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;


gulp.task('js:dev', function() {
  gulp.src(path.src.js)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}));
});


gulp.task('js:prod', function() {
  gulp.src(path.src.js)
      .pipe(rigger())
      .pipe(uglify())
      .pipe(gulp.dest(path.build.js));
});
