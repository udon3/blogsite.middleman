module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    //grunt-htmlhint: Check the html, ensure it's valid
    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
        },
        src: ['build/**/*.html']
      }
    },
    //SCSS Lint - run on source files (requires Ruby and scss-lint)
    scsslint: {
      allFiles: [
        'source/assets/css/**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true,
        exclude: ['source/assets/css/base/_normalize.css.scss', 'source/assets/css/base/_responsive-test.scss']
      },
    },

    //JS Hint - run on built/concatenated files (ensure css_minify in the Middleman config.rb is disabled!)
    jshint: {
      ignore_warning: {
        options: {
          'predef': [ "BLOGSITE" ],
          'indent'        : 4
        },
        src: ['Gruntfile.js', 'source/assets/js/components/**/*.js'],
      },
    },
   
  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  /* grunt tasks */
  // Linting tasks 
  grunt.registerTask('htmllint', ['htmlhint']);
  grunt.registerTask('jslint', ['jshint']);
  grunt.registerTask('styles', ['scsslint']);

 

};