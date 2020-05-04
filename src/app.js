

// Draw images to canvas
var cvs = document.getElementById('canvas')
var ctx = cvs.getContext('2d')
//
// Load

var bird = new Image()
var bg = new Image()
var fg = new Image()
var pipeNorth = new Image()
var pipeSouth = new Image()

bird.src = 'images/sprite1.png'
bg.src = 'images/bg.png'
fg.src = 'images/fg.png'
pipeNorth.src = 'images/pipeNorth.png'
pipeSouth.src = 'images/pipeSouth.png'



// var imageName = new Image()
//
// imageName.src = 'images/sprite1'
//
// var audioName = new Audio()
//
// audioName.src = 'audio/audio.png'
//
//
// // pipe
//
// var pipe = []
//
// pipe[0] = {
//   x: cvs.width,
//   y: 0
// }
//
//
// // Draw
//
// ctx.drawImage(imageName, X, Y, width, height)
//
// //on keyDown Event: bY - = 20
//
// function draw() {
//
//   for(let i = 0; i < pipe.length; i++) {
//     ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y)
//     ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y+Const)
//
//     pipe[i].x--
//
//     if( pipe[i].x == cvs.width - 188) {
//       pipe.push(
//         x: cvs.width,
//         y: Math.floor(Math.random() * pN.height) - pN.height
//       )
//     }
//   }
//
//
//   ctx.drawImage(bg, 0, 0)
//
//   ctx.drawImage(pipeNorth, pX,pY)
//   ctx.drawImage(pipeSouth, pX,pY+Const)
//
//   ctx.drawImage(fg, 0, cvs.height - fg.height)
//
//   ctx.drawImage(bird, bX, bY)
//
//
//   bY + = gravity
//   requestAnimationFrame(draw)
// }
//
// draw()
//
// // gameover rules
//
// if (bX >= pX && bX + bird.width <= pX.width && (bY <= pY + pipe.height || bY + bird.height >= pY + const) || bY + bird.height >= cvs.height - fg.height)
