import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../constants.js";

export function getContext() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  document.body.append(canvas);

  ctx.imageSmoothingEnabled = true;

  return ctx;
}
