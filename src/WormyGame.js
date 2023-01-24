import { InputHandler } from "./utils/input.js";
import { Wormy } from "./Wormy.js";
import { Eat } from "./Eat.js";
import { Score } from "./Score.js";
import {
  GAME_STATE,
  CELL_SIZE,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
} from "./constants.js";
import { stageMaker, stages } from "./stages.js";

export class WormyGame {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvasWidth = CANVAS_WIDTH;
    this.canvasHeight = CANVAS_HEIGHT;

    this.gameState = GAME_STATE.MAINMENU;
    this.gameObjects = [];

    this.cellSize = CELL_SIZE;

    this.nextStage = 0;
    this.cells = [];
    this.stages = stages;

    this.wormy = new Wormy();
    this.eat = new Eat();
    this.score = new Score(this.ctx);
    this.scoreToWin = 5;

    this.fps = 10;

    //new InputHandler(this.wormy, this);
    new InputHandler(this);
  }
  start() {
    if (
      this.gameState !== GAME_STATE.MAINMENU &&
      this.gameState !== GAME_STATE.NEXTSTAGE
    )
      return;

    this.cells = stageMaker(this, this.stages[this.nextStage]);
    this.gameObjects = [this.wormy, this.eat, this.score];

    this.gameState = GAME_STATE.START;

    this.score.score = 0;
  }
  draw(ctx) {
    [...this.cells, ...this.gameObjects].forEach((object) => object.draw(ctx));

    // MAIN MENU
    if (this.gameState === GAME_STATE.MAINMENU) {
      showText(
        this.ctx,
        "Press ENTER to START",
        this.canvasWidth,
        this.canvasHeight
      );
    }

    // GAME OVER
    if (this.gameState === GAME_STATE.GAMEOVER) {
      shadowScreen(this.ctx, this.canvasWidth, this.canvasHeight);
      showText(this.ctx, "GAME OVER", this.canvasWidth, this.canvasHeight);
      showText(
        this.ctx,
        "Press R to START",
        this.canvasWidth,
        this.canvasHeight + 60
      );
    }

    // PAUSE GAME
    if (this.gameState === GAME_STATE.PAUSE) {
      shadowScreen(this.ctx, this.canvasWidth, this.canvasHeight);
      showText(this.ctx, "PAUSE", this.canvasWidth, this.canvasHeight);
    }

    // WINNER
    if (this.gameState === GAME_STATE.WINNER) {
      shadowScreen(this.ctx, this.canvasWidth, this.canvasHeight);
      showText(
        this.ctx,
        "CONGRATULATIONS, YOU'VE WON",
        this.canvasWidth,
        this.canvasHeight
      );
      showText(
        this.ctx,
        "Press R to START",
        this.canvasWidth,
        this.canvasHeight + 60
      );
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

    if (this.wormy.death === true) this.gameState = GAME_STATE.GAMEOVER;

    // if (this.score.score === this.scoreToWin)
    //   this.gameState = GAME_STATE.WINNER;

    this.start();
    this.wormy.update(this.score, this.eat);

    if (this.score.score === this.scoreToWin) {
      if (this.nextStage++ !== this.stages.length - 1) {
        this.gameState = GAME_STATE.NEXTSTAGE;
        this.fps += 5;
        this.start();
      } else {
        this.gameState = GAME_STATE.WINNER;
      }
    }
  }
  pauseGame() {
    if (this.gameState !== GAME_STATE.GAMEOVER)
      this.gameState !== GAME_STATE.PAUSE
        ? (this.gameState = GAME_STATE.PAUSE)
        : (this.gameState = this.gameState.START);
  }
  restartGame() {
    document.location.reload();
  }
}

function shadowScreen(ctx, canvasWidth, canvasHeight) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,0,0,.5)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function showText(ctx, text, canvasWidth, canvasHeight) {
  ctx.beginPath();
  ctx.font = "bold 24px Arial";
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
}
