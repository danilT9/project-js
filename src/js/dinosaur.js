const dino = document.querySelector('.dino-image')
const cactuses = document.querySelectorAll('.cactus-image1, .cactus-image2, .cactus-image3')
const message = document.querySelector('.message')
let isJumping = false
let bottom = 55
const minBottom = 55
const maxBottom = 120
function jump() {
    if (isJumping){   
        return
    }
    isJumping = true
    let up = setInterval(() => {  
        if (bottom >=maxBottom){
            clearInterval(up)
            fall()
        } else{
            bottom += 5
            dino.style.bottom = bottom + 'px'
        }
    }, 20)
}

function fall() {
    let down = setInterval(() => {
        if (bottom <= minBottom){
            clearInterval(down)
            isJumping = false
        } else {
            bottom -= 5
            dino.style.bottom = bottom + 'px'
        }
    }, 20)
}
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space'){
        e.preventDefault()
        jump()
    }
})

function moveCactus(cactus, Startposition) {
    let position = Startposition
    setInterval(() => {
        position -= 5
        if (position < -50){
            position = 700
        }
        cactus.style.left = position + 'px'  
    }, 30)
}

moveCactus(cactuses[0], 0)
moveCactus(cactuses[1], 200)
moveCactus(cactuses[2], 500)

