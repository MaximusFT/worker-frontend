'use strict';

import gulp from 'gulp';

import config from '../config';
import livereload from 'gulp-livereload';

gulp.task('watch:styles', () => {
	livereload.listen();
    gulp.watch(config.watch.styles, ['styles']);
});
gulp.task('watch:scripts', () => {
    gulp.watch(config.watch.scripts, ['scripts']);
});
gulp.task('watch', 'Watching task', [
    'watch:styles',
    'watch:scripts'
]);