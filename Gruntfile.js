'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: ["static/less/**/*.less", "static/css/**/*.css", "static/js/**/*.js", "templates/**/*.html"],
            tasks: ["less", "cssmin", "uglify"]
        },
        // "less"-task configuration
        less: {
            // production config is also available
            development: {
                options: {
                    // Specifies directories to scan for @import directives when parsing.
                    // Default value is the directory of the source, which is probably what you want.
                    paths: ["static/less/"],
                },
                files: {
                    // compilation.css  :  source.less
                    "static/less/main.css": "static/less/main.less"
                }
            },
        },
        cssmin: {
            target: {
                files: {
                    'assets/static/main.min.css': ['static/less/main.css']
                }
            }
        },
        uglify: {
            options: {
                sourceMap: false
            },
            build: {
                files: {
                    'assets/static/app.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/fullpage.js/jquery.fullPage.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js'
                    ],
                }
            }
        },
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};
