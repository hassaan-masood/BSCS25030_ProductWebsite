function sendMessage() 
{
  let input = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");


  chatbox.innerHTML += "<div class='user'><b>You:</b> " + input + "</div>";

  let reply = "";

  if (input.toLowerCase() === "hi" || input.toLowerCase() === "hello")
{
    reply = "Hello! How are you?";
}

else if (input.toLowerCase() === "i am fine")
{
    reply = "That's great to hear!";
} 

else if (input.toLowerCase() === "what is your name?")
{
    reply = "I am a dummy chatbot";
} 

else if (input.toLowerCase() === "bye")
{
    reply = "Goodbye! Have a nice day!";
}

else
{
    reply = "Sorry, I don’t understand.";
}

  chatbox.innerHTML += "<div class='bot'><b>Bot:</b> " + reply + "</div>";

  chatbox.scrollTop = chatbox.scrollHeight;
  document.getElementById("userInput").value = "";
}
