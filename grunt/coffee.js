/**
 * coffee - build all coffeescript files to javascript files
 */
module.exports = {
  tests: {
    expand: true,
    flatten: true,
    cwd: 'app/tests/coffee',
    src: '*.coffee',
    dest: 'app/tests/js/',
    ext: '.js'
  },
  app: {
    files: {
      'app/app.js': 'app/app.coffee'
    }
  },
  client: {
    expand: true,
    cwd: 'app/public/coffee/',
    src: [ '**/*.coffee' ],
    dest: 'app/public/js',
    ext: '.js'
  }
};
