/**
 * watch
 *   server - watches server-side coffee files for changes
 *   client - watches client-side coffee files for changes
 */
module.exports = {
  server: {
    files: [
      'app/server/**/*.coffee',
      'app/app.coffee'
    ],
    tasks: [ 'server:build' ]
  },
  client: {
    files: [ 'app/public/coffee/**/*.coffee' ],
    tasks: [ 'clean:client', 'coffee:client' ]
  },
  templates: {
    files: [ 'app/public/templates/**/*.emblem' ],
    tasks: [ 'clean:templates', 'emblem' ]
  },
  styles: {
    files: [ 'app/public/stylus/**/*.styl' ],
    tasks: [ 'clean:styles', 'stylus' ]
  }
};
