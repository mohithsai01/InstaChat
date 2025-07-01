const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("messageInput");

function sendMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return;

  addMessage("user-msg", msg);
  messageInput.value = "";

  setTimeout(() => {
    const replies = ["Interesting!", "Wow!", "Tell me more.", "That's awesome!", "🤖 I'm just a bot!"];
    const botReply = replies[Math.floor(Math.random() * replies.length)];
    addMessage("bot-msg", botReply);
  }, 1000);
}

function addMessage(className, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", className);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

messageInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});
