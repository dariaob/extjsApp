Ext.define('newApp.view.main.Data',{
    xtype: 'grid',
    fullscreen: true,
    store: {type: 'extra'},
    plugins: {
        grideditable: {
            triggerEvent: 'childdoubletap',
            enableDeleteButton: true,
            formConfig: null, // See more below

            defaultFormConfig: {
                xtype: 'formpanel',
                scrollable: true,
                items: [{
                    xtype: 'fieldset'
                }]
            },

            toolbarConfig: {
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                    xtype: 'button',
                    ui: 'decline',
                    text: 'Cancel',
                    align: 'left',
                    action: 'cancel'
                }, {
                    xtype: 'button',
                    ui: 'confirm',
                    text: 'Submit',
                    align: 'right',
                    action: 'submit'
                }]
            },
        }
    },

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        flex: 1,
        editable: true
    }]
});
