const JS = {};

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

// ==== Turn Elements Into An Array ==== //
JS.toArr = el => {
  let arr = [];
  for (var i = 0; i < JS.length(el); i++) {
    arr[i] = el[i];
  }
  return arr;
}

// ==== USE CASE ==== //

// let myStr = "lower my rent, please";
// print(JS.toArr(myStr));
