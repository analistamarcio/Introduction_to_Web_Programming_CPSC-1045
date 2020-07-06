// Question 1 function
function checkLeapYear() {
  let leapYear = document.getElementById("leapYear").value;

  if (isNaN(leapYear) || leapYear < 1582) {
    return document.getElementById("div1").innerHTML = "Invalid year.";
  }

  if (((leapYear % 4 === 0) && (leapYear % 100 !== 0)) || (leapYear % 400 === 0)) {
    return document.getElementById("div1").innerHTML = leapYear + " is a leap year."
  }

  return document.getElementById("div1").innerHTML = leapYear + " is NOT a leap year."
}

// Question 2 function
function countLetter() {
  let sentence = document.getElementById("sentence").value;
  if (sentence === undefined || sentence === "") {
    return document.getElementById("div2").innerHTML = "Invalid sentence.";
  }

  let letter = document.getElementById("letter").value.charAt(0);
  if (letter === undefined || letter === "") {
    return document.getElementById("div2").innerHTML = "Invalid letter.";
  }

  let count = 0;
  for (i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }

  return document.getElementById("div2").innerHTML = "The letter " + letter + " appears " + count + " times in the string " + sentence.toLowerCase();
}

// Question 3 function
function average() {
  let userInput = 0, sum = 0, count = 0;

  do {
    userInput = +prompt("Enter numbers (a negative number to stop):");

    // if is not a number, set userInput = 0 to continue
    if (isNaN(userInput)) {
      userInput = 0;
    } else {
      // if not a negative number, update sum and increment count
      if (userInput >= 0) {
        sum += userInput;
        count++;
      }
    }
  } while (userInput >= 0);


  if (count === 0) {
    return document.getElementById("div3").innerHTML = "Please enter one or more positive numbers."
  } else {
    return document.getElementById("div3").innerHTML = "The average is " + sum / count;
  }
}

// Question 4 function
function displayPattern() {
  let rows = document.getElementById("rows").value;

  if (isNaN(rows) || rows <= 1) {
    return document.getElementById("div4").innerHTML = "Enter a integer number greater than 1.";
  }

  // make sure the input number is integer
  rows = Math.floor(rows);

  // clear div text to print the pattern result
  document.getElementById("div4").innerHTML = "";

  let rowPattern = "", zeros = "";
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= rows; j++) {
      // add zeros before the number to keep rows with the same length
      zeros = "0".repeat(rows.toString().length - i.toString().length)
      rows - (i - 1) === j ? rowPattern += zeros + i.toString() : rowPattern += ".";
    }
    document.getElementById("div4").innerHTML += rowPattern + "<br>";
    rowPattern = "";
  }
}