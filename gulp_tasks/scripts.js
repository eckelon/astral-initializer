const gulp = require('gulp');
const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src(conf.path.src('**/*.js'))
    .pipe(gulp.dest(conf.path.tmp()));
}
