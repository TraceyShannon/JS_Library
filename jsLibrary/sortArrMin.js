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

// ==== Sort Array Low To High Function ==== //
JS.sortArrMin = arr => {
  let swap = 0;
  for (let j = 0; j < JS.length(arr); j++) {
    for (let i = 0; i < JS.length(arr); i++) {
      if (arr[i] > arr[i + 1]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
}
// ==== USE CASE ==== //

// let myArr = [2, 9, 4, 3, 5, -10, 100, 43, 45, 6, 936, 795,];
// print(JS.sortArrMin(myArr));
