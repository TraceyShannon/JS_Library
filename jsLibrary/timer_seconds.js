const JS = {};
JS.timer = {};

// ==== Print Function ==== //
const print = el => {
  console.log(el);
  return el;
}

// ==== Length Function ==== //
JS.length = el => {
  let counter = 0;
  for (let i = 0; i < 10000; i++) {
    if (el[i] || el[i] == 0 || el[i] == "") {
      counter++;
    }
  }
  return counter;
}

// ==== Seconds Timer Function ==== //
JS.timer.seconds = (time, funct) => {
  let seconds = time;
  let OGTime = time;
  let interval = time * 1000;
  let currentTime = {};

  if (OGTime > 60) {
    return -1;
  }

  let timerInterval = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = OGTime;
    }
    if (seconds < 10) {
      time = "0" + seconds;
      funct(time);
    } else {
      time = seconds;
      funct(time);
    }
    currentTime.seconds = seconds;
  }, 1000);

  return {
    _id: timerInterval,
    seconds: seconds,
    interval: interval,
    currentTime: currentTime
  };
}

// ==== USE CASE ==== //

// let timer = document.querySelector(".timer");
// let stop = document.querySelector(".stop-btn");
// let myTimer = JS.timer.seconds(60, function(time) {
//   timer.innerHTML = "0:" + time;
// });
// stop.addEventListener("click", function(e) {
//   JS.timer.stopTimer(myTimer._id);
//   print(myTimer.currentTime.seconds);
// });
