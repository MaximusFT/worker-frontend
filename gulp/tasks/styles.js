'use strict';

import gulp from 'gulp';
import config from '../config';

import gulpif from 'gulp-if';
import base64 from 'gulp-base64';

import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';
import autoprefixer from 'gulp-autoprefixer';

const NODE_ENV = process.env.NODE_ENV || 'production';

const stylesConfig = {
    main: {
        name: 'main.css',
        src: [
            config.styles.src + 'general.scss',
        ],
        dest: config.styles.dest
    },
    plugins: {
        name: 'plugins.css',
        src: [
            config.bower + 'bootstrap/dist/css/bootstrap.min.css', // add from bower
            config.bower + 'font-awesome/css/font-awesome.min.css', // add from bower
            //config.styles.src + 'plugins/lightcase.css', // add from your work dir
        ],
        dest: config.styles.dest
    }
};

gulp.task('styles:main', compileStyles(stylesConfig.main));
gulp.task('styles:plugins', compileStyles(stylesConfig.plugins));

gulp.task('styles', 'Rebuild stylesheets', [
    'styles:main',
    'styles:plugins'
]);

function compileStyles(config) {
    return () => {
        return gulp.src(config.src)
            // .pipe(gulpif(NODE_ENV == 'development',
            //     sourcemaps.init()
            // ))
            .pipe(sass({
                    outputStyle: 'compressed'
                }).on('error', sass.logError)
            )
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
                cascade: false
            }))
            .pipe(concat(config.name))
            .pipe(base64({
                extensions: ['svg', 'eot', 'woff2', 'woff', 'ttf']
            }))
            // .pipe(gulpif(NODE_ENV == 'development',
            //     sourcemaps.write('./maps')
            // ))
            .pipe(cleanCSS({
                compatibility: 'ie8'
            }))
            .pipe(gulp.dest(config.dest))
            .pipe(livereload());
    }
}