function isValidSudoku(board: string[][]): boolean {
  const rows: Record<string, string[]> = {};
  const cols: Record<string, string[]> = {};
  const grids: Record<string, string[]> = {};

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      const currNum = board[r][c];
      const grid = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

      if (currNum === ".") {
        continue;
      }

      if (!rows[r]) {
        rows[r] = [];
      }
      if (!cols[c]) {
        cols[c] = [];
      }
      if (!grids[grid]) {
        grids[grid] = [];
      }

      if (
        rows[r].includes(currNum) ||
        cols[c].includes(currNum) ||
        grids[grid].includes(currNum)
      ) {
        return false;
      }

      rows[r].push(currNum);
      cols[c].push(currNum);
      grids[grid].push(currNum);
    }
  }

  return true;
}
