import BootScene from "./BootScene";
import PlayScene from "./PlayScene";
import MenuScene from "./MenuScene";
// import EndScene from "./EndScene";

const GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  backgroundColor: "#1a1c2c",
  title: "Empire - Phaser 3 with Parcel 📦",
  url: "https://github.com/stenners/empire",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [BootScene, MenuScene, PlayScene],
  banner: {
    text: "white",
    background: [
      "#1a1c2c",
      "#5d275d",
      "#b13e53",
      "#ef7d57",
      "#ffcd75",
      "#a7f070",
      "#38b764",
      "#257179",
      "#29366f",
      "#3b5dc9",
      "#41a6f6",
      "#73eff7",
      "#f4f4f4",
      "#94b0c2",
      "#566c86",
      "#333c57"
    ]
  }
};

export default GameConfig;
