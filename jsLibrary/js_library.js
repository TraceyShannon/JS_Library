const JS = {};
JS.linter = {};
JS.DOM = {};
JS.timer = {};
JS.calculator = {};
JS.DOM.TodoList = {};
let timer = document.querySelector(".timer");
let stop = document.querySelector(".stop-btn");

// ==== Print Function ==== //
const print = el => {
  console.log(el);
  return el;
}

// ==== USE CASE ==== //

// print([1, 2, 3, 4, 5]);
// print("Hello Use Print");

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

// ==== USE CASE ==== //

// let arr1 = [12, 24, 0, ""];
// console.log(JS.length(arr1));

// ==== Sort Array Low To High Function ==== //
JS.sortArrMin = arr => {
  let swap = 0;
  for (let j = 0; j < JS.length(arr); j++) {
    for (let i = 0; i < JS.length(arr); i++) {
      if (arr[i] > arr[i + 1]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
}
// ==== USE CASE ==== //

// let myArr = [2, 9, 4, 3, 5, -10, 100, 43, 45, 6, 936, 795,];
// print(JS.sortArrMin(myArr));

// ==== Sort Array High To Low Function ==== //
JS.sortArrMax = arr => {
  let swap = 0;
  for (let j = 0; j < JS.length(arr); j++) {
    for (let i = 0; i < JS.length(arr); i++) {
      if (arr[i] < arr[i + 1]) {
        swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
      }
    }
  }
  return arr;
}

// ==== USE CASE ==== //

// let myArr = [2, 9, 4, 3, 5, -10, 100, 43, 45, 6, 936, 795,];
// console.log(JS.sortArrMax(myArr));


// ==== ForEach Implementation ==== //
JS.forEvery = (arr, funct) => {
  for (let i = 0; i < JS.length(arr); i++) {
    funct(arr[i]);
  }
}

// ==== USE CASE ==== //

// let myArr1 = [32, 45, 1, 67];
// JS.forEvery(myArr1, function(el) {
//   print(el);
// });

// ==== Add Array Elements Function ==== //
JS.addArr = arr => {
  let counter = 0;
  for (let i = 0; i < JS.length(arr); i++) {
    counter += arr[i];
  }
  return counter;
}

// ==== USE CASE ==== //

// let myArr2 = [1, 2, 3, 4, 5];
// print(JS.addArr(myArr2));

// ==== Turn Elements Into An Array ==== //
JS.toArr = el => {
  let arr = [];
  for (var i = 0; i < JS.length(el); i++) {
    arr[i] = el[i];
  }
  return arr;
}

// ==== USE CASE ==== //

// let myStr = "lower my rent, please";
// print(JS.toArr(myStr));

// ==== Seconds Timer Function ==== //
JS.timer.seconds = (time, funct) => {
  let seconds = time;
  let OGTime = time;
  let interval = time * 1000;
  let currentTime = {};

  if (OGTime > 60) {
    return -1;
  }

  let timerInterval = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = OGTime;
    }
    if (seconds < 10) {
      time = "0" + seconds;
      funct(time);
    } else {
      time = seconds;
      funct(time);
    }
    currentTime.seconds = seconds;
  }, 1000);

  return {
    _id: timerInterval,
    seconds: seconds,
    interval: interval,
    currentTime: currentTime
  };
}

// ==== USE CASE ==== //

// let myTimer = JS.timer.seconds(60, function(time) {
//   timer.innerHTML = "0:" + time;
// });
// stop.addEventListener("click", function(e) {
//   JS.timer.stopTimer(myTimer._id);
//   print(myTimer.currentTime.seconds);
// });


// ==== Minutes Timer Function ==== //
JS.timer.minutes = (time, funct) => {
  let seconds = 60;
  let OGTime = time;
  let minutes = time - 1;
  let interval = seconds * time * 1000;
  let currentTime = {};

  if (time > 60 || time < 1) {
    return -1;
  }

  let timerInterval = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = 60 - 1;
      minutes--;
    }
    if (minutes < 0) {
      minutes = OGTime - 1;
    }

    if (seconds < 10) {
      funct(minutes + ":0" + seconds);
    } else {
      funct(minutes + ":" + seconds)
    }
    currentTime.minutes = minutes;
    currentTime.seconds = seconds;
  }, 1000);

  return {
    _id: timerInterval,
    seconds: seconds,
    minutes: minutes,
    interval: interval,
    currentTime: currentTime
  };
}

// ==== USE CASE ==== //

// JS.timer.minutes(5, function(time) {
//   print(time);
// });

// let myTimer = JS.timer.minutes(2, function(time) {
//   timer.innerHTML = time;
// });
// stop.addEventListener("click", function(e) {
//   JS.timer.stopTimer(myTimer._id);
//   print(myTimer.currentTime);
// });

// ==== Hour Timer Function ==== //
JS.timer.hours = (time, funct) => {
  let seconds = 60;
  let minutes = 60 - 1;
  let OGTime = time;
  let hours = time - 1;
  let interval = seconds * minutes * time * 1000;

  let timerInterval = setInterval(function() {
    seconds--;
    if (seconds < 0) {
      seconds = 60 - 1;
      minutes--;
    }

    if (minutes < 0) {
      minutes = 60 - 1;
      hours--;
    }

    if (hours < 0) {
      hours = OGTime - 1;
    }

    if (seconds < 10 && minutes < 10) {
      funct(hours + ":0" + minutes + ":0" + seconds);
    } else if (minutes < 10) {
      funct(hours + ":0" + minutes + ":" + seconds);
    } else if (seconds < 10) {
      funct(hours + ":" + minutes + ":0" + seconds);
    } else {
      funct(hours + ":" + minutes + ":" + seconds);
    }
    currentTime.minutes = minutes;
    currentTime.seconds = seconds;
    currentTime.hours = hours;
  }, 1000);
  return {
    _id: timerInterval,
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    interval: interval,
    currentTime: currentTime
  };
}

