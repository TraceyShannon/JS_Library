const JS = {};
JS.DOM = {};

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
JS.DOM.selectAll = elStr => {
  let element = document.querySelectorAll("." + elStr);
  return element;
}

// ==== USE CASE ==== //

// print(JS.DOM.selectAll("block"));
// let blocks = JS.DOM.selectAll("block");
