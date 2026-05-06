// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textarea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.querySelectorAll('option:not([value="select"])').forEach((o) => o.remove());
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.dataset.name = voice.name;
      voiceSelect.appendChild(option);
    }
  }

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textarea.value);
    const selected = voiceSelect.selectedOptions[0];
    const chosenName = selected && selected.dataset.name;
    const match = speechSynthesis.getVoices().find((v) => v.name === chosenName);
    if (match) utterance.voice = match;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });
}
