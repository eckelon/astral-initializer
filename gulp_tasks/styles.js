const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const atImport = require('postcss-import');
const selector = require('postcss-custom-selectors');
const customProperties = require("postcss-custom-properties");
const nested = require('postcss-nested');
const reporter = require('postcss-reporter');
const rename = require('gulp-rename');

const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);


function styles() {
    var processors = [
        atImport,
        reporter({
            clearMessages: true
        }),
        nested,
        customProperties,
        selector
    ];

    return gulp.src(conf.path.src('postcss/styles.css'))
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(rename('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.path.tmp()))
        .pipe(browserSync.stream());

}
