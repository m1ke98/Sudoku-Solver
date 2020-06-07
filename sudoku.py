sudoku = [[0, 2, 0, 0, 0, 0, 9, 1, 3],
          [0, 0, 5, 0, 0, 0, 0, 8, 7],
          [0, 0, 0, 1, 9, 0, 0, 0, 0],
          [1, 0, 0, 6, 8, 0, 0, 7, 0],
          [0, 9, 0, 0, 0, 0, 0, 0, 2],
          [0, 0, 4, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 1, 0, 2, 0],
          [8, 0, 0, 0, 0, 0, 0, 4, 0],
          [0, 0, 6, 4, 0, 3, 0, 0, 0]]

def possibleVal(row, col, n):
    # Check the row
    for i in range(0, 9):
        if sudoku[row][i] == n:
            return False
    # Check the column
    for i in range(0, 9):
        if sudoku[i][col] == n:
            return False
    # Check the square
    col0 = (col // 3) * 3
    row0 = (row // 3) * 3
    for i in range(0, 3):
        for j in range(0, 3):
            if sudoku[row0 + i][col0 + j] == n:
                return False
    return True

def solve():
    # Traverse the puzzle
    for row in range(9):
        for col in range(9):
            if sudoku[row][col] == 0:
                # Try all 'n' values using possibleVal function
                for n in range(1, 10):
                    if possibleVal(row, col, n):
                        sudoku[row][col] = n
                        # Move to next unknown val
                        solve()
                        # Backtrack resetting values to 0 to test new possibilities
                        sudoku[row][col] = 0
                return
    print(sudoku)

solve()