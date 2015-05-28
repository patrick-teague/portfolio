/**
 * nodemon - watches server files for changes, and reloads upon change
 */
module.exports = {
  dev: {
    script: 'app/app.js',
    options: {
      //nodeArgs: [ '--debug' ],
      watch: [ 'app' ],
      delay: 500,
      ignore: [ 'app/tests' ],
      ext: 'js, json'
    }
  },
  prod: {
    script: 'app/app.js'
  }
};
