var allPieces = document.querySelectorAll('.cell')
var emptyCell = document.querySelector('.empty')

var cell00 = document.querySelector('.cell-0-0')
var cell01 = document.querySelector('.cell-0-1')
var emptyCell = document.querySelector('.cell-2-2')

allPieces.forEach(cell => cell.addEventListener('click', function () {

  var cellId = cell.id
  var stateEmpty = state[0]
  var stateClicked = state[cellId]
  //console.log(typeof state);

  //console.log(stateEmpty, stateClicked)
  var diffA = Math.abs(stateEmpty[0] - stateClicked[0])
  var diffB = Math.abs(stateEmpty[1] - stateClicked[1])

  var distance = diffA + diffB
  //console.log(distance)

  if (distance === 1 ) {
    swapCells(cell)
    state[cell.id] = state[0]
    state[0] = stateClicked
  }


  /*var hammertime = new Hammer(cellSwapable);

  hammertime.on('swipe', function(ev) {
    swapCells(cell)
    console.log(ev)
  })
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL});*/


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
