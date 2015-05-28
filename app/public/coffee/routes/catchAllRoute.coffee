App.CatchAllRoute = App.BaseRoute.extend

  redirect: ->
    @_super()
    @transitionTo 'home'
