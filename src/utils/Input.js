export class InputHandler {
  constructor(game) {
    console.log("> " + this.game);
    document.addEventListener("keydown", (e) => {
      //console.log(e.code);
      switch (e.code) {
        //       if (code === "ArrowUp" && direction != "down") direction = "up";
        // else if (code === "ArrowDown" && direction != "up") direction = "down";
        // else if (code === "ArrowLeft" && direction != "right") direction = "left";
        // else if (code === "ArrowRight" && direction != "left") direction = "right";

        // case "ArrowRight":
        //   wormy.moveRight();
        //   break;
        // case "ArrowLeft":
        //   wormy.moveLeft();
        //   break;
        // case "ArrowUp":
        //   wormy.moveUp();
        //   break;
        // case "ArrowDown":
        //   wormy.moveDown();
        //   break;
        case "Enter":
          game.start();
          break;
        case "KeyP":
          game.pauseGame();
          break;
        case "KeyR":
          game.restartGame();
          break;
      }
    });
  }
}
