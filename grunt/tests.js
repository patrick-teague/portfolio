/**
 * tests build / run tests
 */
module.exports = function(grunt) {

  grunt.registerTask(
    'tests',
    'Runs mocha tests',
    [
      'tests:build',
      'mochaTest'
    ]
  );

  grunt.registerTask(
    'tests:build',
    'Cleans out all old js test files and compiles coffee files.',
    [
      'clean:tests',
      'coffee:tests'
    ]
  );

};
