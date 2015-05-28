App.ApplicationController = Ember.Controller.extend

  init: ->
    @_super

  showMenubar: false
  showModals: false

  notify: (message, type) ->
    console.log message, type

  actions:

    closeMenubar: () ->
      if @get 'showMenubar'
        @set 'showMenubar', false
