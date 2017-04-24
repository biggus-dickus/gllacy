'use strict';

const gulp = require('gulp'),
    requireDir = require('require-dir'),
    watch = require('gulp-watch'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

// Config & tasks
requireDir('./gulp', {recurse: true});


/**
 * General tasks
 */
gulp.task('webserver', function () {
  browserSync(config);
});

gulp.task('clean', function(cb) {
  rimraf(path.clean, cb);
});

gulp.task('data:copy', function() {
  gulp.src('src/data/*json')
      .pipe(gulp.dest('build/data/'))
      .pipe(reload({stream: true}));
});


gulp.task('watch', function() {
  watch([path.watch.html], function() {
    gulp.start('html:dev');
  });
  watch([path.watch.tpl], function() {
    gulp.start('tpl:dev');
  });
  watch([path.watch.styles], function() {
    gulp.start('css:dev');
  });
  watch([path.watch.js], function() {
    gulp.start('js:dev');
  });
  watch([path.watch.img], function() {
    gulp.start('img:build');
  });
  watch([path.watch.fonts], function() {
    gulp.start('fonts:build');
  });
});


gulp.task('prod', [
  'img:build',
  'sprite:build',
  'html:prod',
  'tpl:prod',
  'data:copy',
  'css:prod',
  'js:prod',
  'fonts:build'
]);

gulp.task('develop', [
  'html:dev',
  'tpl:dev',
  'data:copy',
  'css:dev',
  'js:dev',
  'fonts:build',
  'img:build'
]);

gulp.task('default', ['prod', 'webserver']);
gulp.task('dev', ['develop', 'webserver', 'watch']);
