const gulp = require('gulp'),
  sass = require('gulp-sass'),
  nodemon = require('gulp-nodemon'),
  paths = {
    impSass: './public/sources/styles/styles.scss',
    indexView: `./public/*.pug`,
    components: {
      views: './public/**/**/*.html',
      styles: './views/styles/**/**/*.scss',
      js: './public/**/**/*.html',
    }
  };

gulp.task(`connect`, () => {
  nodemon()
})


gulp.task('reload', () => {
  gulp.src([paths.views, paths.styles])
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
  gulp.watch([paths.views, paths.styles], ['reload', 'to-do', 'styles'])
  // .on('change', browserSync.reload);
});

gulp.task('default', gulp.series(['connect', 'reload', 'styles', 'watch'], () => {}));