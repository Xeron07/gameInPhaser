class Scene2 extends Phaser.Scene {
  constructor() {
    super("gamePage");
  }

  preload() {
    this.load.image("bg1", "ext/bg1.jpg");
    this.load.spritesheet("naruto", "ext/naruto.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.background = this.add.image(0, 0, "bg1");
    this.background.setOrigin(0, 0);
    this.naruto1 = this.add.sprite(50, 300, "naruto");
    this.naruto2 = this.add.sprite(350, 300, "naruto");
    this.anims.create({
      key: "n1_anim",
      frames: this.anims.generateFrameNumbers("naruto"),
      frameRate: 20,
      repeat: 100,
    });
    this.naruto1.play("n1_anim");
    this.naruto2.play("n1_anim");
    this.add.text(100, 20, "In game scene....", {
      font: "25px",
      fill: "blue",
    });
  }
}
