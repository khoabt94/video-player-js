///////////////////////////////////////////////////////////
// SELECTORS
const video = document.getElementById("video");
const play = document.getElementById("play");
const stopv = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
const pauseHTML = '<i class="fa fa-pause fa-2x"></i>';
const playHTML = '<i class="fa fa-play fa-2x"></i>';

///////////////////////////////////////////////////////////
// HELPER FUNCTION
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updatePlayIcon = () => {
  if (video.paused) {
    play.textContent = "";
    play.insertAdjacentHTML("afterbegin", playHTML);
  } else {
    play.textContent = "";
    play.insertAdjacentHTML("afterbegin", pauseHTML);
  }
};

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  const mins = Math.floor(video.currentTime / 60)
    .toString()
    .padStart(2, 0);
  const secs = Math.floor(video.currentTime % 60)
    .toString()
    .padStart(2, 0);

  timestamp.textContent = `${mins}:${secs}`;
};

const setVideoProgress = (e) => {
  video.currentTime = (+e.target.value * video.duration) / 100;
};

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

///////////////////////////////////////////////////////////
// EVENT LISTENERS
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stopv.addEventListener("click", stopVideo);
progress.addEventListener("change", (e) => setVideoProgress(e));
