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

// ==== Minutes Timer Function ==== //
JS.timer.minutes = (time, funct) => {
  let seconds = 60;
  let OGTime = time;
  let minutes = time - 1;
  let interval = seconds * time * 1000;
  let currentTime = {};

  if (time > 60 || time < 1) {
    return -1;
  }

  let timerInterval = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = 60 - 1;
      minutes--;
    }
    if (minutes < 0) {
      minutes = OGTime - 1;
    }

    if (seconds < 10) {
      funct(minutes + ":0" + seconds);
    } else {
      funct(minutes + ":" + seconds)
    }
    currentTime.minutes = minutes;
    currentTime.seconds = seconds;
  }, 1000);

  return {
    _id: timerInterval,
    seconds: seconds,
    minutes: minutes,
    interval: interval,
    currentTime: currentTime
  };
}

// ==== USE CASE ==== //

// let timer = document.querySelector(".timer");
// let stop = document.querySelector(".stop-btn");
// JS.timer.minutes(5, function(time) {
//   print(time);
// });

// let myTimer = JS.timer.minutes(2, function(time) {
//   timer.innerHTML = time;
// });
// stop.addEventListener("click", function(e) {
//   JS.timer.stopTimer(myTimer._id);
//   print(myTimer.currentTime);
// });
