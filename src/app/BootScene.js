class BootScene extends Phaser.Scene {
  preload() {
    this.load.image("starfield", require("../assets/starfield.png"));
    this.load.image("unknown", require("../assets/unknown.png"));
    this.load.image("planet1", require("../assets/earth01.png"));
    this.load.image("planet2", require("../assets/earth02.png"));
  }

  update() {
    this.scene.start("play");
    this.scene.remove();
  }
}

export default BootScene;
