let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userInput = document.getElementById('userInput').value;
  const result = document.getElementById('result');
  const attemptsElement = document.getElementById('attempts');

  if (userInput === '') {
    result.textContent = 'Please enter a number!';
    result.style.color = '#FF0000';
    return;
  }

  const guess = parseInt(userInput);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = 'Please enter a valid number between 1 and 100!';
    result.style.color = '#FF0000';
    return;
  }

  attempts++;

  if (attempts > 6) {
    result.textContent = 'Number of attempts exceeded. The secret number is now changed.';
    result.style.color = '#FF0000';

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = `Attempts: ${attempts}`;
    return;
  }

  let pink = '{';
  let red = 'f';
  let black = 'l';
  let purple = 'a';
  let yellow = 'g';
  let blue = '_';
  let orange = '2';
  let white = '5';
  let green = '8';
  let golden = '6';
  let silver = '}';

  if (guess === secretNumber) {
    let fullFlag = pink + red + black + purple + yellow + blue + orange + white + green + golden + silver;

    result.innerHTML = `Congratulations! You guessed it right.<br><span style="color: #32CD32;">Your reward: ${fullFlag}</span>`;
  } else if (guess < secretNumber) {
    result.textContent = 'Too low! Try again.';
    result.style.color = 'orange';
  } else {
    result.textContent = 'Too high! Try again.';
    result.style.color = 'orange';
  }

  attemptsElement.textContent = `Attempts: ${attempts}`;
}

function createGlowingParticles() {
  const numberOfParticles = 150; // Increase number of particles for an even distribution

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('glowing-particle');
    document.body.appendChild(particle);

    const xPosition = Math.random() * window.innerWidth;
    const yPosition = Math.random() * window.innerHeight;
    const delay = Math.random() * 5; // Random delay for each particle

    particle.style.left = `${xPosition}px`;
    particle.style.top = `${yPosition}px`;
    particle.style.animationDelay = `-${delay}s`;
  }
}

createGlowingParticles();