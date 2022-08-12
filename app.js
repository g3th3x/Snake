// Canvas setup
const canvas = document.querySelector("#stage");
const ctx = canvas.getContext("2d");
canvas.width = 608;
canvas.height = 608;

// Основной игровой цикл
function animate() {
  update();
  render();
  requestAnimationFrame(animate);
}

function update() {}
function render() {}

// const foodImg = newImage();
// foodImg.src = "img/food.png";

// class Food {
//   constructor() {
//     // (this.x = Math.floor(Math.random() * 17 + 1) * box),
//     //   (this.y = Math.floor(Math.random() * 15 + 3) * box);
//   }
//   update() {
//     this.x = Math.floor(Math.random() * 17 + 1) * box;
//     this.y = Math.floor(Math.random() * 15 + 3) * box;
//   }
//     draw() { }

//     ctx.drawImage(
//       enemyImage,
//       this.frameX * this.spriteWidth,
//       this.frameY * this.spriteHeight,
//       this.spriteWidth,
//       this.spriteHeight,
//       this.x - 60,
//       this.y - 70,
//       this.spriteWidth / 3,
//       this.spriteHeight / 3
//     );

// }

// new Food(1);
// new Food(2);

// let box = 32;
// let score = 0;

// // let food = {
// //   x: Math.floor(Math.random() * 17 + 1) * box,
// //   y: Math.floor(Math.random() * 15 + 3) * box,
// // };

// const ground = new Image();
// ground.src = "img/ground.png";

// // const foodImg = new Image();
// // foodImg.src = "img/food.png";

// let snake = [];
// snake[0] = {
//   x: 9 * box,
//   y: 10 * box,
// };

// document.addEventListener("keydown", direction);

// let dir;

// function direction(event) {
//   if (event.keyCode == 37 && dir != "right") dir = "left";
//   else if (event.keyCode == 38 && dir != "down") dir = "up";
//   else if (event.keyCode == 39 && dir != "left") dir = "right";
//   else if (event.keyCode == 40 && dir != "up") dir = "down";
// }

// function eatSelfTail(head, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (head.x == arr[i].x && head.y == arr[i].y) gameOver();
//   }
// }

// function draw() {
//   ctx.drawImage(ground, 0, 0);
//   ctx.drawImage(foodImg, food.x, food.y);

//   for (let i = 0; i < snake.length; i++) {
//     ctx.fillStyle = i == 0 ? "green" : "red";
//     ctx.fillRect(snake[i].x, snake[i].y, box, box);
//   }

//   ctx.fillStyle = "#fff";
//   ctx.font = "50px Arial";
//   ctx.fillText(score, box * 2.5, box * 1.7);

//   let snakeX = snake[0].x;
//   let snakeY = snake[0].y;

//   if (snakeX == food.x && snakeY == food.y) {
//     score++;
//     food = {
//       x: Math.floor(Math.random() * 17 + 1) * box,
//       y: Math.floor(Math.random() * 15 + 3) * box,
//     };
//   } else {
//     snake.pop();
//   }

//   if (
//     snakeX < box ||
//     snakeX > box * 17 ||
//     snakeY < 3 * box ||
//     snakeY > box * 17
//   )
//     gameOver();

//   if (dir == "left") snakeX -= box;
//   if (dir == "right") snakeX += box;
//   if (dir == "up") snakeY -= box;
//   if (dir == "down") snakeY += box;

//   let newHead = {
//     x: snakeX,
//     y: snakeY,
//   };
//   eatSelfTail(newHead, snake);
//   snake.unshift(newHead);
// }

// //let game = setInterval(draw, 100);

// function gameOver() {
//   ctx.fillStyle = "#fff";
//   ctx.font = "40px Monospace";
//   ctx.fillText(`Game over, Your score: ${score}`, 50, 200);
//   ctx.fillStyle = "#000";
//   ctx.fillText(`Game over, Your score: ${score}`, 51, 201);
//   clearInterval(game);
// }

// requestAnimationFrame(animate);

// let pTimestamp = 0;
// let angle = 0;

// animation({
//   clear() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   },
//   update() {},
//   render() {},
// });

// //function animate(timestamp) {
// function animate() {
//   requestAnimationFrame(animate);
//   draw();
// }
// // const canvas = document.querySelector("#stage");
// // const ctx = canvas.getContext("2d");
// // canvas.width = 608;
// // canvas.height = 608;

// // let triangle = {
// //   centerX: canvas.width / 2,
// //   centerY: canvas.height / 2,
// //   radius: 150,
// //   angle: 0,
// //   angleSpeed: -Math.PI * 0.01,
// // };

// // animation({
// //   clear() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// //   },
// //   update() {
// //     triangle.angle += triangle.angleSpeed;
// //   },
// //   render() {
// //     const dAngle = (Math.PI * 2) / 3;
// //     ctx.beginPath();
// //     ctx.moveTo(
// //       triangle.centerX + triangle.radius * Math.cos(triangle.angle),
// //       triangle.centerY + triangle.radius * Math.sin(triangle.angle)
// //     );
// //     ctx.lineTo(
// //       triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
// //       triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle)
// //     );
// //     ctx.lineTo(
// //       triangle.centerX +
// //         triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
// //       triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle)
// //     );
// //     ctx.closePath();

// //     ctx.fillStyle = "green";
// //     ctx.fill();
// //   },
// // });

// //////////////////////////// new file
// function animation(obj) {
//   const { clear, update, render } = obj;
//   let pTimestamp = 0;

//   requestAnimationFrame(animate);

//   function animate(timestamp) {
//     requestAnimationFrame(animate);
//     const diff = timestamp - pTimestamp;
//     pTimestamp = timestamp;

//     const fps = 1000 / diff;
//     secondPart = diff / 1000;

//     const params = {
//       timestamp,
//       pTimestamp,
//       diff,
//       fps,
//       secondPart,
//     };

//     update(params);
//     clear();
//     render(params);
//   }
// }
