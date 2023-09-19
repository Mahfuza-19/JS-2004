'use strict';

document.querySelector('.uz').addEventListener('click', function () {
  document.querySelector('.again').textContent = 'Qaytar';
  document.querySelector('.between').textContent = '(1 dan 20 gacha sonlar)';
  document.querySelector('h1').textContent = "O'ylagan sonni toping";
  document.querySelector('.message').textContent = 'Qani ketik...';
  document.querySelector('.label-score').textContent = '💯 Urinishlar soni:20;';
  document.querySelector('.label-highscore').textContent =
    ' 🥇 Eng yuqori ball:0;';
  document.querySelector('.check').textContent = ' Tekshir';
});

document.querySelector('.eng').addEventListener('click', function () {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20 numbers)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').textContent = '💯  Score: 20';
  document.querySelector('.label-highscore').textContent = ' 🥇 Highscore:0';
  document.querySelector('.check').textContent = ' check';
});
