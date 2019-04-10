const JS = {};
JS.DOM = {};
JS.DOM.TodoList = {};

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
JS.DOM.TodoList.delEl = (el, arr, arr2) => {
  el = JS.DOM.selectAll("del");
  JS.forEvery(el, function(element) {
    element.addEventListener("click", function(e) {
      for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
          if (e.target.parentNode.parentNode.classList[j] == arr[i].id) {
            let parent = document.getElementById('' + arr[i].id + '');
            arr.splice(i, 1);
            arr2.splice(i, 1);
            return parent.remove();
          }
        }
      }
    });
  });
}
