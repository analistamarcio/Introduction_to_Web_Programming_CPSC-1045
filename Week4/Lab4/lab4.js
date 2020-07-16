// ***** Question 1 ***** //

let lotto = 0;

function generateRandomNumber() {
  lotto = Math.floor(Math.random() * (99 - 10)) + 10;
  console.log(lotto); // logs the random number to help testing
}

function checkMyNumbers() {
  // get the textbox data
  let num = document.getElementById("myGuess").value;

  // validate the number
  if (lotto === 0) {
    return document.getElementById("result").innerHTML = "Generate a random number first.";
  } else if (isNaN(num) || num < 10 || num > 99) {
    return document.getElementById("result").innerHTML = "Invalid number.";
  } else if (num === "") {
    return document.getElementById("result").innerHTML = "Enter a number.";
  }

  if (num == lotto) {
    return document.getElementById("result").innerHTML = "The number was: " + num + ". Exact match! You win $10000";
  }

  // regex expression to count digits found into random number
  let checkDig = (lotto.toString().match(new RegExp(num.charAt(0), "g")) || []).length + (lotto.toString().match(new RegExp(num.charAt(1), "g")) || []).length;
  // correct digits found when user inform repeated digits (Ex: random = 57 and given number = 55 or 77)
  if (checkDig === 2) {
    if (lotto.toString().charAt(0) !== lotto.toString().charAt(1) && num.charAt(0) === num.charAt(1)) {
      checkDig--;
    }
  }

  // return the result
  if (checkDig === 0) {
    return document.getElementById("result").innerHTML = "Sorry. Try again.";
  } else if (checkDig > 1) {
    return document.getElementById("result").innerHTML = "The number was: " + lotto + ". Matched both digits! You win $3000";
  } else {
    return document.getElementById("result").innerHTML = "The number was: " + lotto + ". Matched one digit! You win $1000";
  }
}


// ***** Question 2 ***** //

let imgFile = ["tanooki.png", "mushroom.png", "star.png"];
let currentImage = 0;
let timer;

// rotate image between files into imgFile array
function changeImage() {
  currentImage++
  if (currentImage > imgFile.length - 1) {
    currentImage = 0;
  }
  document.getElementById("rotativeImage").src = imgFile[currentImage];
}

// starts the timer
function startSlideshow() {
  if (typeof (timer) === "undefined") {
    timer = setInterval(changeImage, 1);
  }
}

// stops the timer
function stopSlideshow() {
  clearInterval(timer);
  timer = undefined;
}
