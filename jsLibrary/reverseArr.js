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
JS.reverseStr = str => {
  let newStr = "";
  for (let i = JS.length(str) - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr;
}

// ==== USE CASE ==== //

// let myStr = "well hello there.";
// print(JS.reverseStr(myStr));
