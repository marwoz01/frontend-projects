let pointsHome = document.getElementById("score-display-home");
let pointsGuest = document.getElementById("score-display-guest");
let timerDisplay = document.getElementById("timer-display");

let scores = {
  home: 0,
  guest: 0,
};
let timeElapsed = 0;
let timerRunning = false;
let timerInterval;

function addPoints(team, points) {
  scores[team] += points;

  if (team === "home") {
    pointsHome.textContent = scores.home;
  } else if (team === "guest") {
    pointsGuest.textContent = scores.guest;
  }
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeElapsed / 60);
  let seconds = timeElapsed % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
  if (timerRunning) return;
  timerRunning = true;

  timerInterval = setInterval(() => {
    timeElapsed++;
    updateTimerDisplay();
  }, 1000);
}

document.getElementById("start-btn").addEventListener("click", startTimer);
