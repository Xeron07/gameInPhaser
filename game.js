let game = null;
let config = {
  width: 467,
  height: 350,
  backgroundColor: 0x000000,
  marginLeft: 250,
  scene: [Scene1, Scene2],
};
window.onload = function () {
  game = new Phaser.Game(config);
};
