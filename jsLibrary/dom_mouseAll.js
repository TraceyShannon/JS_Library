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
JS.DOM.mouseAll = (el, funct) => {
  for (let i = 0; i < JS.length(el); i++) {
    el[i].addEventListener("mouseover", funct);
  }
}

// ==== USE CASE ==== //

// let blocks = JS.DOM.selectAll("block");
// JS.DOM.mouseAll(blocks, function(block) {
//   print(block.target);
// });
