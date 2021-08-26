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
    if ($(this).hasClass('true')) {
      $('#q1True').modal();
    } else if ($(this).hasClass('false')) {
      $('#q1False').modal();
    }
  });

  $(".btnQ2").click(function(){
    if ($(this).hasClass('true')) {
      $('#q2True').modal();
    } else if ($(this).hasClass('false')) {
      $('#q2False').modal();
    }
  });

  $(".btnQ3").click(function(){
    if ($(this).hasClass('true')) {
      $('#q3True').modal();
    } else if ($(this).hasClass('false')) {
      $('#q3False').modal();
    }
  });

  $(".btnQ4").click(function(){
    if ($(this).hasClass('true')) {
      $('#q4True').modal();
    } else if ($(this).hasClass('false')) {
      $('#q4False').modal();
    }
  });