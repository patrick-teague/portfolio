App.ContactController = App.BaseController.extend

  email: null
  message: null

  actions:

    contact: () ->
      console.log "SEND CONTACT TO SERVER"
