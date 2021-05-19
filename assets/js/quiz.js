document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.getElementsByTagName("button");

    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            checkAnswer();
        }
    })

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

function imageQ04 (){
    let openImage = 
    document.getElementById('hill-black').src=pic.replace('100x100');
    document.getElementById("hill-black").style.visibility="visible";
}