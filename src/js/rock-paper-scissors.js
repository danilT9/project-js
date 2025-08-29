const stone = document.querySelector('.stone');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const text_rock_paper_scissors = document.querySelector(
  '#text_rock_paper_scissors'
);
const btn_rock_paper_scissors = document.querySelector(
  '.btn_rock_paper_scissors'
);
const compSvg = document.querySelector('.comp_answer');
const compUse = compSvg.querySelector('use');
const mySvg = document.querySelector('.my_answer');
const myUse = mySvg.querySelector('use');
const my_score = document.querySelector('.my_score');
const comp_score = document.querySelector('.comp_score');
const btn_continue = document.querySelector('.btn_continue');

let scoreMy = 0;
let scoreComp = 0;
my_score.textContent = scoreMy;
comp_score.textContent = scoreComp;
let playerChoice = null;
let compChoice = null;
const images = [
  'img/symbol-defs.svg#stone',
  'img/symbol-defs.svg#scissors',
  'img/symbol-defs.svg#paper',
];

function selectPlayer(choice) {
  playerChoice = choice;
  myUse.setAttribute('href', images[choice]);
  mySvg.style.display = 'inline';
  text_rock_paper_scissors.textContent =
    'Тепер натисни кнопку, щоб комп зробив свій вибір';
  text_rock_paper_scissors.className = '';
}
stone.addEventListener('click', () => selectPlayer(0));
scissors.addEventListener('click', () => selectPlayer(1));
paper.addEventListener('click', () => selectPlayer(2));
function btnComputer() {
  compChoice = Math.floor(Math.random() * images.length);
  const href = images[compChoice];
  compUse.setAttribute('href', href);
  btn_rock_paper_scissors.style.display = 'none';
  compSvg.style.display = 'inline';

  checkWinner(playerChoice, compChoice);
}

btn_rock_paper_scissors.addEventListener('click', btnComputer);

function checkWinner(playerChoise, compChoice) {
  const rect = text_rock_paper_scissors.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;
  if (playerChoise === compChoice) {
    text_rock_paper_scissors.textContent = 'Нічия!';
    text_rock_paper_scissors.className = 'green_rock_paper_scissors';
  } else if (
    (playerChoise === 0 && compChoice === 1) ||
    (playerChoise === 1 && compChoice === 2) ||
    (playerChoise === 2 && compChoice === 0)
  ) {
    text_rock_paper_scissors.textContent = 'Ви виграли раунд!';
    text_rock_paper_scissors.className = 'green_rock_paper_scissors';
    scoreComp++;
    comp_score.textContent = scoreComp;
    showLike();
  } else {
    text_rock_paper_scissors.textContent = 'Комп’ютер виграв раунд!';
    text_rock_paper_scissors.className = 'red_rock_paper_scissors';
    scoreMy++;
    my_score.textContent = scoreMy;
  }

  if (scoreMy === 5) {
    text_rock_paper_scissors.textContent = 'Комп’ютер виграв гру';
    text_rock_paper_scissors.className = 'red_rock_paper_scissors';
    btn_rock_paper_scissors.style.display = 'none';
    btn_continue.textContent = 'Почати знову';
    confetti({
      particleCount: 40,
      spread: 30,
      startVelocity: 20,
      scalar: 0.7,
      origin: { x, y },
      colors: [
        '#ff0000',
        '#660000',
        '#000000',
        '#111111',
        '#222222',
        '#333333',
      ],
    });
  } else if (scoreComp === 5) {
    text_rock_paper_scissors.textContent = 'Ви виграли гру!';
    text_rock_paper_scissors.className = 'green_rock_paper_scissors';
    btn_rock_paper_scissors.style.display = 'none';
    btn_continue.textContent = 'Почати знову';
    confetti({
      particleCount: 40,
      spread: 30,
      startVelocity: 20,
      scalar: 0.7,
      origin: { x, y },
    });
  }
}

btn_continue.addEventListener('click', () => {
  btn_rock_paper_scissors.style.display = 'inline';
  compSvg.style.display = 'none';
  mySvg.style.display = 'none';
  text_rock_paper_scissors.textContent = 'Зроби свій хід!';
  text_rock_paper_scissors.className = '';
  playerChoice = null;
  compChoice = null;
  btn_continue.textContent = 'Наступний раунд';
  if (scoreMy === 5 || scoreComp === 5) {
    scoreMy = 0;
    scoreComp = 0;
    my_score.textContent = scoreMy;
    comp_score.textContent = scoreComp;
  }
});

function showLike() {
  const like = document.createElement('div');
  like.className = 'like';
  like.textContent = '👍';

  const rect = text_rock_paper_scissors.getBoundingClientRect();
  like.style.left = rect.left + rect.width / 2 + 'px';
  like.style.top = rect.top - 5 + 'px';
  document.body.appendChild(like);

  setTimeout(() => {
    like.remove();
  }, 1000);
}
