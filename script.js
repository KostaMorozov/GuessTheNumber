'use strict';

const randomNumberPicker = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let randomNumber = randomNumberPicker();
let score = 20;
let highscore = 0;

const again = () => {
  randomNumber = randomNumberPicker();
  score = 20;
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  setGuessNumber('?');
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const checkHighScore = () => {
  if (score > highscore) highscore = score;
  return highscore;
};

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setGuessNumber = number => {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', checkWin);
document.querySelector('.again').addEventListener('click', again);

function checkWin() {
  if (document.querySelector('.guess').value === '') {
    setMessage('⛔ Please Pick A Number');
    return;
  }
  if (randomNumber === Number(document.querySelector('.guess').value)) {
    setMessage('🏆 Correct Number');
    document.querySelector('.highscore').textContent = checkHighScore();
    setGuessNumber(randomNumber);
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').style.width = '30rem';
    return;
  }

  randomNumber > Number(document.querySelector('.guess').value)
    ? (setMessage('Try Higher Number'),
      score--,
      (document.querySelector('.score').textContent = score))
    : (setMessage('Try Lower Number'),
      score--,
      (document.querySelector('.score').textContent = score));
}
