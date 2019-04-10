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

// ==== Hour Timer Function ==== //
JS.timer.hours = (time, funct) => {
  let seconds = 60;
  let minutes = 60 - 1;
  let OGTime = time;
  let hours = time - 1;
  let interval = seconds * minutes * time * 1000;

  let timerInterval = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = 60 - 1;
      minutes--;
    }

    if (minutes < 0) {
      minutes = 60 - 1;
      hours--;
    }

    if (hours < 0) {
      hours = OGTime - 1;
    }

    if (seconds < 10 && minutes < 10) {
      funct(hours + ":0" + minutes + ":0" + seconds);
    } else if (minutes < 10) {
      funct(hours + ":0" + minutes + ":" + seconds);
    } else if (seconds < 10) {
      funct(hours + ":" + minutes + ":0" + seconds);
    } else {
      funct(hours + ":" + minutes + ":" + seconds);
    }
    currentTime.minutes = minutes;
    currentTime.seconds = seconds;
    currentTime.hours = hours;
  }, 1000);
  return {
    _id: timerInterval,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    interval: interval,
    currentTime: currentTime
  };
}

// ==== USE CASE ==== //

// let timer = document.querySelector(".timer");
// let stop = document.querySelector(".stop-btn");
// JS.timer.hours(2, function(time) {
//   print(time);
// });
