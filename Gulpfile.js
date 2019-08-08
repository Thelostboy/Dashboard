const { src, series, parallel, dest, watch } = require('gulp');
const sass = require('gulp-sass');

const sassTask = function(){
    return src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'));
};
const watchTask = function(){
    watch(['scss/**/*.scss'],
        parallel(sassTask)
    )
}
exports.default = series(
    parallel(sassTask),
    watchTask
)