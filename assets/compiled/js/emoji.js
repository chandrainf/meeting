
    import { EmojiButton } from 'https://cdn.jsdelivr.net/npm/@joeattardi/emoji-button@4.6.2/dist/index.js';

    const picker = new EmojiButton();
    
    document.getElementById("sendAsSenderButton").addEventListener("click", () => sendMessage("Sender"));
    document.getElementById("sendAsReceiverButton").addEventListener("click", () => sendMessage("Receiver"));
    document.getElementById("uploadButton").addEventListener("click", () => document.getElementById("fileInput").click());
    document.getElementById("fileInput").addEventListener("change", handleFileUpload);
    document.getElementById("emoticonButton").addEventListener("click", toggleEmojiPicker);

    picker.on('emoji', emoji => insertEmoticon(emoji));

    function sendMessage(role) {
      const input = document.getElementById("messageInput");
      const message = input.value.trim();
      if (message !== "") {
        displayMessage(role, message);
        input.value = "";
      }
    }

    function displayMessage(sender, text) {
      const messagesContainer = document.getElementById("messages");
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender === "Sender" ? "right" : "left");

      const avatar = document.createElement("img");
      avatar.src = sender === "Sender" ? "sender-avatar.png" : "receiver-avatar.png"; // Replace with actual avatar images
      messageElement.appendChild(avatar);

      const messageContent = document.createElement("div");
      messageContent.classList.add("message-content");

      const senderInfo = document.createElement("span");
      senderInfo.textContent = `Dari: ${sender} kepada: ${sender === "Sender" ? "Receiver" : "Sender"} | ${new Date().toLocaleTimeString()}`;
      messageContent.appendChild(senderInfo);

      const messageText = document.createElement("span");
      messageText.textContent = text;
      messageContent.appendChild(messageText);

      messageElement.appendChild(messageContent);
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        displayMessage("Sender", `Mengirim file: ${file.name}`);
      }
    }

    function toggleEmojiPicker() {
      picker.togglePicker(document.getElementById('emoticonButton'));
    }

    function insertEmoticon(emoticon) {
      const input = document.getElementById("messageInput");
      input.value += emoticon.emoji;
    }
  