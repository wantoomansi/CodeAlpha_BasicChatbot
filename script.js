function sendMessage() {

    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

    let reply = getBotResponse(message);

    chatBox.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {

    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hi! How can I help you?";
    }

    if (message.includes("how are you")) {
        return "I am fine. Thank you!";
    }

    if (message.includes("your name")) {
        return "I am an AI Chatbot.";
    }

    if (message.includes("bye")) {
        return "Goodbye! Have a nice day.";
    }

    return "Sorry, I don't understand that.";
}

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.textContent = "☀️ Light Mode";
    } else {
        darkModeBtn.textContent = "🌙 Dark Mode";
    }
});