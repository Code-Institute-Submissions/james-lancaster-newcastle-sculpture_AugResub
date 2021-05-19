document.addEventListener("DOMContentLoaded", function () {

  let buttons = document.getElementsByTagName("button");

// Do I need this? I'm not sure how to use it if it's getting the same id
//  document.getElementById("btnQ4").addEventListener("keydown", function (event) {
//      if (event.key == "Enter") {
//          checkAnswer(); // the code to open the image
//      }
//  })

// a. for (let button of buttons) is really for (let i = 0; i < buttons.length; i ++) {}
// It goes through the buttons array and returns each element from it, which will be stored in that
// variable button on each iteration. 
  for (let button of buttons) {
  // ai. We add an event listener; it's here that I must put in the actual code itself to open the modal
      button.addEventListener("click", function () {
// aii. We add an if statement to check the attribute of data type to see what its value is.
          if (this.getAttribute("data-type") === "btnQ4") {
              for (let gameType = this.getElementsByClassName("btnQ4v") {

// 1. Get the modal. Which is the best id to use? Using let rather than var.
// Is this the way to enter this code?
// Should I have a separate line for each image?
                let modalQ4 = document.getElementsByClassName("myModImg");

// It's better to have a button rather than an image to click on, since arranging
// four images just makes things complicated in the grid layout
// 2. Get the button that opens the modal
                let btnImg = document.getElementsByClassName("btn-q");
// 3. Get the image and insert it inside the modal - is this correct after the other steps? Use let
// Try other ways of selecting the image; check which classes and tags are used in the first function
                let img = document.getElementById("hill-rhino-img");
                let modalImg = document.getElementById("imgQ4m");

// 4. Use btn rather than img to display
                btnImg.onclick = function() {
                  modal.style.display = "block";
                  modalImg.src = this.src;
                }

// 5. Get the <span> element that closes the modal.
                let span = document.getElementsByClassName("close")[0];

// 6. When the user clicks on <span> (x), close the modal
                span.onclick = function() { 
                  modal.style.display = "none";
                }

// 7. When the user clicks outside the modal, close it - does this conflict with other functions above?
// What about the enter function at the very top **now commented out**
                window.onclick = function(event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
        }
      });
  }
});




