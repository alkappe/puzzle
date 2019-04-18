var allPieces = document.querySelectorAll('.cell')
var emptyCell = document.querySelector('.empty')

var cell00 = document.querySelector('.cell-0-0')
var cell01 = document.querySelector('.cell-0-1')
var emptyCell = document.getElementById('0')
var puzzleContainer = document.getElementById('puzzle-container')
var play = document.querySelector('.play')

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

    if(isCompleted()) {
      setTimeout(function(){
        youWin.style.display = 'inline'
        text.style.display = 'inline'
        puzzleContainer.style.display = 'none'
        play.style.display = 'none'
      }, 1500);
    }
  }

}))

function swapCells(cell) {
  var cellClassname = cell.className
  cell.className = emptyCell.className
  emptyCell.className = cellClassname
}

const state = [
  [2, 1],
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 2],
  [2, 2],
  [2, 0],
  [1, 1]
]

// se tutti gli elementi da 1 a 9 sono ordinati in modo
// crescente allora significa che il puzzle è completo

// ritorna true se gli elementi sono ordinati, false altrimenti
function isCompleted() {
  for (var i = 1; i < state.length - 1; i++) {
    if(!isInFrontOf(state[i], state[i + 1])){
      return false
    }
  }
  return true
}

console.log('is completed', isCompleted())

// ritorna true se pos2 è piu avanti di pos1
// false altrimenti
function isInFrontOf(pos1, pos2){
  if(pos2[0] === pos1[0]){
    return pos2[1] > pos1[1]
  } else {
    return pos2[0] > pos1[0]
  }
}


/* 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀 you-win page 🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
* inspired by Wes Bos https://wesbos.com/courses/
*/
const youWin = document.querySelector('.you-win')
const text = youWin.querySelector('#crab-text')
const walk = 100 //how is streched

function shadow(e) {

  const { offsetWidth: width, offsetHeight: height } = youWin;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  /*
   100
    50
   -50
  */

  const xWalk = Math.round((x / width * walk ) - (walk / 2)) || Math.round(e.beta/5);
  const yWalk = Math.round((y / height * walk ) - (walk / 2)) || Math.round(e.gamma/5)

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(206, 2, 43,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(3, 206, 20,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(244, 238, 65,0.7)
  `;
}

youWin.addEventListener('mousemove', shadow)
window.addEventListener('deviceorientation', shadow);
