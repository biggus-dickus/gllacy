'use strict';

/**
 * Components and links
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cmq = require('gulp-combine-mq'),
    cssnano = require('gulp-cssnano'),
    merge = require('merge-stream'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    spritesmith = require('gulp.spritesmith'),
    pngquant = require('imagemin-pngquant'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),

  // BrowserSync
  browserSync = require("browser-sync"),
  reload = browserSync.reload;

var path = {
  build: {
    html: 'build/',
    tpl: 'build/templates/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    sprite: 'build/img/sprite/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'src/*.html',
    tpl: 'src/templates/*.tpl.html',
    js: 'src/js/main.js',
    styles: 'src/styles/main.scss',
    img: 'src/img/**/*.*',
    sprite: 'src/img/sprite-src/*.png',
    spritesheet: 'src/styles/generated/',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    tpl: 'src/templates/*.tpl.html',
    js: 'src/js/**/*.js',
    styles: 'src/styles/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

var config = {
  server: {
      baseDir: './build'
  },
  tunnel: false,
  host: 'localhost',
  port: 3000,
  logPrefix: 'bratishka'
};



/**
 * Gulp tasks
 */
gulp.task('clean', function(cb) {
  rimraf(path.clean, cb);
});


gulp.task('html:build', function() {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});


gulp.task('tpl:build', function() {
  gulp.src(path.src.tpl)
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(path.build.tpl))
  .pipe(reload({stream: true}));
});


gulp.task('css:build', function() {
  gulp.src(path.src.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
      }))
    .pipe(cmq())
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.stream());
});


gulp.task('js:build', function() {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});


gulp.task('img:build', function() {
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.stream());
});

gulp.task('sprite:build', function() {
  // Generate our spritesheet
  var spriteData = gulp.src(path.src.sprite).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.scss',
    imgPath: '../img/sprite/sprite.png', // relative path to sprite.png from generated CSS
    padding: 2
  }));

  // Pipe image stream onto disk
  var imgStream = spriteData.img
    .pipe(gulp.dest(path.build.sprite));

  // Pipe CSS stream onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest(path.src.spritesheet));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);
});


gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});


gulp.task('build', [
  'html:build',
  'tpl:build',
  'css:build',
  'js:build',
  'fonts:build',
  'img:build'
]);


gulp.task('webserver', function () {
  browserSync(config);
});


gulp.task('watch', function() {
  watch([path.watch.html], function() {
    gulp.start('html:build');
  });
  watch([path.watch.tpl], function() {
    gulp.start('tpl:build');
  });
  watch([path.watch.styles], function() {
    gulp.start('css:build');
  });
  watch([path.watch.js], function() {
    gulp.start('js:build');
  });
  watch([path.watch.img], function() {
    gulp.start('img:build');
  });
  watch([path.watch.fonts], function() {
    gulp.start('fonts:build');
  });
});


gulp.task('default', ['build', 'webserver', 'watch']);
