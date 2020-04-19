class Scene2 extends Phaser.Scene {
  constructor() {
    super("gamePage");
  }

  create() {
    this.add.text(20, 20, "In game scene....", {
      font: "25px",
      fill: "yellow",
    });
  }
}
