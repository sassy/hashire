'use strict';

const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 640,
    height: 390,
    frame: false
  });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ipcMain.on('close', (event, arg) => {
  app.quit();
});
