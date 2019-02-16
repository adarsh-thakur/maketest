const gulp = require('gulp');
const browserSync = require('browser-sync').create();


gulp.task('serve', function() {
  browserSync.init({
    server: './'
  });
});

gulp.task('watch', function() {
      return new Promise(function(resolve, reject) {
    gulp.watch(['*.html','src/*'], browserSync.reload);
    resolve();
  });
});
gulp.task('copy', copy);

    function copy() {
      return new Promise(function(resolve, reject) {
        gulp.src('./node_modules/bootstrap/dist/css/*').pipe(gulp.dest('./dist/css'));
        gulp.src('./node_modules/bootstrap/dist/js/*').pipe(gulp.dest('./dist/js'));
        gulp.src('./node_modules/jquery/dist/*').pipe(gulp.dest('./dist/js'));
        gulp.src('./node_modules/popper.js/dist/popper.min.js').pipe(gulp.dest('./dist/js'));
        resolve();
      });
    }

    gulp.task('default', gulp.parallel('serve', 'watch'));
