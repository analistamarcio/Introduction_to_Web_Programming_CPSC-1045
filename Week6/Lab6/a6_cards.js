// global card object
let card = {};

// Card constructor
function Cards(theSuit, theValue) {
  this.suit = theSuit;
  this.value = theValue;
}

// Draw Card button function
function drawCard() {
  // "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"
  let suits = ["Club", "Diamond", "Heart", "Spade"];
  card.suit = suits[Math.floor(Math.random() * suits.length)];
  card.value = Math.floor(Math.random() * 12) + 1;

  document.getElementById("result").innerHTML = "Guess the Card";
  console.log(card);
}

// Check Guess button function
function checkGuess() {
  let userSuit = document.getElementById("suit").value;
  let userCard = parseInt(document.getElementById("card").value);

  if (card.suit === undefined) {
    document.getElementById("result").innerHTML = "Draw a card first.";
  } else if (userSuit === card.suit && userCard === card.value) {
    document.getElementById("result").innerHTML = "You got it!";
  } else {
    document.getElementById("result").innerHTML = "Better Luck Next Time!";
  }
}
