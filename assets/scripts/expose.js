// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();

  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeInput = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audio = document.querySelector('#expose audio');

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeInput.addEventListener('input', () => {
    const value = Number(volumeInput.value);
    audio.volume = value / 100;

    let level;
    if (value === 0) level = 0;
    else if (value < 33) level = 1;
    else if (value < 67) level = 2;
    else level = 3;
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
