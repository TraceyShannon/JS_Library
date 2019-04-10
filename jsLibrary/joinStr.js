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

// ==== Function ==== //
JS.joinStr = (arr, el) => {
  let str = "";
  for (let i = 0; i < JS.length(arr); i++) {
    str += arr[i] + el;
  }
  return str;
}

// ==== USE CASE ==== //

// let arrStr = ["H", "e", "l", "l", "o"];
// print(JS.joinStr(arrStr));
