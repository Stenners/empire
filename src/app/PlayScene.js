import Phaser from "phaser";

var gameOver;
const planetData = [
  {
    name: "Tarantulon",
    type: "terran",
    known: true,
    size: 1
  },
  {
    name: "a",
    type: "desert",
    known: false,
    size: 1.3
  },
  {
    name: "a",
    type: "jungle",
    known: false,
    size: 1.07
  }
];

class PlayScene extends Phaser.Scene {
  constructor() {
    super({
      key: "play"
    });
  }

  init() {
    gameOver = false;
    // score = 0;
  }

  getPlanetImage(type, known) {
    // TODO: Need to add more variety here with sprites
    let imageKey;

    if (!known) {
      return "unknown";
    }

    switch (type) {
      case "desert":
        imageKey = "planet2";
        break;
      case "terran":
        imageKey = "planet1";
        break;
      case "jungle":
        imageKey = "planet1";
        break;
      default:
        imageKey = "planet1";
        break;
    }
    return imageKey;
  }

  create() {
    //  Input Events
    // const cursors = this.input.keyboard.createCursorKeys();

    //  The scrolling starfield background
    this.add.tileSprite(0, 0, 8200, 1600, "starfield");

    for (let x = 0; x < planetData.length; x++) {
      var min = 40;
      var max = 600;

      this.add
        .image(
          Phaser.Math.Between(min, max),
          // Phaser.Math.Between(min, max),
          250,
          // Planet type. Biome etc
          this.getPlanetImage(planetData[x].type, planetData[x].known)
        )
        // Clickable
        .setInteractive()
        .setAlpha(planetData[x].known ? 1 : 0.5)
        // Do we need data?
        .setData(planetData[x])
        // Planet size (compared to "earth")
        .setScale(planetData[x].size);
    }

    this.input.on("gameobjectdown", (_, gameObject) =>
      console.log(gameObject.data.list)
    );
    this.input.on("gameobjectover", (pointer, gameObject) =>
      console.log("OVER")
    );

    this.input.keyboard.on(
      "keydown_R",
      function() {
        this.scene.restart();
      },
      this
    );
  }

  update() {
    if (gameOver) {
      this.scene.stop().run("end");
      return;
    }
  }
}

export default PlayScene;
