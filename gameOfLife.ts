/*
- 
*/

const countNeighbors = (
  row: number,
  col: number,
  board: number[][]
): number => {
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];

  let neighborsCount = 0;

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    if (
      row + dir[0] < board.length &&
      row + dir[0] >= 0 &&
      col + dir[1] < board[0].length &&
      col + dir[1] >= 0
    ) {
      if (
        board[row + dir[0]][col + dir[1]] === 1 ||
        board[row + dir[0]][col + dir[1]] === 3
      ) {
        neighborsCount += 1;
      }
    }
  }

  return neighborsCount;
};

/**
 Do not return anything, modify board in-place instead.

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 */
function gameOfLife(board: number[][]): void {
  /*
    original new 
    0         0     0       
    1         0     1
    0         1     2
    1         1     3
  */

  const rowsCount = board.length;
  const colsCount = board[0].length;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < colsCount; col++) {
      const neighborsCount = countNeighbors(row, col, board);

      // if living cell
      if (board[row][col]) {
        if (neighborsCount === 2 || neighborsCount === 3) {
          board[row][col] = 3;
        }
      } else {
        // dead cell
        if (neighborsCount === 3) {
          board[row][col] = 2;
        }
      }
    }
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < colsCount; col++) {
      if (board[row][col] === 1) {
        board[row][col] = 0;
      }
      if (board[row][col] === 2) {
        board[row][col] = 1;
      }
      if (board[row][col] === 3) {
        board[row][col] = 1;
      }
    }
  }
}

gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]);
