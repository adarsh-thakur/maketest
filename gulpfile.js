const gulp =  require('gulp');
const browserSync = require('browser-sync').create();


gulp.task('serve',function(){
  browserSync.init({
    server:'http://localhost:4200/maketest/'
  });
  gulp.watch(["./maketest/*.html"],browserSync.reload());
});

gulp.task('default', gulp.series('serve'));
