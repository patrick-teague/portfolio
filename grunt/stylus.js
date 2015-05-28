/**
 * stylus - build all stylus files to css files
 */
module.exports = {
  compile: {
    options: {
      use: [
        require('jeet'),
        require('rupture')
      ],
      compress: true
    },
    files: {
      'app/public/css/portfolio.css': 'app/public/stylus/all.styl'
    }
  }
};
