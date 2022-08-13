// Canvas setup
const canvas = document.querySelector("#stage");
const ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 640;
let cell = 32;
let requestId;
let score = 0;

// let spawnFood = {
//   x: Math.floor(Math.random() * 18 + 1) * cell,
//   y: Math.floor(Math.random() * 18 + 3) * cell,
// };

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let spawnFood = {
  //   x: Math.floor(Math.random() * 18 + 1) * cell,
  //   y: Math.floor(Math.random() * 19 + 3) * cell,

  x: getRandomIntInclusive(1, 18) * cell,
  y: getRandomIntInclusive(2, 18) * cell,
};

console.log(`x: ${spawnFood.x}, y: ${spawnFood.y}`);

let snake = [];

snake[0] = {
  x: 9 * cell,
  y: 10 * cell,
};

// Основной игровой цикл
function animate() {
  update();
  render();
  requestAnimationFrame(animate);
}

function update() {}
function render() {
  ctx.fillStyle = "#8B4513";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let flag = true;

  for (let x = 32; x < 608; x += 32) {
    for (let y = 64; y < 608; y += 32) {
      if (flag) {
        ctx.fillStyle = "#F0E68C";
        ctx.fillRect(x, y, cell, cell);
      } else {
        ctx.fillStyle = "#BDB76B";
        ctx.fillRect(x, y, cell, cell);
      }
      flag = !flag;
      //console.log(`x: ${x}, y:${y}, ${flag}`);
    }
  }

  ctx.fillStyle = "#fff";
  ctx.font = "42px Helvetica";
  ctx.fillText(`Your score: ${score}`, cell, cell * 1.3);

  ctx.fillStyle = "#4B0082";

  //   ctx.beginPath();
  //   ctx.arc(spawnFood.x, spawnFood.y, 16, 0, 2 * Math.PI);
  //   ctx.fill();

  ctx.fillRect(spawnFood.x, spawnFood.y, cell, cell);
  requestId = requestAnimationFrame(render);
}

animate();

//cancelAnimationFrame(requestId);

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

// // let food = {
// //   x: Math.floor(Math.random() * 17 + 1) * box,
// //   y: Math.floor(Math.random() * 15 + 3) * box,
// // };

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

//   for (let i = 0; i < snake.length; i++) {
//     ctx.fillStyle = i == 0 ? "green" : "red";
//     ctx.fillRect(snake[i].x, snake[i].y, box, box);
//   }

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
