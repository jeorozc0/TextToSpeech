
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

//Reference the MDN Web Speech API examples to complete the code. 
// Initialize speech synthesis by creating an object of SpeechSynthesisisUtterance.
//Your code goes here...
const msg = new SpeechSynthesisUtterance();

// Define a function to set text message
//Your code goes here...
function setTextMessage(text) {
  msg.text = text;
}

// Define a function to speak text
//Your code goes here...
function speakText() {
  speechSynthesis.speak(msg);
}

// Define a function to setvoices
//Your code goes here...
function setVoices(){
  msg.voice =  voices.find(voice => 
    voice.name === voicesSelect.value);
}

// Create event Listeners for getting and setting changed voice
//Your code goes here...
speechSynthesis.addEventListener('voiceschanged', getVoices);



// Create an Event listener for the click event for reading the text.
//Your code goes here...
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
  setVoices();
});


getVoices();
