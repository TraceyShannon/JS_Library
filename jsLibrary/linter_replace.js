const JS = {};
JS.linter = {};

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
JS.joinStr = (arr, el) => {
  let str = "";
  for (let i = 0; i < JS.length(arr); i++) {
    str += arr[i] + el;
  }
  return str;
}

// ==== Replace Word In Text Function ==== //
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
// let myStr2 = "Hello Everyone, this is my attempt at a small JavaScript Library that will hopefully help people come up with Alternative solutions to there problems, Good Luck!";
// let myFixedStr = JS.linter.replace(myStr2, "Hello", "Hi");
// myFixedStr = JS.linter.replace(myStr2, "Everyone,", "All,");
// print(myFixedStr._str);
// print(myFixedStr.words);
// print(myFixedStr._replaced);
