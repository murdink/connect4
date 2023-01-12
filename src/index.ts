import { Grid, Player, Row } from 'src/types'

const VALID_ROWS_COUNT = 6
const VALID_COLUMNS_COUNT = 7
const WINNING_COUNT = 4

const checkRowWinner = (row: Row) => {
  let count = 0
  let lastPlayer: Player | null = null
  for (const player of row) {
    if (player === lastPlayer) {
      count++
    } else {
      count = 1
    }
    if (count === WINNING_COUNT) {
      return player
    }
    lastPlayer = player
  }
  return null
}

const checkColumnWinner = (grid: Grid, columnIndex: number) => {
  let count = 0
  let lastPlayer: Player | null = null
  for (const row of grid) {
    const player = row[columnIndex]
    if (player === lastPlayer) {
      count++
    } else {
      count = 1
    }
    if (count === WINNING_COUNT) {
      return player
    }
    lastPlayer = player
  }
  return null
}

const checkDiagonalsWinner = (grid: Grid) => {
  for (let rowIndex = 0; rowIndex < VALID_ROWS_COUNT; rowIndex++) {
    for (
      let columnIndex = 0;
      columnIndex < VALID_COLUMNS_COUNT;
      columnIndex++
    ) {
      const player = grid[rowIndex][columnIndex]
      if (player === null) continue
      const diagonal1 = [player]
      const diagonal2 = [player]
      for (let i = 1; i < WINNING_COUNT; i++) {
        const player1 = grid[rowIndex + i]?.[columnIndex + i]
        const player2 = grid[rowIndex + i]?.[columnIndex - i]
        if (player1 === player) {
          diagonal1.push(player1)
          if (diagonal1.length === WINNING_COUNT) {
            return player
          }
        }
        if (player2 === player) {
          diagonal2.push(player2)
          if (diagonal2.length === WINNING_COUNT) {
            return player
          }
        }
      }
    }
  }
  return null
}

export const getGridWinner = (grid: Grid): Player | null => {
  if (grid.length !== VALID_ROWS_COUNT) return null
  if (grid.some((row) => row.length !== VALID_COLUMNS_COUNT)) return null

  for (const row of grid) {
    const winner = checkRowWinner(row)
    if (winner) return winner
  }

  for (let columnIndex = 0; columnIndex < VALID_COLUMNS_COUNT; columnIndex++) {
    const winner = checkColumnWinner(grid, columnIndex)
    if (winner) return winner
  }

  const winner = checkDiagonalsWinner(grid)
  if (winner) return winner

  return null
}
