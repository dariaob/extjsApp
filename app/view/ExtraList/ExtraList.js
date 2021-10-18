Ext.define('newApp.view.ExtraList.ExtraList', {
    extend: 'Ext.window.Window',
    xtype: 'form',
    viewModel: 'viewModel',
    controller: 'extra',
    requires: ['newApp.view.main.ExtraController', 'newApp.view.main.SubmitForm', 'newApp.view.ExtraViewModel'],
    config: {
        record: null
    },

    updateRecord(record) {
      this.getViewModel().set('record', record.phantom ? record : record.copy())
    },

    width: 400,
    modal: true,
    bodyPadding: 10,
    items: {
        xtype: 'form'
    },

})