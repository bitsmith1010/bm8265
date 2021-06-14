const config = {
  "key": "9042ce90-9b8f-43f2-bf1a-5bb20bf30655",
  logs: {
      level: "debug"
  },
};
const container = document.getElementById('player1');
const player = new bitmovin.player.Player(container, config);


const source = {
  "dash": "assets/manifest.mpd"
};
player.load(source).then(
  function () {
    for (ii of player.subtitles.list()) console.log(ii);
    console.log('[info] player.load() resolved - success');
  },
  function (reason) {
    console.log('[!] player.load() resolved - fail');
  }
);