// ==== USE CASE ==== //

// JS.timer.hours(2, function(time) {
//   print(time);
// });

// ==== Stop Timer Function ==== //
JS.timer.stopTimer = timer => {
  clearInterval(timer);
}

// ==== USE CASE ==== //

// let myTimer = JS.timer.minutes(2, function(time) {
//   timer.innerHTML = time;
// });
// stop.addEventListener("click", function(e) {
//   JS.timer.stopTimer(myTimer._id);
//   print(myTimer);
// });

// ==== Function ==== //
JS.joinStr = (arr, el) => {
  let str = "";
  for (let i = 0; i < JS.length(arr); i++) {
    str += arr[i] + el;
  }
  return str;
}

// ==== USE CASE ==== //

// let arrStr = ["H", "e", "l", "l", "o"];
// print(JS.joinStr(arrStr));

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

// ==== Function ==== //
JS.reverseArr = arr => {
  let newArr = [];
  let counter = 0;
  for (let i = JS.length(arr) - 1; i >= 0; i--) {
    newArr[counter] = arr[i];
    counter++;
  }
  return newArr;
}

// ==== USE CASE ==== //

// let myArr3 = ["H", "e", "l", "l", "o"];
// print(JS.reverseArr(myArr3));

// ==== Function ==== //
JS.DOM.select = elStr => {
  let element = document.querySelector("." + elStr);
  return element;
}

// ==== USE CASE ==== //

// let slider = JS.DOM.select("slider");
// print(slider);

// ==== Function ==== //
JS.DOM.selectAll = elStr => {
  let element = document.querySelectorAll("." + elStr);
  return element;
}

// ==== USE CASE ==== //

// print(JS.DOM.selectAll("block"));
// let blocks = JS.DOM.selectAll("block");

// ==== Function ==== //
JS.DOM.selectID = elStr => {
  let element = document.querySelector("#" + elStr);
  return element;
}

// ==== USE CASE ==== //

// let myDiv = JS.DOM.selectID("myDiv");
// print(myDiv);

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
  arr[0] = "hidden item, you can ignore this but dont delete it";
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
let myList = []; // this needs to be empty
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


JS.linter.replace = (str, OGWord, newWord) => {
  for (var i = 0; i < str.length; i++) {
    if (str[str.length - 1] != " ") {
      str += " ";
    }
  }
  let newStr = "";
  let newStr2 = [];
  let x = 0;
  let j = 0;
  let a = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      j++;
    }
  }

  while (a < j + 1) {
    while (str[x] != " ") {
      if (a == j) {
        newStr2 = JS.joinStr(newStr2, " ");
        return {
          _str: newStr2,
          words: j,
          _replaced: OGWord
        };
      }
      newStr += str[x];
      x++;
    }
    if (newStr == OGWord) {
      newStr = newWord;
    }
    newStr2[a] = newStr;
    a++;
    x++;
    newStr = "";
  }
}

// ==== USE CASE ==== //
let myStr2 = "Hello Everyone, this is my attempt at a small JavaScript Library that will hopefully help people come up with Alternative solutions to there problems, Good Luck!";
let myFixedStr = JS.linter.replace(myStr2, "Hello", "Hi");
myFixedStr = JS.linter.replace(myStr2, "Everyone,", "All,");
print(myFixedStr._str);
// print(myFixedStr.words);
// print(myFixedStr._replaced);

// ==== Lodash Chunk Function ==== //
JS.break = (arr, num) => {
  let newArr = [];
  let arr2 = [];
  let j = 0;
  let x = 0;
  for (var i = 0; i < arr.length; i++) {
    arr2[x] = arr[i];
    x++;
    if (arr2.length === num) {
      newArr[j] = arr2;
      arr2 = [];
      x = 0;
      j++;
    } else if (arr2.length != num) {
      newArr[j] = arr2;
    }
  }
  return newArr;
}

// ==== USE CASE ==== //
// let myArr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// print(JS.break(myArr4, 3));

// ==== Lodash Compact Function ==== //
JS.squash = arr => {
  let newArr = [];
  let x = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr[x] = arr[i];
      x++;
    }
  }
  return newArr;
}

// ==== USE CASE ==== //
// let myArr5 = [0, 1, 2, false, "", "cake", "123", true];
// print(JS.squash(myArr5));

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
let btns = JS.DOM.selectAll("btn");
let field = JS.DOM.select("field-output");
let field2 = JS.DOM.select("field-output2");
let solve = JS.DOM.select("equal");
let clear = JS.DOM.select("clear");
let back = JS.DOM.select("back");
let operation = "";
let calcCounter = 0;
JS.DOM.clickAll(btns, function(btn) {
  if (calcCounter >= 8) {
    return -1;
  }
  operation += btn.target.innerHTML;
  field.value += btn.target.innerHTML;
  calcCounter++;
});
solve.addEventListener("click", function(e) {
  field2.value = JS.calculator.compute(operation);
  field.value = "";
  operation = "";
  calcCounter = 0;
});
clear.addEventListener("click", function(e) {
  field2.value = "";
  field.value = "";
  operation = "";
  calcCounter = 0;
});
back.addEventListener("click", function(e) {
  if (calcCounter >= 1) {
    field.value = field.value.substring(0, field.value.length - 1);
    operation = operation.substring(0, operation.length - 1);
    calcCounter--;
  } else {
    return -1;
  }
});
