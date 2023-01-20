export class Score {
  constructor(ctx, score = 0) {
    this.score = score;
    this.draw(ctx);
  }
  increase() {
    this.score++;
    //this.draw(ctx);
  }
  reset() {
    this.score = 0;
    // this.draw(ctx);
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "left";
    ctx.fillText(`Score: ${this.score}`, 10, 25);
  }
}
