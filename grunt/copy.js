/**
 * Copy over and rename configuration files
 */
module.exports = {

  developmentConfig: {
    files: [
      {
        expand: true,
        cwd: 'app/config/',
        src: ['development.yml'],
        dest: 'app/',
        rename: function(dest, src) {
          return dest + 'config.yml'
        }
      }
    ]
  },

  testingConfig: {
    files: [
      {
        expand: true,
        cwd: 'app/config/',
        src: ['testing.yml'],
        dest: 'app/',
        rename: function(dest, src) {
          return dest + 'config.yml'
        }
      }
    ]
  },

  stagingConfig: {
    files: [
      {
        expand: true,
        cwd: 'app/config/',
        src: ['staging.yml'],
        dest: 'app/',
        rename: function(dest, src) {
          return dest + 'config.yml'
        }
      }
    ]
  },

  productionConfig: {
    files: [
      {
        expand: true,
        cwd: 'app/config/',
        src: ['production.yml'],
        dest: 'app/',
        rename: function(dest, src) {
          return dest + 'config.yml'
        }
      }
    ]
  }

}
