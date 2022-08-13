window.addEventListener("load", () => {
  // Canvas setup
  const canvas = document.querySelector("#stage");
  const ctx = canvas.getContext("2d");
  canvas.width = 640;
  canvas.height = 640;

  let cell = 32;
  let requestId;
  let score = 0;
  let direction;

  let earthWorm = [];
  //Стартовая позиция
  earthWorm[0] = {
    x: 9 * cell,
    y: 10 * cell,
  };
  //console.log(earthWorm[0].x, earthWorm[0].y);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  let spawnFood = {
    x: getRandomIntInclusive(1, 18) * cell,
    y: getRandomIntInclusive(2, 18) * cell,
  };
  //console.log(`x: ${spawnFood.x}, y: ${spawnFood.y}`);

  // Основной игровой цикл
  (function animate() {
    update();
    render();
    requestAnimationFrame(animate);
  })();

  function update() {}
  function render() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //background
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //cells
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

    //score
    ctx.fillStyle = "#fff";
    ctx.font = "42px Helvetica";
    ctx.fillText(`Your score: ${score}`, cell, cell * 1.3);

    //earthWorm
    for (let i = 0; i < earthWorm.length; i++) {
      ctx.fillStyle = i == 0 ? "#00ff00" : "#ff0000";
      ctx.fillRect(earthWorm[i].x, earthWorm[i].y, cell, cell);
    }

    //food
    ctx.fillStyle = "#4B0082";
    //   ctx.beginPath();
    //   ctx.arc(spawnFood.x, spawnFood.y, 16, 0, 2 * Math.PI);
    //   ctx.fill();
    ctx.fillRect(spawnFood.x, spawnFood.y, cell, cell);

    let earthWormX = earthWorm[0].x;
    let earthWormY = earthWorm[0].y;
    //   console.log(
    //     `earthWorm[0].x: ${earthWorm[0].x}, earthWorm[0].y: ${earthWorm[0].y}`
    //   );
    console.log(`earthWormX: ${earthWormX}, earthWormY: ${earthWormY}`);

    //collision - eating food
    //   if (earthWormX === spawnFood.x && earthWormY === spawnFood.y) {
    //     score++;
    //     spawnFood = {
    //       x: getRandomIntInclusive(1, 18) * cell,
    //       y: getRandomIntInclusive(2, 18) * cell,
    //     };
    //   } else {
    //     earthWorm.pop();
    //   }

    //moving
    if (direction == "left") earthWormX -= cell;
    if (direction == "right") earthWormX += cell;
    if (direction == "up") earthWormY -= cell;
    if (direction == "down") earthWormY += cell;
    //   console.log(
    //     `Direction: ${direction}, earthWormX: ${earthWormX}, earthWormY: ${earthWormY}`
    //   );

    requestId = requestAnimationFrame(render);
  }

  //animate();

  document.addEventListener("keydown", (event) => {
    const key = event.code;
    if (key === "ArrowUp" && direction != "up") direction = "up";
    else if (key === "ArrowDown" && direction != "down") direction = "down";
    else if (key === "ArrowLeft" && direction != "left") direction = "left";
    else if (key === "ArrowRight" && direction != "right") direction = "right";
    //console.log(key);
  });

  function eatingTail(head, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (head.x == arr[i].x && head.y == arr[i].y) gameOver();
    }
  }

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

  // function eatSelfTail(head, arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (head.x == arr[i].x && head.y == arr[i].y) gameOver();
  //   }
  // }

  // function draw() {

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
});
