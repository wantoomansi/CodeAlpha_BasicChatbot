const word = "APPLE";
let guessedLetters = [];
let wrongLetters = [];
let attempts = 6;

function updateWordDisplay() {
    let display = "";

    for (let letter of word) {
        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
        }
    }

    document.getElementById("word-display").textContent = display;

    if (!display.includes("_")) {
        document.getElementById("message").textContent =
            "🎉 Congratulations! You Won!";
    }
}

function guessLetter() {

    const input = document.getElementById("letter-input");
    const letter = input.value.toUpperCase();

    if (letter === "") return;

    if (word.includes(letter)) {

        if (!guessedLetters.includes(letter)) {
            guessedLetters.push(letter);
        }

    } else {

        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            attempts--;
        }
    }

    document.getElementById("wrong-letters").textContent =
        wrongLetters.join(", ");

    document.getElementById("attempts").textContent = attempts;

    if (attempts <= 0) {
        document.getElementById("message").textContent =
            "💀 Game Over! Word was " + word;
    }

    updateWordDisplay();

    input.value = "";
}

updateWordDisplay();

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});