App.MenubarController = App.BaseController.extend

  needs: ['modals']

  hideMenubar: () ->
    @get('controllers.application').set 'showMenubar', false

  actions:

    goToWork: () ->
      @hideMenubar()
      @transitionToRoute 'work'

    goToContact: () ->
      @hideMenubar()
      @get('controllers.modals').showModal('contact')
