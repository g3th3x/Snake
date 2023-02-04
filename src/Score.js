export class Score {
  constructor(ctx, scoreToWin, score = 0, levelSpeed = 1) {
    this.score = score;
    this.scoreToWin = scoreToWin;
    this.levelSpeed = levelSpeed;
    this.totalScore = 0;
    this.draw(ctx);
  }
  increase() {
    this.score++;
    this.totalScore++;
  }
  reset() {
    this.score = 0;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "left";
    ctx.fillText(
      `Score: ${this.score}/${this.scoreToWin}   Total score: ${this.totalScore}   Level speed: ${this.levelSpeed}`,
      10,
      25
    );
  }
}
