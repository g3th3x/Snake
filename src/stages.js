import { Cell } from "./Cell.js";

export function stageMaker(game, stage) {
  let cells = [];

  stage.forEach((row, rowIndex) => {
    row.forEach((cellColor, cellIndex) => {
      let position = {
        x: 32 + 32 * cellIndex,
        y: 64 + 32 * rowIndex,
      };

      cells.push(new Cell(game, position, cellColor));
    });
  });

  return cells;
}

function stageOne(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = (i + j) % 2 === 0 ? 1 : 0;
    }
  }

  //   // Add random eat
  //   i = getRand(0, size - 1);
  //   j = getRand(0, size - 1);
  //   arr[i][j] = 2;

  //   const eat = { i, j };

  return arr;
}

function stageTwo(size) {
  let arr = [],
    l = 8,
    r = 10,
    figSize = 9;

  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = j > l && j < r ? 1 : 0;
    }
    if (i < figSize) {
      l--;
      r++;
    } else {
      l++;
      r--;
    }
  }

  return arr;
}

function stageThree(size) {
  let arr = [];
  let half = size;
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = j < half ? 1 : 0;
    }
    half--;
  }

  return arr;
}

let stage1 = stageOne(19);
let stage2 = stageTwo(19);
let stage3 = stageThree(19);

//console.log(stage1);

// const stage1 = [
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
//   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
// ];

// function getRand(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export const stages = [stage1, stage2, stage3];
