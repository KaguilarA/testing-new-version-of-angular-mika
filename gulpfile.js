const gulp = require('gulp'),
  sass = require('gulp-sass'),
  nodemon = require('gulp-nodemon'),
  paths = {
    impSass: './public/sources/styles/styles.scss',
    indexView: `./public/*.pug`,
    components: {
      views: './public/**/**/*.html',
      styles: './public/sources/styles/**/**/**.scss',
      js: './public/**/**/*.html',
    }
  };

gulp.task(`connect`, () => {
  nodemon()
})


gulp.task('reload', () => {
  gulp.src([paths.components.views, paths.components.styles, paths.components.js])
    .pipe(connect.reload())
  // .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  gulp.src(paths.impSass)
    .pipe(sass().on('error', sass.logError))
    // .pipe(cssnano())
    // .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./public/sources/'));
});

gulp.task('watch', () => {
  gulp.watch([paths.components.views, paths.components.styles, paths.components.js], gulp.series(['reload', 'to-do', 'styles'], () => {}))
  // .on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['connect', 'reload', 'styles', 'watch'], () => {}));
