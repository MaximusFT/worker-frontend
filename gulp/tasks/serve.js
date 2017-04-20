// gulp/tasks/base/serve.js
'use strict';

import gulp from 'gulp';

import config from '../config';
import browserSync from 'browser-sync';

gulp.task('serve', () => {
    browserSync(
        {
            server: {
                baseDir: config.app
            },
            // proxy: url + '/' + path.to.dev,
            // set browser automaically opened
            browser: 'google chrome',
            open: false
            // for more options: http://www.browsersync.io/docs/options
        }
    )
});