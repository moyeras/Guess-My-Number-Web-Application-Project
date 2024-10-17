'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);


  if (!guess) {
    displayMessage('⛔ No number!');
  }
 
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    
    document.body.classList.add('win');
    document.querySelector('.score').classList.add('win'); 

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    
    setTimeout(function () {
      document.querySelector('.again').click();
    }, 3000);
  } 
  
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  
  document.body.classList.remove('win');
  document.querySelector('.score').classList.remove('win'); 
});


document.querySelector('.increase').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  if (guessValue < 20) {
    document.querySelector('.guess').value = guessValue + 1;
  } else {
    displayMessage('🚫 Maximum is 20!');
  }
});


document.querySelector('.decrease').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);
  if (guessValue > 1) {
    document.querySelector('.guess').value = guessValue - 1;
  } else {
    displayMessage('🚫 Minimum is 1!');
  }
});


document.addEventListener('keydown', function (e) {
  let guessValue = Number(document.querySelector('.guess').value);
  if (e.key === 'ArrowUp') {
    if (guessValue < 20) {
      document.querySelector('.guess').value = guessValue + 1;
    } else {
      displayMessage('🚫 Maximum is 20!');
    }
  } else if (e.key === 'ArrowDown') {
    if (guessValue > 1) {
      document.querySelector('.guess').value = guessValue - 1;
    } else {
      displayMessage('🚫 Minimum is 1!');
    }
  }
});


document.querySelector('.guess').addEventListener('input', function () {
  const guess = Number(this.value);
  if (guess < 1 || guess > 20) {
    this.value = ''; 
    displayMessage('🚫 Enter a number between 1 and 20!');
  }
});
