/**
 * Global Config object with paths to project partials
 * @type {{ Object }}
 */

global.path = {
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
    js: 'src/js/**/*.js',
    vendorJS: ['bower_components/angular/angular.min.js'],
    styles: 'src/styles/*.scss',
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

global.config = {
  server: {
    baseDir: './build'
  },
  tunnel: false,
  host: 'localhost',
  port: 8080,
  logPrefix: 'bratishka'
};
