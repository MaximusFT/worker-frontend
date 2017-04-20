'use strict';

const gulp = require('gulp-stats')(require('gulp-help')(require('gulp')));

import requireDir from "require-dir/index";

requireDir('gulp/tasks', {
    recurse: true
});