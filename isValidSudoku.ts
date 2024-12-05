function isValidSudoku(board: string[][]): boolean {
  let rows: Record<string, string[]> = {};
  let cols: Record<string, string[]> = {};
  let grids: Record<string, string[]> = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === "") {
        continue;
      }

      const grid = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
      const num = board[r][c];

      if (!rows[r]) rows[r] = [];
      if (!cols[c]) cols[c] = [];
      if (!grids[grid]) grids[grid] = [];

      if (
        rows[r].includes(num) ||
        cols[c].includes(num) ||
        grids[grid].includes(num)
      ) {
        return false;
      }

      rows[r].push(num);
      cols[c].push(num);
      grids[grid].push(num);
    }
  }

  return true;
}
