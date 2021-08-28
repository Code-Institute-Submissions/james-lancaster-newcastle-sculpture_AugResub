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

// Changes background color depending on answer by adding appropriate class
$('.sumQ').click(function() {
   if ($(sumQ).hasClass('correct')) {
      $(sumQ).addClass('right');
   } else {
      $(sumQ).addClass('wrong');
   }
  });

//Fades out other quiz answers when one is selected 
$('.btn-q').click(function(){
  $(this).siblings().hide
});

//Increases the score by one if the answer is correct
var score = 0
document.getElementsByClassName("sumQ")
    if ((this).hasClass('correct')){
        score++
    } else {if ((this).hasClass('incorrect'))
        score;
    }
console.log(score)

    $(".q2Sum").click(function(){
        ($(this).hasClass('correct'))
        score++;
    })

    $(".q3Sum").click(function(){
        ($(this).hasClass('correct'))
        score++;
    })

    $(".q4Sum").click(function(){
        ($(this).hasClass('correct'))
        score++;
    });

console.log(score)

//Refreshes the page so the user can start again
// sculptureQuiz.getElementById("quizSubmit").reload();
// document.getElementById("quizSubmit").reload();
// };

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
    if (score > 0 && correct < 3) {
        range = 2;
    }
    if (score > 2 && correct < 4) {
        range = 1;
    }
    if (score > 3) {
        range = 0;
    };

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_score").innerHTML = "You scored " + score;
document.getElementById("message").innerHTML = messages[range];