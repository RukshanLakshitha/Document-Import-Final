var electron = require('electron');
var browserWindows = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
    var appWindow;
    appWindow = new browserWindows({
        show: false
    });

    appWindow.loadURL('file://' + __dirname + '/index.html');
    //appWindow.setMenu(null);

    appWindow.once('ready-to-show', function(){
        appWindow.show();
    });
}); 