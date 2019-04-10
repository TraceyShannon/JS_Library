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
JS.DOM.clickAll = (el, funct) => {
  for (var i = 0; i < JS.length(el); i++) {
    el[i].addEventListener("click", funct);
  }
}

// ==== USE CASE ==== //

// let blocks = JS.DOM.selectAll("block");
// JS.DOM.clickAll(blocks, function(block) {
//   print(block.target.innerHTML);
// });

// ==== Compare ==== //

// let newBlocks = document.querySelectorAll(".block");
// for (let i = 0; i < newBlocks.length; i++) {
//   newBlocks[i].addEventListener("click", function(e) {
//     console.log(e.target.innerHTML);
//   });
// }
