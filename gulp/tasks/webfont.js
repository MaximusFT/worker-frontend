'use strict';

import gulp from 'gulp';
import config from '../config';

import del from 'del';

import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

const runTimestamp = Math.round(Date.now()/1000);

gulp.task('webfont', 'Rebuild icon webfont', [
    'webfont:clean',
    'webfont:generate'
]);
gulp.task('webfont:clean', () => {
    return del(config.webfont.dest);
});
gulp.task('webfont:generate', () => {
    return gulp.src([config.webfont.svg])
        .pipe(iconfontCss({
            fontName: config.webfont.name,
            path: config.webfont.src + 'template.scss',
            targetPath: config.webfont.name + '.scss',
            cssClass: config.webfont.name,
            fontPath: config.webfont.path
        }))
        .pipe(iconfont({
            fontName: config.webfont.name,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            prependUnicode: true,
            startUnicode: 0xE600,
            normalize: true,
            fontHeight: 1000,
            timestamp: runTimestamp
        }))
        .pipe(gulp.dest(config.webfont.dest));
});