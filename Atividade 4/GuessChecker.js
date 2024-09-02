// guessChecker.js
export function checkGuess(guess, secretNumber) {
    if (guess < secretNumber) {
        return "O número é maior.";
    } else if (guess > secretNumber) {
        return "O número é menor.";
    } else {
        return "Parabéns! Você adivinhou o número!";
    }
}
