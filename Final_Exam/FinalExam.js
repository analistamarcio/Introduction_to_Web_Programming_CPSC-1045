let myNotes = [];

function Note(note, duration) {
  this.note = note;
  this.duration = duration;
  this.durationInSeconds = function () {
    if (this.duration == "whole") {
      return 1;
    } else if (this.duration == "half") {
      return 0.5
    } else {
      return 0.25;
    }
  }
  this.toString = function () {
    return "[" + duration + " " + this.note + "]"
  };
}

function calculateDuration() {
  let sumDuration = 0;
  myNotes.forEach(note => {
    sumDuration += note.durationInSeconds();
  });

  document.getElementById("resDuration").innerHTML = "Length " + sumDuration;
}

function displayNotes(notes) {
  let notesList = [""];
  notes.forEach(note => {
    // console.log(note.toString());
    notesList += note.toString();
  })

  // console.log(notesList);
  document.getElementById("score").innerHTML = notesList;
}

function addNote() {
  let note = document.getElementById("note").value;
  let duration = document.getElementById("duration").value;
  let newNote = new Note(note, duration);
  myNotes.push(newNote);
  calculateDuration();
  displayNotes(myNotes);
}

function removeNote() {
  if (myNotes.length > 1) {
    myNotes.pop();
    calculateDuration();
    displayNotes(myNotes);
  } else {
    myNotes = [];
    document.getElementById("resDuration").innerHTML = "Output area to display the duration of the score";
    document.getElementById("score").innerHTML = "Output area to display the musical score";
  }
}

function changeNote() {
  let noteIndex = parseInt(document.getElementById("position").value);
  let newNote = document.getElementById("noteChange").value;
  // console.log(noteIndex);

  if (noteIndex < myNotes.length) {
    myNotes[noteIndex].note = newNote;
    displayNotes(myNotes);
  }
}