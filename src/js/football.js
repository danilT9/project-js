const field = document.querySelector('.field');
const ball = document.querySelector('.ball');
const gate = document.querySelector('.gate');
const scoreElement = document.querySelector('#score');

let score = 0;

const startLeft = 92;
const startTop = 85;

function checkGoal() {
  const ballRect = ball.getBoundingClientRect();
  const gateRect = gate.getBoundingClientRect();

  if (
    ballRect.left < gateRect.right &&
    ballRect.right > gateRect.left &&
    ballRect.top < gateRect.bottom &&
    ballRect.bottom > gateRect.top
  ) {
    score += 1;
    scoreElement.textContent = score;
    resetBall();
  }
}

function resetBall() {
  ball.style.left = startLeft + 'px';
  ball.style.top = startTop + 'px';
}

field.onclick = function (event) {
  const fieldCoords = field.getBoundingClientRect();
  let ballCoords = {
    top:
      event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left:
      event.clientX -
      fieldCoords.left -
      field.clientLeft -
      ball.clientWidth / 2,
  };

  if (ballCoords.top < 0) ballCoords.top = 0;

  if (ballCoords.left < 0) ballCoords.left = 0;

  if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
  }

  if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = ballCoords.left + 'px';
  ball.style.top = ballCoords.top + 'px';

  setTimeout(checkGoal, 300);
};