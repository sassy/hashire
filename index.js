var electron = require('electron-prebuilt');
var proc = require('child_process');

proc.spawn(electron, ['./browser'], {stdio: 'inherit'});
