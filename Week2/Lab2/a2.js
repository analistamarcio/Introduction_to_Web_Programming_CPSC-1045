// convert lbs to kg
function convertWeight() {
  let userWeight = +prompt("Enter your weight (in pounds)");

  // check if entered value is a number and greater than 0 (zero)
  if (isNaN(userWeight) || userWeight <= 0) {
    return alert("Invalid weight.");
  }

  let weightKg = userWeight * 0.454;
  document.getElementById("div1").innerHTML = userWeight + "lbs is " + weightKg + "kg.";
}

// calculate how much money the user makes based on hour worked
function calculatePay() {
  let hour = +prompt("How many hours did you work?");

  // check if its a valid hour
  if (isNaN(hour) || hour <= 0) {
    return alert("Invalid hour. (Use a number format. Ex: 38:30h = 38.5)");
  }

  let wage = hour * 12; // if hour is less or equal to 40 it will not changed
  if (hour > 40) {
    wage = (40 * 12) + (hour - 40) * 18;
  }

  document.getElementById("div2").innerHTML = "You worked " + hour + " hrs and you made $" + wage;
}

// create a username based on given the first name, the last name, and the 4 digit birth year
function makeUsername() {
  let firstName = prompt("Enter your first name");

  // check if its a valid first name
  if (firstName === null || firstName === "") {
    return alert("Invalid first name.");
  }

  let lastName = prompt("Enter your last name");

  // check if its a valid last name
  if (lastName === null || lastName === "") {
    return alert("Invalid last name.");
  }

  let birthYear = prompt("Enter your birth year (4 digits)");

  // check if its a valid birth year
  if (isNaN(birthYear) || birthYear < 1000 || birthYear > 9999) {
    return alert("Invalid birth year. (must be between 1000 and 9999)");
  }

  let username = firstName.charAt(0).toUpperCase(); // first letter of the first name capitalized
  username += lastName.charAt(0).toUpperCase(); // first letter of the last name capitalized
  username += lastName.substring(1, 4).toLowerCase(); // second to fourth letters of the last name uncapitalized
  username += birthYear.toString().substring(2); // two last digits of the birth year

  document.getElementById("div3").innerHTML = firstName + " " + lastName + " " + birthYear + " has username: " + username;
}

//
function isValidNumber() {
  let num1 = +prompt("Enter the first number (minimum value)");

  // validate the first number
  if (isNaN(num1)) {
    return alert("Invalid first number.");
  }

  let num2 = +prompt("Enter the second number (maximum value)");

  // validate the second number
  if (isNaN(num2)) {
    return alert("Invalid second number.");
  }

  let num3 = +prompt("Enter the third number");

  // validate the third number
  if (isNaN(num3)) {
    return alert("Invalid third number.");
  }

  if (num3 >= Math.min(num1, num2) && num3 <= Math.max(num1, num2)) {
    document.getElementById("div4").innerHTML = "The value " + num3 + " does fall between " + Math.min(num1, num2) + " and " + Math.max(num1, num2);
  } else {
    document.getElementById("div4").innerHTML = "The value " + num3 + " does not fall between " + Math.min(num1, num2) + " and " + Math.max(num1, num2);
  }
}
