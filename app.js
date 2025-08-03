// Load festival data (as before)
let festivalData = {};
fetch('indian_festivals_data.json').then(/* ... */);

// DOM references (expanded with new controls)
const audioLanguageSelect = document.getElementById('audioLanguage');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');
const volumeSlider = document.getElementById('volume');
const rateSlider = document.getElementById('rate');
const audioStatus = document.getElementById('audioStatus');
let currentUtterance = null;

// Speak function with controls
function speak(text) {
  if (currentUtterance) speechSynthesis.cancel();
  currentUtterance = new SpeechSynthesisUtterance(text);
  currentUtterance.lang = audioLanguageSelect.value;
  currentUtterance.volume = volumeSlider.value;
  currentUtterance.rate = rateSlider.value;
  currentUtterance.onstart = () => audioStatus.textContent = 'Audio: Playing';
  currentUtterance.onend = () => audioStatus.textContent = 'Audio: Ready';
  speechSynthesis.speak(currentUtterance);
}

// Audio control handlers
playButton.onclick = () => { if (currentUtterance) speechSynthesis.resume(); };
pauseButton.onclick = () => speechSynthesis.pause();
stopButton.onclick = () => { speechSynthesis.cancel(); audioStatus.textContent = 'Audio: Stopped'; };

// Other functions (addMessage, processUserInput, etc.) as in previous versions, with updates for new festivals
