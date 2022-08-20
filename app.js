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
  let isPause = true;

  let wormy = [];

  document.addEventListener("keydown", (event) => {
    const code = event.code;
    if (code === "ArrowUp" && direction != "up") direction = "up";
    else if (code === "ArrowDown" && direction != "down") direction = "down";
    else if (code === "ArrowLeft" && direction != "right") direction = "left";
    else if (code === "ArrowRight" && direction != "left") direction = "right";
    if (code === "KeyP" && isPause) {
      isPause = false;
      cancelAnimationFrame(requestId);
      gamePause();
    } else if (code === "KeyP" && !isPause) {
      isPause = true;
      requestId = requestAnimationFrame(animate);
    }
  });

  //Стартовая позиция
  wormy[0] = {
    x: 9 * cell,
    y: 10 * cell,
  };
  //console.log(wormy[0]);

  let spawnFood = {
    x: getRandomIntInclusive(1, 18) * cell,
    y: getRandomIntInclusive(2, 18) * cell,
  };
  //console.log(`x: ${spawnFood.x}, y: ${spawnFood.y}`);

  // Основной игровой цикл
  function animate() {
    update();
    render();
  }

  function update() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    let addHead = {
      x: wormy[0].x,
      y: wormy[0].y,
    };
    eatingTail(addHead, wormy);
    wormy.unshift(addHead);
  }

  function render() {
    requestId = requestAnimationFrame(animate);
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#000";
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

    //wormy
    for (let i = 0; i < wormy.length; i++) {
      ctx.fillStyle = i < 2 ? "#00ff00" : "#ff0000";
      ctx.fillRect(wormy[i].x, wormy[i].y, cell, cell);
    }

    //food
    ctx.fillStyle = "#4B0082";
    ctx.fillRect(spawnFood.x, spawnFood.y, cell, cell);

    //collision - eating food
    if (wormy[0].x === spawnFood.x && wormy[0].y === spawnFood.y) {
      score++;
      spawnFood = {
        x: getRandomIntInclusive(1, 18) * cell,
        y: getRandomIntInclusive(2, 18) * cell,
      };
    } else {
      wormy.pop();
    }

    //moving
    if (direction === "left") wormy[0].x -= cell;
    if (direction === "right") wormy[0].x += cell;
    if (direction === "up") wormy[0].y -= cell;
    if (direction === "down") wormy[0].y += cell;

    if (
      wormy[0].x < cell ||
      wormy[0].x > cell * 18 ||
      wormy[0].y < 2 * cell ||
      wormy[0].y > cell * 18
    )
      gameOver();
  }

  //self eating
  function eatingTail(head, arr) {
    //   wormy.forEach((element) => {
    //     if (head.x === element.x && head.y === element.y) gameOver();
    //   });

    for (let i = 0; i < arr.length; i++) {
      if (head.x === arr[i].x && head.y === arr[i].y) gameOver();
    }
  }

  function gameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(128, 160, 384, 192);
    ctx.fillStyle = "#800000";
    ctx.font = "60px Helvetica";
    ctx.fillText(`Game over!`, 160, 280);
    cancelAnimationFrame(requestId);
  }

  function gamePause() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.fillRect(128, 160, 384, 192);
    ctx.fillStyle = "#800000";
    ctx.font = "60px Helvetica";
    ctx.fillText(`Pause`, 236, 280);
    cancelAnimationFrame(requestId);
  }

  //Диапозон случайных чисел (max и min включаются)
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  animate();
});
