Ext.define('newApp.view.main.Extra', {
    extend: 'Ext.grid.Panel',
    xtype: 'grid',
    title: 'Таблица',
    store: {type: 'extra'},
    controller: 'extra',
    columns: [
        {text: 'Name', dataIndex: 'name', flex: 1,

            editor: {
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }}},
        {text: 'Email', dataIndex: 'email', flex: 1,
            editor: {
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }}},
        {text:"Phone", dataIndex: 'phone', flex: 1,
            editor: {
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }}
        },
        // {
        //     xtype: 'widgetcolumn',
        //     flex: 1,
        //     widget: {
        //         xtype: 'button',
        //         text: 'Edit',
        //         handler: 'onEditCompanyClick'
        //     }
        // }

    ],
     selModel: 'rowmodel',
    plugins:[{
        ptype: 'rowediting',
        clicksToEdit: 2
    }],


    height: 300,
    width: 400,

    tbar: [{
        text: "Add",
        handler: 'onInsertButtonClick'
    },
        {
            text: "Edit",
            handler: 'OnUpdateButtonClick'
        }
    ]
})