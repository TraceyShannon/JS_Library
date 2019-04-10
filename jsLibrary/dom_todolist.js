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

// ==== ForEach Implementation ==== //
JS.forEvery = (arr, funct) => {
  for (let i = 0; i < JS.length(arr); i++) {
    funct(arr[i]);
  }
}

// ==== Function ==== //
JS.DOM.select = elStr => {
  let element = document.querySelector("." + elStr);
  return element;
}

// ==== Function ==== //
JS.DOM.selectAll = elStr => {
  let element = document.querySelectorAll("." + elStr);
  return element;
}

// ==== Function ==== //
let id = 0;
let delBtns = JS.DOM.selectAll("item .del");
JS.DOM.TodoList.list = (el, arr, className = "item", className2) => {
  el = document.querySelector("." + el);
  delBtns = JS.DOM.selectAll("item .del");
  id = -1;
  let counter = 0;
  let list = [];
  className2 = "del";
  JS.forEvery(arr, function(item) {
    el.insertAdjacentHTML("beforeend", "<div id=" + id + " class='" + id + " " + className + "'><p>" + item + "</p><span class='action'><button id=" + id + " class=" + className2 + ">delete</button></span></div>");
    list[counter] = {item: item, id: id};
    id++;
    counter++;
  });
  let item;
  if (list[0].id == -1) {
    item = JS.DOM.selectAll("item");
    for (var i = 0; i < item.length; i++) {
      item[i].style.display = "none";
    }
  }
  return {
    el: el,
    _id: className,
    list: list
  };
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

// ==== Function ==== //
JS.DOM.TodoList.delEl = (el, arr, arr2) => {
  el = JS.DOM.selectAll("del");
  JS.forEvery(el, function(element) {
    element.addEventListener("click", function(e) {
      for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
          if (e.target.parentNode.parentNode.classList[j] == arr[i].id) {
            let parent = document.getElementById('' + arr[i].id + '');
            let index = arr.indexOf(arr[i]);
            arr.splice(i, 1);
            arr2.splice(i, 1);
            return parent.remove();
          }
        }
      }
    });
  });
}

// ==== USE CASE ==== //
let button = document.querySelector("button");
let input = document.querySelector("input");
let myList = ["hidden item, you can ignore this but dont delete it"]; // I needed this to be empty but this works for now
let myTodoList;

myTodoList = JS.DOM.TodoList.list("todo_list", myList, "item");
// JS.DOM.TodoList.delEl("del", myTodoList.list);

// JS.DOM.TodoList.addEl("todo_list", myList, "an item", "item_2", myTodoList.list);

// ==== This lets you add an item with enter ==== //
input.addEventListener("keypress", function(e) {
  if (e.keyCode == 13) {
    let inputValue = input.value;
    JS.DOM.TodoList.addEl("todo_list", myList, inputValue, "item", "del", myTodoList.list);
    inputValue = "";
    input.value = "";
    return JS.DOM.TodoList.delEl("del", myTodoList.list, myList);
  }
});

// ==== This lets you add an item with a button ==== //
button.addEventListener("click", function() {
  let inputValue = input.value;
  JS.DOM.TodoList.addEl("todo_list", myList, inputValue, "item", "del", myTodoList.list);
  inputValue = "";
  input.value = "";
  return JS.DOM.TodoList.delEl("del", myTodoList.list, myList);
});
