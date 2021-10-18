Ext.define('newApp.view.main.SubmitForm', {
    extend: 'Ext.form.Panel',
    alias: 'submitForm',
    xtype: 'submitForm',
    requires: ['newApp.model.Extra', 'newApp.store.Extra'],
    title: 'Foo',
    floating: true,
    closable : true,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Имя',
        name: 'name',
        labelAlign: 'top',
        cls: 'field-margin',
        flex: 1
    }, {
        xtype: 'textfield',
        fieldLabel: 'email',
        name: 'email',
        labelAlign: 'top',
        cls: 'field-margin',
        flex: 1
    },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone',
            name: 'phone',
            labelAlign: 'top',
            cls: 'field-margin',
            flex: 1
        }],
    buttons:[
        {
            text: "Submit",
            handler: 'onSubmitButtonClick'
        },
    ],

    width: 500,
    height: 400,
})