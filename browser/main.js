'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var ipc = require('ipc');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function(){
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width : 640,
    height : 390,
    frame: false,
    "web-preferences" : {
      "web-security" : false
    }
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

ipc.on('close', function(event, arg) {
  app.quit();
});
