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
