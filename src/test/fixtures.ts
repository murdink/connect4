import { Grid, Player as P } from 'src/types'

export const invalidColumnsGrid: Grid = [
  [],
  [P.Red, null, null, null, null, null, null, null],
  [null, null, null, null, P.Yellow, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
]

export const invalidRowsGrid: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
]

export const redWinningRow: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, P.Yellow, null],
  [P.Yellow, null, null, null, null, P.Yellow, null],
  [P.Red, P.Red, P.Red, P.Red, null, P.Yellow, null],
]

export const redWinningColumn: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [P.Red, null, null, null, null, null, null],
  [P.Red, null, null, null, null, P.Yellow, null],
  [P.Red, null, null, null, null, P.Yellow, null],
  [P.Red, null, null, null, null, P.Yellow, null],
]

export const redWinningDiagonal: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, P.Red],
  [null, null, null, null, null, P.Red, P.Yellow],
  [null, null, null, null, P.Red, P.Yellow, P.Yellow],
  [null, null, null, P.Red, P.Yellow, P.Red, P.Yellow],
]

export const yellowWinningRow: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, P.Red, null],
  [null, P.Red, P.Red, P.Red, null, P.Red, null],
  [P.Yellow, P.Yellow, P.Yellow, P.Yellow, null, P.Yellow, null],
]

export const yellowWinningColumn: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [P.Yellow, null, null, null, null, null, null],
  [P.Yellow, null, null, null, null, P.Red, null],
  [P.Yellow, null, null, null, null, P.Red, null],
  [P.Yellow, null, null, null, null, P.Red, null],
]

export const yellowWinningDiagonal: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [P.Yellow, null, null, null, null, null, null],
  [P.Red, P.Yellow, null, null, null, null, null],
  [P.Yellow, P.Red, P.Yellow, null, null, null, null],
  [P.Red, P.Red, P.Red, P.Yellow, null, null, null],
]

export const noWinnerGrid: Grid = [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [P.Red, P.Yellow, P.Red, P.Yellow, P.Red, P.Yellow, P.Red],
]
