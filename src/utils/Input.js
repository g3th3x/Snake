export class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", (e) => {
      switch (e.code) {
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
