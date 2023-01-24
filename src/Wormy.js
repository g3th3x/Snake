import { CANVAS_WIDTH, CANVAS_HEIGHT, CELL_SIZE } from "./constants.js";
import { playRunSound, playEatingSound, playDeathSound } from "./audio.js";

export class Wormy {
  constructor() {
    this.canvasWidth = CANVAS_WIDTH;
    this.canvasHeight = CANVAS_HEIGHT;
    this.cellSize = CELL_SIZE;

    this.dx = this.cellSize;
    this.dy = 0;

    this.wormyTail = [];
    this.wormyTailLen = 1;

    this.death = false;

    this.direction;

    this.moving();
    this.start();
  }
  start() {
    this.position = {
      x: 9 * this.cellSize,
      y: 11 * this.cellSize,
    };
  }
  //   reset() {}
  draw(ctx) {
    this.wormyTail.forEach((el, index) => {
      index == 0 ? (ctx.fillStyle = "#f00") : (ctx.fillStyle = "#00aa00");
      ctx.fillRect(el.x, el.y, this.cellSize, this.cellSize);
    });
  }
  moving() {
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowUp" && this.direction !== "down") {
        this.dy = -this.cellSize;
        this.dx = 0;
        this.direction = "up";
      } else if (e.code == "ArrowLeft" && this.direction !== "right") {
        this.dx = -this.cellSize;
        this.dy = 0;
        this.direction = "left";
      } else if (e.code == "ArrowDown" && this.direction !== "up") {
        this.dy = this.cellSize;
        this.dx = 0;
        this.direction = "down";
      } else if (e.code == "ArrowRight" && this.direction !== "left") {
        this.dx = this.cellSize;
        this.dy = 0;
        this.direction = "right";
      }
    });
  }
  update(score, eat) {
    this.position.x += this.dx;
    this.position.y += this.dy;
    playRunSound();

    // Infinity
    // if (this.position.x < 0) {
    //   this.position.x = this.canvasWidth - this.cellSize;
    // } else if (this.position.x >= this.canvasWidth) {
    //   this.position.x = 0;
    // }

    // if (this.position.y < 0) {
    //   this.position.y = this.canvasHeight - this.cellSize;
    // } else if (this.position.y >= this.canvasHeight) {
    //   this.position.y = 0;
    // }

    this.wormyTail.unshift({ x: this.position.x, y: this.position.y });

    if (this.wormyTail.length > this.wormyTailLen) {
      this.wormyTail.pop();
    }

    // Collision (eating)
    this.wormyTail.forEach((cell) => {
      if (cell.x === eat.position.x && cell.y === eat.position.y) {
        this.wormyTailLen++;
        playEatingSound();
        score.increase();
        eat.start();
      }
    });

    // Restriction
    // if (this.position.x <= 0) this.position.x = this.cellSize;
    // if (this.position.x + this.cellSize >= this.canvasWidth)
    //   this.position.x = this.canvasWidth - this.cellSize * 2;
    // if (this.position.y - this.cellSize <= 0)
    //   this.position.y = this.cellSize * 2;
    // if (this.position.y + this.cellSize >= this.canvasHeight)
    //   this.position.y = this.canvasHeight - this.cellSize * 2;

    // Death
    if (
      this.position.x <= 0 ||
      this.position.x + this.cellSize >= this.canvasWidth ||
      this.position.y - this.cellSize <= 0 ||
      this.position.y + this.cellSize >= this.canvasHeight
    ) {
      this.death = true;
      playDeathSound();
    }

    // console.log(this.death);
  }
}
