// Opens a modal when the user clicks on the "view image" button in question 4
$("#qzm01").click(function(){
    $("#quizModal01").modal();
/*    $('quizModal01').appendTo("body");*/
});

$("#qzm02").click(function(){
    $("#quizModal02").modal();
});

$("#qzm03").click(function(){
    $("#quizModal03").modal();
});

$("#qzm04").click(function(){
    $("#quizModal04").modal();
});

// Opens a modal to give a response when the user has selected an answer to any of the questions
// - no longer in use
/*
$(".btnQ1").click(function(){
    if ($(this).hasClass('correct')) {
        $('#q1Correct').modal();
    } else if ($(this).hasClass('incorrect')) {
        $('#q1Incorrect').modal();
  }
});

$(".btnQ2").click(function(){
    if ($(this).hasClass('correct')) {
        $('#q2Correct').modal();
    } else if ($(this).hasClass('incorrect')) {
        $('#q2Incorrect').modal();
    }
});

$(".btnQ3").click(function(){
    if ($(this).hasClass('correct')) {
        $('#q3Correct').modal();
    } else if ($(this).hasClass('incorrect')) {
        $('#q3Incorrect').modal();
    }
});

$(".btnQ4").click(function(){
    if ($(this).hasClass('correct')) {
        $('#q4Correct').modal();
    } else if ($(this).hasClass('incorrect')) {
        $('#q4Incorrect').modal();
    }
});
*/

// This code based on code in Briggs K. Javascript tutorial: make a quiz. 
// mrteacherkevin 17 Oct 2016. https://www.youtube.com/watch?v=C7NsIRhoWuE
//Increases the score by one if the answer is correct
function check(){
    var q1N = document.quizSculpture.q1N.value;
    // console.log(q1N);
    var q2N = document.quizSculpture.q2N.value;
    var q3N = document.quizSculpture.q3N.value;
    var q4N = document.quizSculpture.q4N.value;
    var score = 0;
        if (q1N == "swan"){
            score++;
        }

        // console.log(score);

        if (q2N == "boonham"){
            score++;
        }
        if (q3N == "tyne"){
            score++;
        }
        if (q4N == "siren"){
            score++;
        }

// Returns a message saying how many answers were correct
    var messages = [
        "Great, you’re a sculpture expert! Why not lead a tour?", 
        "Very good, you nearly know it all",
        "Not bad, a good basis to get going",
        "Okay, starting with a clean slate is good - it’ll be all new and exciting for you",
    ];

    var range;
    if (score < 1) {
    range = 3;
    }
    if (score > 0 && score < 3) {
        range = 2;
    }
    if (score > 2 && score < 4) {
        range = 1;
    }
    if (score > 3) {
        range = 0;
    }

// Display the result and the correct answers 
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_score").innerHTML = "You scored " + score;
document.getElementById("message").innerHTML = messages[range];
document.getElementById("show_answers").style.visibility = "visible";
}


// Changes background color depending on answer by adding appropriate class - no longer required
/*$('.sumQ').click(function() {
    if ($(this).hasClass('correct')) {
       $(this).addClass('right');
    } else {
       $(this).addClass('wrong');
    }
   });
*/ 
 //Fades out other quiz answers when one is selected
 /*
 $('.btn-q').click(function(){
   $(this).siblings().hide
 });
 */