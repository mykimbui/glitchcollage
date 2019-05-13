const canvasTag = document.querySelector('canvas')
// const red = document.querySelector('.red')
// const green = document.querySelector('.green')
// const blue = document.querySelector('.blue')
// const yellow = document.querySelector('.yellow')
const title = document.querySelector('.title')


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
let imageWidth = 50
let imageHeight = 50

// const blueImage = document.createElement('img')
// blueImage.src = 'img0.png'

// const redImage = document.createElement('img')
// redImage.src = 'img1.png'

// const yellowImage = document.createElement('img')
// yellowImage.src = 'img2.png'

// const greenImage = document.createElement('img')
// greenImage.src = 'img3.png'

let i = 0

const images = ['img0.png', 'img1.png', 'img2.png', 'img3.png'].map(src => {
  const image = document.createElement('img')
  image.src = src
  return image
})

document.addEventListener("mousemove", function(event) {
  title.style.opacity = 0
  aimX = event.pageX
  aimY = event.pageY
  if (currentX === null){
    currentX = event.pageX
    currentY = event.pageY
  }
})

canvasTag.addEventListener('click', function(){
  i++
  if (i>= images.length) {
    i = 0
  }
})

const draw = function() {
  if(currentX) {
    if (images[i].complete) {
      context.drawImage(images[i], currentX - (imageWidth/2), currentY - (imageHeight/2), imageWidth, imageHeight)
    }
    currentX = currentX + (aimX - currentX) * 0.1
    currentY = currentY + (aimY - currentY) * 0.1
  }
  requestAnimationFrame(draw)
}

draw()



