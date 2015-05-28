/**
 * server - builds the server files
 */
module.exports = function(grunt) {

  grunt.registerTask(
    'server:build',
    'Builds server files',
    [ 'coffee:app' ]
  );

};
