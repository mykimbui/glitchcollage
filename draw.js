const canvasTag = document.querySelector('canvas')

canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerWidth + 'px'
canvasTag.style.height = window.innerHeight + 'px'

const context = canvasTag.getContext('2d')
context.scale(2,2)

let aimX = null
let aimY = null
let currentX = null
let currentY = null
let circleRadius = 50

let i = 0

// const images = ['img1.png'].map(src => {
//   const image = document.createElement('img')
//   image.src = src
//   return image
// })

document.addEventListener("mousemove", function(event) {
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null){
    currentX = event.pageX
    currentY = event.pageY
  }
})

// canvasTag.addEventListener('click', function(){
//   i++
//   if (i>= images.length) {
//     i = 0
//   }
// })

const draw = function() {
  if(currentX) {

    context.beginPath()
    context.arc(currentX - (circleRadius/2), currentY - (circleRadius/2), circleRadius, 0, 2 * Math.PI)

    const gradient = context.createLinearGradient(0, 0, 200, 0)
    gradient.addColorStop(0, 'red')
    gradient.addColorStop(1, 'yellow')

    context.fillStyle = gradient
    context.fill()

    // if (circle.complete) {
    //   context.drawImage(circle, currentX - (imageWidth/2), currentY - (imageHeight/2), imageWidth, imageHeight)
    // }
    currentX = currentX + (aimX - currentX) * 0.1
    currentY = currentY + (aimY - currentY) * 0.1
  }
  requestAnimationFrame(draw)
}

draw()
