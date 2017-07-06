// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew(name) {
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

function remove(name) {
  for(var i = 0; i < roster.length; i++) {
    if (roster[i] === name) {
      roster.splice(i, 1);
    }
  }
}

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display() {
  console.log(roster);
}

// Start by asking if they want to use the web app

var want = prompt("Do you want to use the web app? y/n");

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (want === "y") {
  var keepOn = true;
  while (keepOn) {
    var action = prompt("What do you want to do?");
    if (action === "add") {
      addNew(prompt("Write name"));
    } else if (action === "remove") {
      remove(prompt("Write name"));
    } else if (action === "display") {
      display();
    } else if (action === "quit") {
      keepOn = false;
    }
  }
} else {
  alert("Bye!");
}
