import { CELL_SIZE } from "./constants.js";

export class Eat {
  constructor() {
    this.cellSize = CELL_SIZE;

    this.start();
  }
  start() {
    this.position = {
      x: getRand(1, 19) * this.cellSize,
      y: getRand(2, 19) * this.cellSize,
    };
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.cellSize,
      this.cellSize
    );
  }
  //   update() {}
}

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
