// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var horn_name = document.querySelector("#horn-select");
  horn_name.addEventListener('change', update_horn);

  var sound_btn = document.querySelector('button');
  sound_btn.addEventListener('click', playsound);

  var volume_control = document.querySelector('#volume-controls');
  volume_control.addEventListener('change', update_volume_control);
}

function update_horn() {
  //The correct image should display
// The correct audio sound file should be set
  let horn_name = document.querySelector("#horn-select");
  let horn_img = document.getElementsByTagName('img')[0];     //querySelector('img')
  var horn_audio = document.getElementsByTagName('audio')[0];
  if (horn_name.value == 'air-horn') {
    horn_img.src = "assets/images/air-horn.svg";
    horn_audio.src = "assets/audio/air-horn.mp3";
  }
  else if (horn_name.value == 'car-horn') {
    horn_img.src = "assets/images/car-horn.svg";
    horn_audio.src = "assets/audio/car-horn.mp3";
  }
  else if (horn_name.value == 'party-horn') {
    horn_img.src = "assets/images/party-horn.svg";
    horn_audio.src = "assets/audio/party-horn.mp3";
  }
}

function update_volume_control() {
  let v = document.querySelector('#volume-controls input');
  let v_img = document.querySelector("#volume-controls img");

  if (v.value == 0) {
    v_img.src = "assets/icons/volume-level-0.svg";
    audio.volume = 0;
  }
  else if (1<= v.value && v.value <= 33) {
    v_img.src = "assets/icons/volume-level-1.svg";
  }
  else if (33< v.value && v.value <= 66) {
    v_img.src = "assets/icons/volume-level-2.svg";
  }
  else if (66< v.value) {
    v_img.src = "assets/icons/volume-level-3.svg";
  }

  let audio = document.querySelector('audio');
  audio.volume = v.value / 100;

}
function playsound() {
  let audio = document.querySelector('audio');
  let horn_name = document.querySelector("#horn-select");

  if (horn_name.value == 'party-horn') {
    const jsConfetti = new JSConfetti();
    // let confetti_e = document.querySelector('canvas');
    // confetti_e.style.
    jsConfetti.addConfetti({
      confettiRadius: 10,
      initialPosition: 400
      // confettiNumber: 30,
    });
  }

  audio.play();
}