function countNeighbors(row: number, col: number, board: number[][]): number {
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  let neighborsCount = 0;

  for (let i = 0; i < dirs.length; i++) {
    const dir = dirs[i];
    const r = row + dir[0];
    const c = col + dir[1];

    if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
      if (board[r][c] === 1 || board[r][c] === 3) {
        neighborsCount++;
      }
    }
  }

  return neighborsCount;
}

/**
 Do not return anything, modify board in-place instead.

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 */
function gameOfLife(board: number[][]): void {
  /*
  old   new        
  0       0      0
  1       0      1
  0       1      2
  1       1      3
  */

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const neighborsCount = countNeighbors(row, col, board);

      // living cell
      if (board[row][col] === 1) {
        if (neighborsCount === 2 || neighborsCount === 3) {
          board[row][col] = 3;
        }
      }
      // dead cell
      else if (board[row][col] === 0) {
        if (neighborsCount === 3) {
          board[row][col] = 2;
        }
      }
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
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
