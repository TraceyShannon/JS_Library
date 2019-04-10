const JS = {};
JS.calculator = {};

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

// ==== Function ==== //
JS.calculator.compute = str => {
  let nums = "0123456789";
  let operands = "/*+-()";
  let numArr = JS.toArr(nums);
  let operation = "";

  for (var i = 0; i < JS.length(str); i++) {
    for (var j = 0; j < 16; j++) {
      if (str[i] == operands[j] || str[i] == numArr[j]) {
        operation += str[i];
      }
    }
  }
  return eval(operation);
}

// ==== USE CASE ==== //

// let total = JS.calculator.compute("(10 + 1) * (3^hello + 5)");
// print(total);
