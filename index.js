var allPieces = document.querySelectorAll('.cell')
var emptyCell = document.querySelector('.empty')

var cell00 = document.querySelector('.cell-0-0')
var cell01 = document.querySelector('.cell-0-1')
var emptyCell = document.querySelector('.cell-2-2')

allPieces.forEach(cell => cell.addEventListener('click', function () {
  swapCells(cell)
}))

function swapCells(cell) {
  var cellClassname = cell.className
  cell.className = emptyCell.className
  emptyCell.className = cellClassname
}

const state = {
  1:[0, 0],
  2:[0, 1],
  3:[0, 2],
  4:[1, 0],
  5:[1, 1],
  6:[1, 2],
  7:[2, 0],
  8:[2, 1],
  0:[2, 2]
}

var stateEmpty = state[0]
var state8 = state[8]

var diffA = stateEmpty[0] - state8[0]
var diffB = stateEmpty[1] - state8[1]
console.log(diffA, diffB)
