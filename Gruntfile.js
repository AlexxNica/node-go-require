'use strict';

/*jslint nomen: true*/
//jscs:disable disallowDanglingUnderscores
/*eslint-disable no-underscore-dangle*/

module.exports = function (grunt) {
    var commons = require('js-project-commons');

    grunt.loadNpmTasks('grunt-shell');

    commons.grunt.config.initConfig(grunt, {
        buildConfig: {
            projectRoot: __dirname,
            nodeProject: true
        }
    });
};
