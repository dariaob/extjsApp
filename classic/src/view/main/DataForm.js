Ext.define('newApp.view.main.DataForm', {
    extend: 'Ext.window.Window',
    requires: ['DiApp.view.personalData.personalForm'],
    xtype: 'personalData',
    //стили
    width:400,
    modal: true,
    bodyPadding: 10,
    resizable: false,

    items: [{
        xtype:'submitForm'
    }]
})