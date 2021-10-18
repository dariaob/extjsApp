Ext.define('newApp.store.Extra', {
    extend: 'Ext.data.Store',
    alias: 'store.extra',
    model: 'newApp.model.Extra',
    itemId: 'extra',
    storeId:'extra',
    autoLoad: true,
    autoSync: true,
    data: {
        items: [
            { name: 'Женя Лук', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
            { name: 'Петя Ворф',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
            { name: 'Диана Рузвель',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
            { name: 'Дата Мигеровна',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
        ]
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
})