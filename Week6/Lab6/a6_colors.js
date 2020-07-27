let timer;
let listItem; // current coloured item (unordered list)
let arrColors = []; // global colors array (unordered list)

// Add Color button function
function addColor() {
  // add color to the global array
  let userColor = document.getElementById("color").value;
  arrColors.push(userColor);

  // update the unordered list
  let newItem = document.createElement("li");
  newItem.setAttribute("onmouseover", "startsColor(this)");
  newItem.setAttribute("onmouseout", "stopsColor(this)");
  newItem.id = arrColors.length - 1;
  let newColorName = document.createTextNode(arrColors[arrColors.length - 1]);
  newItem.appendChild(newColorName);
  let unorderedList = document.getElementById("colorList");
  unorderedList.appendChild(newItem);
}

// starts the timer
function startsColor(liElement) {
  if (typeof (timer) === "undefined") {
    timer = setInterval(bgColorsChange, 1000, liElement.id);
  }
}

// stops the timer
function stopsColor() {
  clearInterval(timer);
  timer = undefined;

  // clear bg color to starts from a new li item when timer restarts
  if (listItem !== undefined) {
    document.getElementById(listItem).style.backgroundColor = "";
    listItem = undefined;
  }
}

// changes li bg color
function bgColorsChange(startsAt) {
  if (listItem === undefined) {
    // initialize listItem to starts bg coloring
    listItem = startsAt;
    document.getElementById(listItem).style.backgroundColor = document.getElementById(listItem).innerHTML;
  } else {
    // clears the current coloured list item
    document.getElementById(listItem).style.backgroundColor = "";
    // updates listItem (next list item to be coloured)
    listItem < arrColors.length - 1 ? listItem++ : listItem = 0;
    // changes the bg color of the list item
    document.getElementById(listItem).style.backgroundColor = document.getElementById(listItem).innerHTML;
  }
}