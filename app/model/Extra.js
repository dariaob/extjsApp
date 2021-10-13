Ext.define('newApp.model.Extra', {
    extend: 'Ext.data.Model',
    alias: 'model.Extra',
    fields: [
        {name: 'name', type: 'string'},
        {email: 'email', type: 'string'},
        {phone: 'phone', type: 'string'}
    ]
})