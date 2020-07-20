// Question 1
let input = document.getElementById("userInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    let num = input.value;

    if (isNaN(num) || num < 2) {
      document.getElementById("result").innerHTML = "Invalid input.";
    } else {
      let sum = parseInt(num);
      let result = "";
      for (i = 1; i < num; i++) {
        sum += i;
        result = result + i + " + ";
      }
      result = result + i + " = " + sum;
      document.getElementById("result").innerHTML = result;
    }
  }
});

// Question 2
function showVarType() {
  let userInput = prompt("Enter a number:");
  let num = parseFloat(userInput);

  if (!isNaN(num)) {
    if (num >= 0) {
      return console.log("That number is positive.");
    } else {
      return console.log("That number is not positive.");
    }
  }

  if (typeof (userInput) == "string") {
    return console.log("That string has " + userInput.length + " characters.");
  } else {
    return console.log("That was not a number or a string.");
  }
}
