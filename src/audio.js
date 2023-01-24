export function playRunSound() {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "../audio/blob.ogg";
  audio.volume -= 0.7;
  audio.play();
}

export function playDeathSound() {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "../audio/end.wav";
  audio.play();
}

export function playEatingSound() {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "../audio/eating.wav";
  audio.playbackRate += 0.5;
  audio.play();
}
