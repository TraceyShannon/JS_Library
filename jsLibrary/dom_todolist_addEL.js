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
JS.DOM.TodoList.addEl = (el, arr, item, className = "item", class2, arr2) => {
  if (!(item)) {
    return -1;
  }
  el = document.querySelector("." + el);
  delBtns = JS.DOM.selectAll("item .del");
  arr[JS.length(arr)] = item;
  arr2[JS.length(arr2)] = {item: item, id: arr2[JS.length(arr2) - 1].id + 1};
  class2 = "del";
  el.insertAdjacentHTML("beforeend", "<div id=" + id + " class='" + id + " " + className + "'><p>" + item + "</p><span class='action'><button id=" + id + " class=" + class2 + ">delete</button></span></div>");
  id++;
}
