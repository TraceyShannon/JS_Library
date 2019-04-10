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

// ==== Stop Timer Function ==== //
JS.timer.stopTimer = timer => {
  clearInterval(timer);
}

// ==== USE CASE ==== //

// let timer = document.querySelector(".timer");
// let stop = document.querySelector(".stop-btn");
// let myTimer = JS.timer.minutes(2, function(time) {
//   timer.innerHTML = time;
// });
// stop.addEventListener("click", function(e) {
//   JS.timer.stopTimer(myTimer._id);
//   print(myTimer);
// });
