'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let points = 20;
let highpoints = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    displayMessage('YaY! Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'red';
    if (points > highpoints) {
      highpoints = points;
      document.querySelector('.highpoints').textContent = highpoints;
    }
  } else if (guess !== secretNumber) {
    if (points > 1) {
      displayMessage(guess > secretNumber ? 'Too Large' : 'Too Low');
      points--;
      document.querySelector('.points').textContent = points;
    } else {
      displayMessage('You Lost the Game');
      points = 0;
      document.querySelector('.points').textContent = points;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  points = 20;
  document.querySelector('.points').textContent = points;
  Number((document.querySelector('.guess').value = ''));
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#311414';
});
