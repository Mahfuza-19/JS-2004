'use strict';

// document.querySelector('.uz').addEventListener('click', function () {
//   document.querySelector('.again').textContent = 'Qaytar';
//   document.querySelector('.between').textContent = '(1 dan 20 gacha sonlar)';
//   document.querySelector('h1').textContent = "O'ylagan sonni toping";
//   document.querySelector('.message').textContent = 'Qani ketik...';
//   document.querySelector('.label-score').textContent = '💯 Urinishlar soni:20;';
//   document.querySelector('.label-highscore').textContent =
//     ' 🥇 Eng yuqori ball:0;';
//   document.querySelector('.check').textContent = ' Tekshir';
// });

// document.querySelector('.eng').addEventListener('click', function () {
//   document.querySelector('.again').textContent = 'Again!';
//   document.querySelector('.between').textContent = '(Between 1 and 20 numbers)';
//   document.querySelector('h1').textContent = 'Guess My Number!';
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.label-score').textContent = '💯  Score: 20';
//   document.querySelector('.label-highscore').textContent = ' 🥇 Highscore:0';
//   document.querySelector('.check').textContent = ' check';
// });

let compyuterNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let language = 'eng';
let EngtoUzb = {
  '❌ No Number': '❌ Raqam kiritilmadi',
  'Too high!': 'Katta son kiritildi',
  'Too low!': 'Kichik son kiritildi',
  '✅ Correct Number!': " ✅ To'g'ri raqam",
  '😔 You lost the game': '😔 Afsuski yutqazdiyiz',
  'Start guessing...': "O'yinni boshladik",
};
function showMessage(message) {
  if (language == 'uzb') {
    document.querySelector('.message').textContent = EngtoUzb[message];
  } else {
    document.querySelector('.message').textContent = message;
  }
}
document.querySelector('.check').addEventListener('click', isCheck);
function isCheck() {
  let guessNumber = Number(document.querySelector('.guess').value);

  const NUMBER = document.querySelector('.number');

  if (score > 1) {
    if (!guessNumber) {
      showMessage('❌ No Number');
    } else if (guessNumber !== compyuterNumber) {
      showMessage(guessNumber > compyuterNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '✅ Correct Number!';
      showMessage('✅ Correct Number!');
      NUMBER.textContent = compyuterNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      NUMBER.style.width = '25rem';
      highscore = score > highscore ? score : highscore;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    showMessage('😔 You lost the game');
    document.querySelector('.score').textContent = 0;
  }
}

document.querySelector('.again').addEventListener('click', () => {
  compyuterNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.uzbek').addEventListener('click', () => {
  language = 'uzb';
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '(1 dan 20 gacha)';
  document.querySelector('h1').textContent = 'Uylangan sonni top!';
  document.querySelector('.check').textContent = 'Tekshir!';
  document.querySelector('.message').textContent = 'Topishni boshlang...';
  document.querySelector('.label-score').innerHTML =
    '💯 Ball:<span class="score"> 20<span>';
  document.querySelector('.label-highscore').innerHTML =
    'Yuqore Ball:<span class="highscore"> 0<span>';
});

document.querySelector('.english').addEventListener('click', () => {
  language = 'eng';
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.label-score').innerHTML =
    '💯 Score:<span class="score"> 20<span>';
  document.querySelector('.label-highscore').innerHTML =
    'HighScore:<span class="highscore"> 0 <span>';
  document.querySelector('.check').textContent = ' check';
});

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') isCheck();
  console.log(123);
});
