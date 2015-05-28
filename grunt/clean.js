/**
 * clean - clean out all compiled javascript folders, and the main app.js file
 *    remove:
 *       app/app.js
 *       public/js/*
 */
module.exports = {
  build: {
    src: [
      'app/app.js',
      'app/public/js/*',
      '!app/public/js/vendor',
      'app/public/css/*',
      '!app/public/css/vendor'
    ]
  },
  tests: {
    src: [ 'app/tests/js/*' ]
  },
  server: {
    src: [ 'app/app.js' ]
  },
  client: {
    src: [
      'app/public/js/*',
      '!app/public/js/vendor',
      '!app/public/js/templates.js'
    ]
  },
  templates: {
    src: [ 'app/public/js/templates.js' ]
  },
  styles: {
    src: [
      'app/css/*',
      '!app/css/vendor'
    ]
  },
  config: {
    src: [ 'app/config.yml' ]
  }
};
