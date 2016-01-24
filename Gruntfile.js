'use strict';

module.exports = function (grunt) {

    var _ = require('lodash'),
        cover = require('browserify-istanbul'),
        gruntTasks = [
            'grunt-karma', 
            'grunt-eslint', 
            'grunt-jsdoc-to-markdown', 
            'grunt-browserify', 
            'grunt-contrib-uglify'
        ], 
        config = {
            browserify: {
                dist: {
                    options: {
                       transform: [
                          [ "babelify", { "presets": ["es2015"] }]
                       ]
                    },
                    files: {
                       "./built/module.js":  ["./src/*.js"]
                    }
                }
            },
            uglify: {
                my_target: {
                    files: {
                        './built/module.js': ['./built/module.js']
                    }
                }
            },      
            karma: {
                unit: {
                    configFile: 'karma.conf.js',
                    singleRun: true,
                    autoWatch: false,
                    reporters: ['progress', 'coverage'],
                    logLevel: 'DEBUG',
                    browsers: ['PhantomJS']
                }
            },
            eslint: {
                target: ['src/*', 'test/*']
            },
            jsdoc2md: {
              oneOutputFile: {
                src: 'src/*.js',
                dest: 'README.md'
              }
            }
        };

    _.each(gruntTasks, function (task) {
        grunt.loadNpmTasks(task);
    });

    grunt.registerTask('default', ['browserify', 'uglify', 'eslint', 'karma', 'jsdoc2md']);
    grunt.registerTask('unitTests', ['eslint', 'karma']);
    grunt.initConfig(config);
};
