Ext.define('newApp.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',
    requires: ['Ext.window.Window',
        'newApp.view.main.SubmitForm', ],


    onInsertButtonClick: function () {
        pop = Ext.create('newApp.view.main.SubmitForm');
        pop.show()
    },

    OnUpdateButtonClick: function () {
        const selection = this.getView().getSelection(); //выбираем первую выбранную строку
        Ext.create({
            xtype: 'submitForm',
            autoShow: true,
            record: selection[0],
            }
        )
    },

    onSubmitButtonClick: function () {
        this.getView().close()
    },

    onCancelButtonClick: function () {
      this.getView().close()
    },

})