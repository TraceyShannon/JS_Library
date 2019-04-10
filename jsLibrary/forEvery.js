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

// ==== ForEach Implementation ==== //
JS.forEvery = (arr, funct) => {
  for (let i = 0; i < JS.length(arr); i++) {
    funct(arr[i]);
  }
}

// ==== USE CASE ==== //

// let myArr1 = [32, 45, 1, 67];
// JS.forEvery(myArr1, function(el) {
//   print(el);
// });
