class Scene2 extends Phaser.Scene {
  constructor() {
    super("gamePage");
  }

  preload() {
    this.load.image("bg1", "ext/bg1.jpg");
  }

  create() {
    this.background = this.add.image(0, 0, "bg1");
    this.background.setOrigin(0, 0);
    this.add.text(20, 20, "In game scene....", {
      font: "25px",
      fill: "blue",
      left: 200,
    });
  }
}
