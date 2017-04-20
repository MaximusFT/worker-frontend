'use strict';

import gulp from 'gulp';

gulp.task('default', 'Display all gulp task', ['help']);

gulp.task('build', 'Rebuild everything' , ['styles', 'scripts']);