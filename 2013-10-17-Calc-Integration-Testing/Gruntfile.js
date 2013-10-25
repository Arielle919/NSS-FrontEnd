'use strict';
module.exports = function(grunt) {

  //Project config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    qunit: {
      master: {
        options: {
          urls: [ 'http://localhost:3333/test/master.html']

        }
      }

    },

    connect: {
      server: {
        options:{
          port: 3333,
          hostname: 'localhost',
          base: 'public'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('tests', ['connect', 'qunit']);
  grunt.registerTask('default', ['qunit']);

};