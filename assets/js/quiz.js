//Run function only when the page is ready
/* $(document).ready(function(){
*/

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