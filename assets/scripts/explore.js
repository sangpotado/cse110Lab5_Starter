// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
var voices = [];
function init() {
  const voiceSelect = document.querySelector("select");
  const inputForm = document.querySelector("textarea");
  const btn = document.querySelector('button');

  // Listen for the 'voiceschanged' event on synth
  synth.addEventListener('voiceschanged', () => {
    populateVoiceList(voiceSelect);
  });
  // Call populateVoiceList() immediately
  populateVoiceList(voiceSelect);

  btn.addEventListener('click', () => {
    utter(inputForm, voiceSelect);
  });

}

function populateVoiceList(voiceSelect) {
  // Clear the current options
  voiceSelect.innerHTML = '';

  // Retrieve the list of voices
  voices = synth.getVoices();

  // Populate the voice select dropdown
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function updateFaceImage() {
  const face = document.querySelector('img');

  // Define a function to check synth.speaking and update the face image
  function checkSpeaking() {
    if (synth.speaking) {
      face.src = "assets/images/smiling-open.png";
    } else {
      face.src = "assets/images/smiling.png";
      clearInterval(intervalID); // Stop checking when synth.speaking is false
    }
  }

  // Call the checkSpeaking function immediately and repeat every 0.5 seconds
  const intervalID = setInterval(checkSpeaking, 500);
}

function utter(inputForm, voiceSelect) {
  const utterance = new SpeechSynthesisUtterance(inputForm.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  synth.speak(utterance);
  updateFaceImage();
}