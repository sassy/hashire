const videoList = [
  '0IrUT0sXrBU',
];
const utime = Math.floor( new Date().getTime() / 1000 );
const index = utime % videoList.length;

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const videoInfo = {
  height: '390',
  width: '640',
  videoId: videoList[index],
  playerVars : {
    "controls" : '0'
  },
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
};

if (index === 0) {
  videoInfo.playerVars.start = '9';
}

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', videoInfo);
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED) {
    var ipc = require('electron').ipcRenderer;
    ipc.send('close');
  }
}
