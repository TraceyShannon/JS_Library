const JS = {};

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
