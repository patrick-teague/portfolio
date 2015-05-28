/**
 * emblem - build all emblem files to handlebars files
 */
module.exports = {
  compile: {
    files: {
      'app/public/js/templates.js': ['app/public/templates/**/*.emblem'] //compile and concat into single file
    },
    options: {
      root: 'app/public/templates/',
      dependencies: {
        jquery: 'app/public/js/vendor/development/jquery-2.1.3.js',
        ember: 'app/public/js/vendor/development/ember-1.9.1.js',
        emblem: 'app/public/js/vendor/development/emblem-0.4.0.js',
        handlebars: 'app/public/js/vendor/development/handlebars-2.0.0.js'
      }
    }
  }
};
