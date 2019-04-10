// ==== PROJECTS ==== //

// ==== Slider ==== //
// let slider = JS.DOM.select("slider");
// let counter = 0;
// let myTimer = JS.timer.seconds(2, function(time) {
// });
// setInterval(function() {
//   slider.style.left = counter + "px";
//   counter += 5;
// }, myTimer.interval);

// ==== Calculator ==== //
// let btns = JS.DOM.selectAll("btn");
// let field = JS.DOM.select("field-output");
// let field2 = JS.DOM.select("field-output2");
// let solve = JS.DOM.select("equal");
// let clear = JS.DOM.select("clear");
// let back = JS.DOM.select("back");
// let operation = "";
// let calcCounter = 0;
// JS.DOM.clickAll(btns, function(btn) {
//   if (calcCounter >= 8) {
//     return -1;
//   }
//   operation += btn.target.innerHTML;
//   field.value += btn.target.innerHTML;
//   calcCounter++;
// });
// solve.addEventListener("click", function(e) {
//   field2.value = JS.calculator.compute(operation);
//   field.value = "";
//   operation = "";
//   calcCounter = 0;
// });
// clear.addEventListener("click", function(e) {
//   field2.value = "";
//   field.value = "";
//   operation = "";
//   calcCounter = 0;
// });
// back.addEventListener("click", function(e) {
//   if (calcCounter >= 1) {
//     field.value = field.value.substring(0, field.value.length - 1);
//     operation = operation.substring(0, operation.length - 1);
//     calcCounter--;
//   } else {
//     return -1;
//   }
// });
