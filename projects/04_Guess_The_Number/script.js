let randomNumber = Math.floor((Math.random() * 100) + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('.user-input');
const prev = document.querySelector('.previous-guesses');
const remaining = document.querySelector('.remaining-guesses');
const HighOrLow = document.querySelector('.HighOrLow');
const resultBlock = document.querySelector('.resultBlock');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });

  // Add Enter key support
  userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    }
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess === '') {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right! The number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`📈 Number is too Low! Try higher.`);
  } else if (guess > randomNumber) {
    displayMessage(`📉 Number is too High! Try lower.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prev.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  HighOrLow.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultBlock.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    prev.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    userInput.value = '';
    userInput.focus();
    resultBlock.removeChild(p);
    HighOrLow.innerHTML = '';

    playGame = true;
  });
}