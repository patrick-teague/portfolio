/**
 * concurrent - launches nodemon and watch tasks concurrently and
 *              logs their output to the console
 */
module.exports = {
  tasks: [
    'nodemon',
    'watch'
  ],
  options: {
    logConcurrentOutput: true
  }
};
