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

// ==== Add Array Elements Function ==== //
JS.addArr = arr => {
  let counter = 0;
  for (let i = 0; i < JS.length(arr); i++) {
    counter += arr[i];
  }
  return counter;
}

// ==== USE CASE ==== //

// let myArr2 = [1, 2, 3, 4, 5];
// print(JS.addArr(myArr2));
