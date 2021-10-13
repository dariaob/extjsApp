Ext.define('newApp.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',
    init:function () {
        console.warn('app')
        this.control({
            '#exController':{
                click: 'callOnClick'
            }
        })
    },
    callOnClick: function () {
        alert('Hi from controller')
    }
})