'use strict';

const gutil    = require('gulp-util'),
    // require for imagemin options
    $        = require('gulp-load-plugins')({
        // used for all plugins type not just with gulp-*
        pattern: '*',
        rename: {
            'lodash.assign': 'assign'
        }
    });

const basePath = {
    bower: './bower_components/',
    modules: './node_modules/',
    src: './app/',
    dest: './assets/'
};

const configPath = {
    app: './assets/',
    modules: basePath.modules,
    bower: basePath.bower,
    webfont: {
        name: 'ico',
        svg: basePath.src + 'ico/*.svg',
        src: basePath.src + 'ico/',
        dest: basePath.src + 'fonts/',
        path: '../../../ico/fonts/'
    },
    styles: {
        src: basePath.src + 'styles/scss/',
        dest: basePath.dest + 'css/'
    },
    scripts: {
        src: basePath.src + 'scripts/',
        dest: basePath.dest + 'js/'
    },
    watch: {
        styles: basePath.src + 'styles/**/*.{css,scss,sass,less}',
        scripts: basePath.src + 'scripts/**/*.{js,jsx}'
    }
};

export default configPath;