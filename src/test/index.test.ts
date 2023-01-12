import { getGridWinner } from 'src/index'
import {
  invalidColumnsGrid,
  invalidRowsGrid,
  noWinnerGrid,
  redWinningColumn,
  redWinningDiagonal,
  redWinningRow,
  yellowWinningColumn,
  yellowWinningDiagonal,
  yellowWinningRow,
} from 'src/test/fixtures'
import { Player as P } from 'src/types'

test('returns null when the grid is invalid', () => {
  expect(getGridWinner([])).toBe(null)
  expect(getGridWinner(invalidRowsGrid)).toBe(null)
  expect(getGridWinner(invalidColumnsGrid)).toBe(null)
})

test('returns null when there is no winner', () => {
  expect(getGridWinner(noWinnerGrid)).toBe(null)
})

test('returns correct player when he wins by aligning 4 discs in a row', () => {
  expect(getGridWinner(redWinningRow)).toBe(P.Red)
  expect(getGridWinner(yellowWinningRow)).toBe(P.Yellow)
})

test('returns correct player when he wins by aligning 4 discs in a column', () => {
  expect(getGridWinner(redWinningColumn)).toBe(P.Red)
  expect(getGridWinner(yellowWinningColumn)).toBe(P.Yellow)
})

test('returns correct player when he wins by aligning 4 discs in a diagonal', () => {
  expect(getGridWinner(redWinningDiagonal)).toBe(P.Red)
  expect(getGridWinner(yellowWinningDiagonal)).toBe(P.Yellow)
})
