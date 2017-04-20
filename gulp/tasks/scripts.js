'use strict';

import gulp from 'gulp';
import config from '../config';

import gulpif from 'gulp-if';

import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

const NODE_ENV = process.env.NODE_ENV || 'development';

const scriptsConfig = {
    core: {
        name: 'core.js',
        src: [
            // config.bower + 'jquery/dist/jquery.min.js', // add from bower
            config.scripts.src + 'vendor/jquery-2.2.4.js', // add from your work dir
            config.scripts.src + 'vendor/bootstrap.js', // add from your work dir
        ],
        dest: config.scripts.dest
    },
    custom: {
        name: 'custom.js',
        src: [
            config.scripts.src + 'vendor/imagesloaded.js',
        ],
        dest: config.scripts.dest
    },
    main: {
        name: 'main.js',
        src: [
            config.scripts.src + 'main.js',
        ],
        dest: config.scripts.dest
    }
};

gulp.task('scripts:core', compileScripts(scriptsConfig.core));
gulp.task('scripts:main', compileScripts(scriptsConfig.main));
gulp.task('scripts:custom', compileScripts(scriptsConfig.custom));
gulp.task('scripts:portfolio', compileScripts(scriptsConfig.portfolio));
gulp.task('scripts', 'Rebuild scripts', [
    'scripts:core',
    'scripts:main',
    'scripts:custom'
]);

function compileScripts(config) {
    return function() {
        return gulp.src(config.src)
            .pipe(gulpif(NODE_ENV == 'development',
                sourcemaps.init()
            ))
            .pipe(concat(config.name))
            .pipe(gulpif(NODE_ENV == 'production',
                uglify()
            ))
            .pipe(gulpif(NODE_ENV == 'development',
                sourcemaps.write('./maps')
            ))
            .pipe(gulp.dest(config.dest))
    }
}