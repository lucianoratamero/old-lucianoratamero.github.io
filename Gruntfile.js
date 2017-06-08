'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: ["static/scss/**/*.scss", "static/js/app.js", "./**/*.html"],
            exclude: ["static/css/main.css", "static/css/main.min.css", "static/js/app.js", "static/js/app.min.js", "blog/"],
            tasks: ["sass", "cssmin", "uglify"]
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'static/css/main.css': 'static/scss/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'static/css/main.min.css': ['static/css/main.css']
                }
            }
        },
        uglify: {
            options: {
                // mangle: false,
                // compress: false,
                // beautify: true,
                sourceMap: false
            },
            build: {
                files: {
                    'static/js/app.min.js': [
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/iscroll/build/iscroll-lite.js',
                        'node_modules/page.js/page.js',
                        'node_modules/fullpage.js/dist/jquery.fullpage.js',
                        'node_modules/tippy.js/dist/tippy.min.js',
                        'static/js/app.js'
                    ],
                }
            }
        },
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};
