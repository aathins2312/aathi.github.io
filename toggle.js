$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
    $('.parent2').on('mousedown touchstart', function() {
    if (!active1) $(this).find('.test1').css({'background-color': 'darkSlateGray', 'transform': 'translate(0vw,14.5em)'});
    else $(this).find('.test1').css({'background-color': 'dimGray', 'transform': 'none'}); 
     if (!active2) $(this).find('.test2').css({'background-color': 'darkSlateGray', 'transform': 'translate(0vw,7.5em)'});
    else $(this).find('.test2').css({'background-color': 'darkGray', 'transform': 'none'});
      if (!active3) $(this).find('.test3').css({'background-color': 'darkSlateGray', 'transform': 'translate(0vw,11em)'});
    else $(this).find('.test3').css({'background-color': 'silver', 'transform': 'none'});
      if (!active4) $(this).find('.test4').css({'background-color': 'darkSlateGray', 'transform': 'translate(0vw,4em)'});
    else $(this).find('.test4').css({'background-color': 'silver', 'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;    
    });
});


