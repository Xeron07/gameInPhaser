class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  create() {
    this.add.text(20, 20, "Loading game ...");
    setTimeout(() => {
      this.scene.start("gamePage");
    }, 3000);
  }
}
