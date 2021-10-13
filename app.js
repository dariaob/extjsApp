/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'newApp.Application',

    name: 'newApp',

    requires: [
        // This will automatically load all classes in the newApp namespace
        // so that application classes do not need to require each other.
        'newApp.*'
    ],
    launch: function () {
      // viewport = Ext.getCmp('viewport');
      // target = viewport.down('#viewport-target');
      // view = Ext.create('newApp.view.main.Main');
      // target.add(view)
    },
    // The name of the initial view to create.
    mainView: 'newApp.view.main.Extra',
    // autoCreateViewport: true
});
