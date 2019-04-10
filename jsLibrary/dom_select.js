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
JS.DOM.select = elStr => {
  let element = document.querySelector("." + elStr);
  return element;
}

// ==== USE CASE ==== //

// let slider = JS.DOM.select("slider");
// print(slider);
