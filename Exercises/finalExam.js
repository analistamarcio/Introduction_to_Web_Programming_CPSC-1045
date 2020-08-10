// Question 2
// for (let num = 100; num >= 0; num--) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
// }

// let elem = "";
// let num = 100;
// while (num >= 0) {
//   if (num % 2 == 0) {
//     elem += num + "<br>"
//   }
//   num--;
// }

// console.log(elem);
// document.getElementById("result2").innerHTML = elem;


// Question 3
// document.body.addEventListener("keypress", myKeyPressFunc);
// document.body.addEventListener("keydown", myKeyDownFunc);
// document.body.addEventListener("keyup", myKeyUpFunc);

// function myKeyPressFunc() {
//   document.getElementById("result3").innerHTML += "<span style='color: blue'>" + event.key + " </span>";
// }

// function myKeyDownFunc() {
//   if (document.getElementById("result3").innerHTML === "Result goes here.") {
//     document.getElementById("result3").innerHTML = "";
//   }
//   document.getElementById("result3").innerHTML += "<span style='color: red'>" + event.key + " </span>";
// }

// function myKeyUpFunc() {
//   document.getElementById("result3").innerHTML += "<span style='color: green'>" + event.key + " </span><br>";
// }

// The keydown event occurs when user push down a key (repeats while key is depressed).
// The keyup event occurs when user releases a key.
// The keypress event occurs when a character is entered (repeats while key is depressed). Modifier and non-printing keys aren't captured by this event.


// Question 4
// function taskRunner(num1, num2) {
//   let result;
//   if (num1 > 0 && num2 > 0 && !isNaN(num1) && !isNaN(num2)) {
//     result = 1;
//     for (let i = 0; i < num2; i++) {
//       result *= num1;
//     }
//   } else {
//     result = 0;
//   }
//   return result;
// }

// (Q4.a) What is the returned by taskRunner(3,2)?
// 9

// (Q4.b) Describe what this function does in 20 words or less.
// That function is a power calculation. First number power second number.

// (Q4.c) What would a better name for this function be?
// calcPower



// Question 5
// let arr = [19, 20, 21];
// let r = ["", "", ""];
// let position;
// for (let i = 0; i < arr.length; i++) {
//   while (arr[i] > 0) {
//     r[i] = r[i] + arr[i] % 10;
//     arr[i] = Math.floor(arr[i] / 10);
//   }
// }

// arr: [0, 0, 0]
// r: [91, 02, 12]



// Question 6
// function indexesOf(userStr, charSearch) {
//   let arr = [];
//   let pos = 0;
//   while (userStr.indexOf(charSearch, pos) >= 0) {
//     arr.push(userStr.indexOf(charSearch, pos));
//     pos = userStr.indexOf(charSearch, pos) + 1;
//   }
//   return arr;
// }

function buckets(input, bound) {
  let sums = [0, 0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] < bound)
      sums[0] += input[i];
    else sums[1] += input[i];
  }
  return sums;
}

function Flag(country, width, height, colors) {
  this.country = country;
  this.width = width;
  this.height = height;
  this.colors = colors.slice();
}

function extract(line, word1, word2) {
  let index = [];

  index.push(line.indexOf(word1));
  index.push(line.indexOf(word2));
  console.log(index);
  if (index[0] < index[1]) {
    return line.substring(index[0], index[1]);
  } else {
    return false
  }
}

let str = "It does not do to dwell on dreams and forget to live";


function thing(a, b) {
  if (typeof (a) != "number" && typeof (b) != "number") {
    return false;
  }

  let temp = a * b;
  let result;

  if (a > b) {
    result = temp;
  } else {
    result = temp + "";
  }
  return result;
}

function checker(str, ltr) {
  if (typeof (str) == "string" && typeof (ltr) == "string") {
    let current = 0;
    while (current < str.length) {
      if (str.charAt(current) == ltr)
        return true;
      current++;
    }
    return false;
  }
}