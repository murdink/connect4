import { Grid, Player } from 'src/types'

const ROWS_COUNT = 6
const COLUMNS_COUNT = 7
const WINNING_COUNT = 4

// Iterate over the rows and check if there are 4 consecutive cells with the same player.
const checkRowWinner = (grid: Grid): Player | null => {
  for (const row of grid) {
    let lastPlayer: Player | null = null
    let count = 0
    for (const player of row) {
      if (player) {
        if (player === lastPlayer) {
          count++
        } else {
          count = 1
        }
        if (count === WINNING_COUNT) {
          return player
        }
      }
      lastPlayer = player
    }
  }
  return null
}

// Iterate over the columns and check if there are 4 consecutive cells with the same player.
const checkColumnWinner = (grid: Grid): Player | null => {
  for (let columnIndex = 0; columnIndex < COLUMNS_COUNT; columnIndex++) {
    let count = 0
    let lastPlayer: Player | null = null
    for (const row of grid) {
      const player = row[columnIndex]
      if (player) {
        if (player === lastPlayer) {
          count++
        } else {
          count = 1
        }
        if (count === WINNING_COUNT) {
          return player
        }
      }
      lastPlayer = player
    }
  }
  return null
}

// Iterate over every cell and check if there are 4 consecutive cells with the same player in either
// one of the descending to the left or descending to the right diagonals.
const checkDiagonalsWinner = (grid: Grid): Player | null => {
  for (let rowIndex = 0; rowIndex < ROWS_COUNT; rowIndex++) {
    for (let columnIndex = 0; columnIndex < COLUMNS_COUNT; columnIndex++) {
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
  if (grid.length !== ROWS_COUNT) return null
  if (grid.some((row) => row.length !== COLUMNS_COUNT)) return null

  return (
    checkRowWinner(grid) ||
    checkColumnWinner(grid) ||
    checkDiagonalsWinner(grid)
  )
}
