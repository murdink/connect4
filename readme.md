# Connect 4

## Installation

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npm test
```

## Rules of Connect 4

- One of the players wins by connecting 4 of the same colored discs in a row.
- The discs can be connected horizontally, vertically, or diagonally.
- The game board is a 6x7 grid.
- A cell can be empty, or it can contain a disc.
- A disc can be red or yellow.

### The following is an example of a game grid

```ts
[
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  ['red', null, null, null, null, 'yellow', null],
  ['red', null, null, null, null, 'yellow', null],
]
```

## Approach to solving the problem

### Assumptions

- The game board is represented by a 2D array.
- The first index is the row, the second index is the column.
- The first row is the top row, the last row is the bottom row.
- The first column is the left column, the last column is the right column.

### Algorithm

1. Check if there are 4 discs of the same color in a row.
2. Check if there are 4 discs of the same color in a column.
3. Check if there are 4 discs of the same color in a diagonal.

## Remarks

- Tried my best to do TDD, so the tests were written first.
- I didn't try to solve the problem in the most efficient way possible, but rather in a way that was easy to understand.
- I tried my best to avoid magic numbers in the code.
