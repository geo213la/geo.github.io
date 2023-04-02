
// var userName= prompt("what is your name?")
//   alert("WELCOME TO THE GAME!!")

var gold =Math.floor(Math.random()*9)
var death = Math.floor(Math.random() *9)
if (gold===death){
  var death = Math.floor(Math.random() *9)
}



const treasure = (location) => {

  if (gold === location) {
    document.getElementById(location).innerHTML= "🔷"}
  
  else if(death=== location){
    document.getElementById(location).innerHTML= "☠️"
      setTimeout(() => {
    alert("YOU DEAD!!");
  }, "1000")
  }
  else {document.getElementById(location).innerHTML= "🌰"

  }
}














// Treasure Hunt Challenge
// Create a new file in the treasure-hunt directory called treasurehunt.js.
// Add a script tag to the bottom of the HTML body so the HTML page knows it has a dependency. Notice there is no innerHTML.
// Create a function called treasure that returns an alert.
// Add an onclick attribute to all the game board squares that calls the treasure function. If this is done correctly, the alert should appear each time the user clicks on a square.
// Add a parameter to the function called location and pass the location parameter to the alert.
// Add a unique id (numbers 0-8) to all game board squares.
// Pass the same number into the function invocation. If this is done correctly, the alert will display the id of each square.
// Replace the alert with an action that will change the question mark innerHTML to a tree icon when clicked.
// We can use the icon symbols or emojis.
// Access the emoji keyboard by clicking fn on a mac or WindowKey + for a windows computer.
// Create a variable for the treasure that will store a random number between 0 and 8.
// Create a variable for the bomb that will store a random number between 0 and 8.
// Add a conditional statement that will evaluate if the location clicked equates to the random treasure location.
// If the treasure evaluation is true change the innerHTML question mark to a treasure.
// Add another level to the conditional statement that will evaluate if the location clicked equates to the random bomb location.
// If the bomb evaluation is true change the innerHTML question mark to a bomb.
// Add an onclick to the HTML button that will refresh the page, resetting the game board.
// Things to consider:
  // What if the bomb and treasure are in the same location?
  // How does the game end?