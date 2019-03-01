var allPieces = document.querySelectorAll('.cell')
var sixPiece = document.querySelectorAll('.cell')[5]
/*
* swipe code
*/
var x = {};
var y = {};

document.addEventListener('touchstart', function(event) {
  if (!x.start || x.start === 0) {
    x.start = event.layerX || event.touches[0].pageX;
  }
  x.end = event.layerX || event.touches[0].pageX;

  if (!y.start || y.start === 0) {
    y.start = event.layerY || event.touches[0].pageY;
  }
  y.end = event.layerY || event.touches[0].pageY;

});

document.addEventListener('touchmove', function(event) {
  if (!x.start || x.start === 0) {
    x.start = event.layerX || event.touches[0].pageX;
  }
  x.end = event.layerX || event.touches[0].pageX;

  if (!y.start || y.start === 0) {
    y.start = event.layerY || event.touches[0].pageY;
  }
  y.end = event.layerY || event.touches[0].pageY;

})

document.addEventListener('touchend', function(event) {
  if (y.end < y.start) {
    console.log('top')
  }

  if (y.end > y.start) {
    console.log('bottom')
    //allPieces[counter].moveBottom()
  }

  x.start = 0;
  x.end = 0;

})

allPieces.forEach(piece => {
  piece.addEventListener('click', function () {
    piece.classList.add('move-bottom');
  })
})

function moveBottom() {
  sixPiece.classList.add('move-bottom');
}

sixPiece.addEventListener('click', moveBottom)
