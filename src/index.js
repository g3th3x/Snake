import { WormyGame } from "./WormyGame.js";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./constants.js";
import { getContext } from "./utils/context.js";

window.addEventListener("load", () => {
  const ctx = getContext();
  let game = new WormyGame(ctx);

  console.log(game);

  const fps = 10;

  function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    game.update();
    game.draw(ctx);

    setTimeout(function () {
      requestAnimationFrame(animate);
    }, 1000 / fps);
  }

  animate();
});
