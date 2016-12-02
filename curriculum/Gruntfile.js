'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-inline-css');
    grunt.loadNpmTasks('grunt-inline');

    grunt.registerTask('generate_pdf', 'Generate pdf', function(){
        var done = this.async();
        var fs = require('fs');
        var pdf = require('html-pdf/lib/pdf');
        var html = fs.readFileSync('curriculum.html', 'utf8');
        var options = {
          "format": "A4",
        };
        var newFile = new pdf(html, options);

        newFile.toFile('curriculum.pdf', function(err, res) {
            if (err) return console.log(err);
            grunt.log.ok()
        });

    });

    grunt.initConfig({
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: ["assets/scss/**/*.scss", "template.html"],
            exclude: ["assets/css/main.css", "assets/css/main.min.css"],
            tasks: ["sass", "cssmin", "inline", "generate_pdf"]
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'assets/css/main.css': 'assets/scss/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'assets/css/main.min.css': ['assets/css/main.css']
                }
            }
        },
        inline: {
            options:{
                tag: ''
            },
            dist: {
                src: 'template.html',
                dest: 'curriculum.html'
            }
        }
    });
     // the default task (running "grunt" in console) is "watch"
     grunt.registerTask('default', ['watch']);
};
