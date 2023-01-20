import { InputHandler } from "./utils/input.js";
import { Wormy } from "./Wormy.js";
import { Eat } from "./Eat.js";
import { Score } from "./Score.js";
import { GAME_STATE, CELL_SIZE } from "./constants.js";
import { stageMaker, stages } from "./stages.js";

export class WormyGame {
  constructor(ctx) {
    this.ctx = ctx;
    this.gameState = GAME_STATE.MAINMENU;
    this.gameObjects = [];

    this.cellSize = CELL_SIZE;

    this.nextStage = 0;
    this.cells = [];
    this.stages = stages;

    this.wormy = new Wormy();
    this.eat = new Eat();
    this.score = new Score(this.ctx);

    //new InputHandler(this.wormy, this);
    new InputHandler(this);
  }
  start() {
    if (
      this.gameState !== GAME_STATE.MAINMENU
      //   &&
      // this.gameState !== GAME_STATE.NEXTSTAGE
    )
      return;

    this.cells = stageMaker(this, this.stages[this.nextStage]);
    this.gameObjects = [this.wormy, this.eat, this.score];

    this.gameState = GAME_STATE.START;
  }
  draw(ctx) {
    [...this.cells, ...this.gameObjects].forEach((object) => object.draw(ctx));

    // MAIN MENU
    if (this.gameState === GAME_STATE.MAINMENU) {
      ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("Press ENTER to START", 300, 300);
    }

    // GAME OVER
    if (this.gameState === GAME_STATE.GAMEOVER) {
      ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER, Press R to START", 300, 300);
    }

    // PAUSE GAME
    if (this.gameState === GAME_STATE.PAUSE) {
      ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("PAUSE", 300, 300);
    }

    // WINNER
    if (this.gameState === GAME_STATE.WINNER) {
      ctx.beginPath();
      ctx.font = "20px Arial";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText("WINNER", 300, 300);
    }
  }
  update() {
    if (
      this.gameState === GAME_STATE.WINNER ||
      this.gameState === GAME_STATE.PAUSE ||
      this.gameState === GAME_STATE.GAMEOVER ||
      this.gameState === GAME_STATE.MAINMENU
    )
      return;

    if (this.wormy.death == true) this.gameState = GAME_STATE.GAMEOVER;
    console.log(this.wormy.death);

    if (this.score.score === 3) this.gameState = GAME_STATE.WINNER;

    this.start();
    this.wormy.update(this.score, this.eat);
  }
  pauseGame() {
    this.gameState !== GAME_STATE.PAUSE
      ? (this.gameState = GAME_STATE.PAUSE)
      : (this.gameState = this.gameState.START);
  }
  restartGame() {
    document.location.reload();
  }
}
