document.addEventListener("DOMContentLoaded", function () {

  let buttons = document.getElementsByTagName("button");

//  document.getElementById("btnQ4").addEventListener("keydown", function (event) {
//      if (event.key == "Enter") {
//          checkAnswer(); // the code to open the image
//      }
//  })

// 2. for (let button of buttons) is a modern version of the iterating syntax. It goes through our buttons
// array and returns each element in the array, which will be stored in that variable button on each
// iteration. It's really for (let i = 0; i < buttons.length; i ++) {}
  for (let button of buttons) {
      // 2a. We add an event listener, listening for that button to be clicked, when the code that's inside 
      // this code block will be run.
      button.addEventListener("click", function () {
          // 2b. We add an if statement to check the attribute of data type to see what its value is, and 
          // make alerts accordingly.
          if (this.getAttribute("data-type") === "btnQ4") {
              for (let gameType = this.getElementsByClassName("btnQ4v");
              runGame(gameType);
          }
      });
  }
  runGame("addition");
});

// Get the modal
var modal = document.getElementsById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}