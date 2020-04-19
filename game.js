let game = null;
let config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  marginLeft: 250,
  scene: [Scene1, Scene2],
};
window.onload = function () {
  game = new Phaser.Game(config);
};
