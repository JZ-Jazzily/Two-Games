let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 1;

const form = document.querySelector("form");
const guessField = document.getElementById("numberGuess");
const prevGuesses = document.getElementById("prevGuesses");
const message = document.querySelector("span p");
const guessingGame = document.getElementById("guessingGame")

let resetButton;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    checkGuess();
});

function checkGuess() {

    message.classList.remove("tooBig");
    message.classList.remove("tooSmall");
    message.classList.remove("tooMany");
    message.classList.remove("justRight");

    let userGuess = Number(guessField.value);

    if (guesses === 1) {
        prevGuesses.textContent = "Previous guesses: ";
    }

    prevGuesses.textContent += userGuess + "  ";

    if (userGuess === randomNumber) {
        message.textContent = "Congratulations! You got it right!";
        message.classList.add("justRight");
        gameOver();
    }
    else if (guesses === 10) {
        message.textContent = "!!! Too many attempts, GAMEOVER !!!";
        message.classList.add("tooMany");
        gameOver();
    }
    else {
        if (userGuess < randomNumber) {
            message.textContent = "WRONG, that guess was too small";
            message.classList.add("tooSmall");
        }
        else {
            message.textContent = "WRONG, that guess was too BIG";
            message.classList.add("tooBig");
        }
    }

    guesses++;
    guessField.value = "";
}

function gameOver() {
    guessField.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.style.fontSize = "x-large";
    guessingGame.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
    resetButton.focus();
}

function resetGame() {
    resetButton.parentNode.removeChild(resetButton);
    guesses = 1;
    prevGuesses.textContent = "";
    message.textContent = "";
    guessField.disabled = false;
    guessField.value = "";
    message.classList.remove("justRight");
    message.classList.remove("tooMany");
    guessField.focus();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}