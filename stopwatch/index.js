let [hours, minutes, seconds, mseconds] = [0, 0, 0, 0];
let timer_selector = document.querySelector('.wrapper p');
let is_start = false;
let int = null;
let start = document.getElementById('startBtn');
let pause = document.getElementById('pauseBtn');
let reset = document.getElementById('resetBtn');


// start the timer
start.addEventListener('click', () => {
  if (int !== null) {
    // stops any previously running timer 
    clearInterval(int);
  }
  int = setInterval(Display, 10);
});


// pause the timer 
pause.addEventListener('click', () => {
  clearInterval(int);
});


// reset the timer 
reset.addEventListener('click', () => {
  clearInterval(int);
  [hours, minutes, seconds, mseconds] = [0, 0, 0, 0];
  updateTimerDisplay();
});


// Display time 
function Display() {
  mseconds += 10;
  if (mseconds == 1000) {
    mseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  updateTimerDisplay();
}


function updateTimerDisplay() {
  let hour = hours < 10 ? '0' + hours : hours;
  let min = minutes < 10 ? '0' + minutes : minutes;
  let sec = seconds < 10 ? '0' + seconds : seconds;
  let msec = mseconds < 10 ? '00' + mseconds : mseconds < 100 ? '0' + mseconds : mseconds;
  let time = `${hour} : ${min} : ${sec} : ${msec}`;
  timer_selector.innerHTML = time;
}
