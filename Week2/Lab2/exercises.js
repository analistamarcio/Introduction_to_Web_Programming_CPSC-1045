// function sumOfCubes() {
//   let num1 = +prompt("Enter the first number");
//   let num2 = +prompt("Enter the second number");
//   document.getElementById("result").innerHTML = Math.pow(num1, 3) + Math.pow(num2, 3);
// }
// function capStr() {
//   let userStr = prompt("Enter a text");
//   showResult(userStr);
// }

// function showResult(str) {
//   document.getElementById("result").innerHTML = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
// }

function myFunc() {
  let result = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "<br>"
  }
  document.getElementById("myDiv").innerHTML = result;
}
