const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const message = document.getElementById("message");

let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let attempts = 0; // Track number of guesses

guessButton.addEventListener("click", function() {
  const guess = parseInt(guessInput.value);

  if (guess) {
    attempts++;

    if (guess === randomNumber) {
      message.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
      guessInput.disabled = true; // Disable input after correct guess
      guessButton.disabled = true; // Disable button after correct guess
    } else if (guess > randomNumber) {
      message.textContent = "Too high! Guess lower.";
    } else {
      message.textContent = "Too low! Guess higher.";
    }

    guessInput.value = ""; // Clear input field after each guess
  } else {
    message.textContent = "Please enter a valid number.";
  }
});
