App.Router.map ->

  @route 'work',
    path: '/work'

  @route 'home',
    path: '/'

  @route 'catchAll',
    path: '*:'

App.Router.reopen
  location: 'history'
