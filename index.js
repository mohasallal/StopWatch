const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let isRunning = false;
let elapsedTime = 0;

start.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
});

stop.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
});

reset.addEventListener("click", () => {
  clearInterval(timer);
  elapsedTime = 0;
  startTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
});

function update() {
  const CurrentTime = Date.now();
  elapsedTime = CurrentTime - startTime;

  let Hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let sec = Math.floor((elapsedTime / 1000) % 60);
  let milsec = Math.floor((elapsedTime % 1000) / 10);

  display.textContent = `${Hours.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}:${milsec
    .toString()
    .padStart(2, "0")}`;
}
