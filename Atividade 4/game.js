// game.js
import { generateRandomNumber } from './randomNumber.js';
import { checkGuess } from './GuessChecker.js';

const MAX_ATTEMPTS = 5;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
    attempts = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').disabled = false;
}

function handleGuess() {
    const guessInput = document.getElementById('guessInput');
    const resultDiv = document.getElementById('result');
    
    const userInput = guessInput.value;
    const guess = parseInt(userInput, 10);

    if (isNaN(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
        resultDiv.innerText = "Entrada inválida. Por favor, insira um número entre 1 e 100.";
        return;
    }

    const result = checkGuess(guess, secretNumber);
    resultDiv.innerText = result;

    if (guess === secretNumber || attempts >= MAX_ATTEMPTS) {
        if (guess !== secretNumber) {
            resultDiv.innerText += ` O número correto era ${secretNumber}.`;
        }
        document.getElementById('submitGuess').disabled = true;
        document.getElementById('guessInput').disabled = true;
        return;
    }

    attempts++;
}

document.getElementById('submitGuess').addEventListener('click', handleGuess);

// Iniciar o jogo 
window.onload = startGame;
