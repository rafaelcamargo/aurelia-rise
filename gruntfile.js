module.exports = function(grunt) {

  grunt.initConfig({

    'http-server': {
      dev: {
        port: 9000,
        host: '0.0.0.0',
        showDir : true,
        autoIndex: true,
        ext: 'html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('build', [

  ]);

  grunt.registerTask('start', [
    'http-server'
  ]);

  grunt.registerTask('deploy', [

  ]);

};