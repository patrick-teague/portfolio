App.HeaderController = App.BaseController.extend

  needs: ['modals']

  showMenubar: Ember.computed.alias 'controllers.application.showMenubar'

  actions:

    toggleMenubar: () ->
      @get('controllers.application').toggleProperty 'showMenubar'
      return false
