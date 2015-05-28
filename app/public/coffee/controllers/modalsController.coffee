App.ModalsController = App.BaseController.extend

  needs: ['contact']

  showContactModal: false

  hideModals: () ->
    @get('controllers.application').set 'showModals', false
    @setProperties
      showContactModal: false

  showModal: (modalName) ->
    @get('controllers.application').set 'showModals', true
    Ember.run.next @, () ->
      $('.modal--show .modal__field-input--first').focus()

    switch modalName
      when 'contact' then @set 'showContactModal', true
      else throw 'Invalid modal name passed!'

  actions:

    modalClicked: () ->

    hideModals: () ->
      @hideModals()
