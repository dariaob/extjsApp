/**
 * This view is an example list of people.
 */
Ext.define('newApp.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'mainlist',

    requires: [
        'newApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {type: 'extra'},

    columns: [{ 
        text: 'Name',
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
        text: 'Email',
        dataIndex: 'email',
        width: 230 
    }, { 
        text: 'Phone',
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    },
    plugins:[{
        type: 'grideditable',
        triggerEvent: 'doubletap',
        enableDeleteButton: true,
    }],
});
