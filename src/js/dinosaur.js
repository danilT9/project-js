const dino = document.querySelector('.dino-image');
const cactuses = document.querySelectorAll(
  '.cactus-image1, .cactus-image2, .cactus-image3'
);
const message = document.querySelector('.message');
const startBtn = document.querySelector('#startBtn');

let isJumping = false;
let gameIntervals = [];
let gameOver = false;

let minBottom;
let maxBottom;

if (window.innerWidth <= 480) {
  minBottom = 26;
  maxBottom = minBottom + 85;
} else if (window.innerWidth <= 768) {
  minBottom = 30;
  maxBottom = minBottom + 110;
} else {
  minBottom = 50;
  maxBottom = minBottom + 120;
}
let bottom = minBottom;

function jump() {
  if (isJumping || gameOver) {
    return;
  }
  isJumping = true;
  let up = setInterval(() => {
    if (bottom >= maxBottom) {
      clearInterval(up);
      let down = setInterval(() => {
        if (bottom <= minBottom) {
          clearInterval(down);
          isJumping = false;
        } else {
          bottom -= 5;
          dino.style.bottom = bottom + 'px';
        }
      }, 20);
    } else {
      bottom += 5;
      dino.style.bottom = bottom + 'px';
    }
  }, 20);
}

document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    event.preventDefault();
    jump();
  }
});

function moveCactus(cactus, startPosition) {
  cactus.style.display = 'block';
  cactus.style.left = startPosition + 'px';
  let position = startPosition;

  let interval = setInterval(() => {
    if (gameOver) {
      clearInterval(interval);
      return;
    }
    position -= 5;
    if (position < -50) {
      position = 800 + Math.random() * 200;
    }
    cactus.style.left = position + 'px';

    let dinoLeft = dino.offsetLeft;
    let dinoRight = dinoLeft + dino.offsetWidth;
    let cactusLeft = cactus.offsetLeft;
    let cactusRight = cactusLeft + cactus.offsetWidth;

    if (dinoRight > cactusLeft && dinoLeft < cactusRight && bottom < 60) {
      endGame();
    }
  }, 30);

  gameIntervals.push(interval);
}

function startGame() {
  message.style.display = 'none';
  bottom = minBottom;
  dino.style.bottom = bottom + 'px';
  gameOver = false;

  moveCactus(cactuses[0], 600);
  moveCactus(cactuses[1], 900);
  moveCactus(cactuses[2], 1200);
}

function endGame() {
  gameOver = true;
  message.style.display = 'block';
  gameIntervals.forEach(clearInterval);
  gameIntervals = [];
}

startBtn.addEventListener('click', startGame);
