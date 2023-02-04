export function playRunSound() {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "../audio/blob.ogg";
  audio.volume -= 0.7;
  audio.loop = false;
  audio.play();
}

export function playDeathSound() {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "../audio/end.wav";
  audio.loop = false;
  audio.play();
  return false;
}

export function playEatingSound() {
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = "../audio/eating.wav";
  audio.playbackRate += 0.5;
  audio.loop = false;
  audio.play();
}
