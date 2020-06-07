var sudoku = [[0, 2, 0, 0, 0, 0, 9, 1, 3],
          [0, 0, 5, 0, 0, 0, 0, 8, 7],
          [0, 0, 0, 1, 9, 0, 0, 0, 0],
          [1, 0, 0, 6, 8, 0, 0, 7, 0],
          [0, 9, 0, 0, 0, 0, 0, 0, 2],
          [0, 0, 4, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 2, 0],
          [8, 0, 0, 0, 0, 0, 0, 4, 0],
          [0, 0, 6, 4, 0, 3, 0, 0, 0]];

function possibleVal(row, col, n) {
    for (let i = 0; i <= 9; i++) {
        if (sudoku[row][i] == n) {
            return false;
        }
    }
    for (let i = 0; i <= 9; i++) {
        if (sudoku[i][col] == n) {
            return false;
        }
    }
    var col0 = (col / 3) * 3;
    var row0 = (row / 3) * 3;
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            if (sudoku[row0 + i][col0 + j] == n) {
                return false;
            }
        }
    }
    return true
}

function solve() {
    for (let row = 0; row <= 9; row++) {
        for (let col = 0; col <= 9; col++) {
            if (sudoku[row][col] == 0) {
                for (let n = 1; n <= 9; n++) {
                    if (possibleVal(row, col, n) == true) {
                        sudoku[row][col] = n;
                        solve();
                        sudoku[row][col] = 0;
                    }
                }
                return;
            }
        }
    }
    console.log(sudoku);
}