const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");

function html() {
  return gulp.src("app/index.html").pipe(gulp.dest("dist"));
}

function img() {
  return gulp.src("app/images/*.*").pipe(gulp.dest("dist/images"));
}

function css() {
  return gulp
    .src("app/scss/index.scss")
    .pipe(sass())
    .pipe(autoprefixer({ browsers: ["last 99 versions"], cascade: false }))
    .pipe(csso())
    .pipe(gulp.dest("dist/css"));
}

exports.build = gulp.series(html, css, img);
