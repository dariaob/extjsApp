Ext.define('newApp.view.main.Extra', {
    extend: 'Ext.grid.Panel',
    xtype: 'Extra',
    title: 'Таблица',
    store: {type: 'extra'},
    columns: [
        {text: 'Name', dataIndex: 'name', flex: 1},
        {text: 'Email', dataIndex: 'email', flex: 1},
        {text:"Phone", dataIndex: 'phone', flex: 1}
    ],
    height: 300,
    width: 400
})