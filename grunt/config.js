/**
 * config - create correct application and grunt configuration file
 */
module.exports = function(grunt) {

  grunt.registerTask(
    'config:development',
    'Clean out old config file and create new development config file.',
    [ 'clean:config', 'copy:developmentConfig' ]
  );

  grunt.registerTask(
    'config:testing',
    'Clean out old config file and create new testing config file.',
    [ 'clean:config', 'copy:testingConfig' ]
  );

  grunt.registerTask(
    'config:test',
    'Alias for config:testing',
    [ 'config:testing' ]
  );

  grunt.registerTask(
    'config:staging',
    'Clean out old config file and create new staging config file.',
    [ 'clean:config', 'copy:stagingConfig' ]
  );

  grunt.registerTask(
    'config:production',
    'Clean out old config file and create new production config file.',
    [ 'clean:config', 'copy:productionConfig' ]
  );

};
