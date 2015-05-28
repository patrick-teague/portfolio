'use-strict'

var nconf = require('nconf');
var yml = require('js-yaml');

nconf.argv().env().file({
  file: __dirname + '/app/config.yml',
  format: {
    parse: yml.safeLoad,
    stringify: yml.safeDump
  }
});

global.nconf = nconf

module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  grunt.registerTask(
    'default',
    'Starts up development environment.',
    [ 'local:development' ]
  );

  /**
   * Local Environments
   */
  grunt.registerTask(
    'local:development',
    'Starts up a local development environment.',
    [ 'build', 'concurrent' ]
  );

  grunt.registerTask(
    'local:testing',
    'Starts up a local testing environment.',
    [ 'build', 'nodemon:dev' ]
  );

  grunt.registerTask(
    'local:staging',
    'Starts up a local staging environment.',
    [ 'build', 'nodemon:dev' ]
  );

  grunt.registerTask(
    'local:production',
    'Starts up a local production environment.',
    [ 'build', 'nodemon:prod' ]
  );

  /**
   * Deploy Environments
   */
  grunt.registerTask(
    'deploy:development',
    'Starts up a deployment development environment.',
    [ 'build', 'tests:build' ]
  );

  grunt.registerTask(
    'deploy:testing',
    'Starts up a deployment testing environment.',
    [ 'build', 'tests:build' ]
  );

  grunt.registerTask(
    'deploy:staging',
    'Starts up a deployment staging environment.',
    [ 'build', 'tests:build' ]
  );

  grunt.registerTask(
    'deploy:production',
    'Starts up a deployment production environment.',
    [ 'build', 'tests:build' ]
  );

  grunt.registerTask(
    'build',
    'Compiles all files.',
    [ 'clean:build', 'coffee', 'stylus', 'emblem' ]
  );

};
