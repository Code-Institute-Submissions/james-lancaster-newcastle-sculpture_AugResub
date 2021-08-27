// When the user clicks on the "view image" button in question 4
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
   if ($(this).hasClass('correct')) {
      $(this).addClass('right');
   } else {
      $(this).addClass('wrong');
   }
  });

  //Fades out other quiz answers when one is selected 
$('.btn-q').click(function(){
  $(this).siblings().hide
});

//Increases the score by one if the answer is correct
var score = 0
function check() {
  var correct = 0;
  $(".q1Sum").click(function(){
      ($(this).hasClass('correct'))
      correct++;
  })
  $(".q2Sum").click(function(){
      ($(this).hasClass('correct'))
      correct++;
  })
  $(".q3Sum").click(function(){
      ($(this).hasClass('correct'))
      correct++;
  })
  $(".q4Sum").click(function(){
      ($(this).hasClass('correct'))
      correct++;
  })
};

