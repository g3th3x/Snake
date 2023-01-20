export class Cell {
  constructor(game, position, cellColor) {
    this.cellSize = game.cellSize;
    this.position = position;
    // this.eat = false;
    this.cellColor = cellColor;
  }
  draw(ctx) {
    ctx.beginPath();
    switch (this.cellColor) {
      case 0:
        ctx.fillStyle = "#F0E68C";
        break;
      case 1:
        ctx.fillStyle = "#BDB76B";
        break;
      //   case 2:
      //     ctx.fillStyle = "#4B0082";
    }

    // if (this.eat) ctx.fillStyle = "#4B0082";
    // else if (this.cellColor % 2 === 0) ctx.fillStyle = "#F0E68C";
    // else ctx.fillStyle = "#BDB76B";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.cellSize,
      this.cellSize
    );
  }
  update() {}
}
