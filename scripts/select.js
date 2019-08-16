$(document).ready(() => {
  $(".input").on('change',function(){
    var textval=$(this).children("option:selected").val();
    console.log(textval);
    $('#opacitySection2-2').css({
      opacity: 0.1
    });
    $('#opacitySection2-3').css({
      opacity: 0.1
    });
    $('#opacitySection2-3').css({
      opacity: 0.1
    });
    $('.spinner2').show();
    setTimeout(function(){
      $('#opacitySection2-2').css({
        opacity: 1
      });
      $('#opacitySection2-3').css({
        opacity: 1
      });
      $('#opacitySection2-4').css({
        opacity: 1
      });
      $('.spinner2').hide();
    }, 1400);


    if(textval==2){
      $('.per-title').text("Week on Week Revenue comparison");
      $('.per-sub').text("Weekly revenue comparison for this week and last week");
      $('#this-color').text("This Week");
      $('#prev-color').text("Last Week");
    }
    else{
      $('.per-title').text("Month on Month Revenue comparison");
      $('.per-sub').text("Monthly revenue comparison for this year and last year");
      $('#this-color').text("This Year");
      $('#prev-color').text("Last Year");
    }

  });

  $("#rev-select").on('change',function(){
    var textval=$(this).children("option:selected").val();
    console.log(textval);
    $('#sec1').css({
      opacity: 0.1
    });
    $('#sec2').css({
      opacity: 0.1
    });
    $('#sec3').css({
      opacity: 0.1
    });
    $('.spinnerBegin').show();
    $('.spinner').hide();
    setTimeout(function(){
      $('#sec1').css({
        opacity: 1
      });
      $('#sec2').css({
        opacity: 1
      });
      $('#sec3').css({
        opacity: 1
      });
      $('.spinnerBegin').hide();
    }, 1400);


    if(textval==2){
      $('.per-title').text("Week on Week Revenue comparison");
      $('.per-sub').text("Weekly revenue comparison for this week and last week");
      $('#this-color').text("This Week");
      $('#prev-color').text("Last Week");
    }
    else{
      $('.per-title').text("Month on Month Revenue comparison");
      $('.per-sub').text("Monthly revenue comparison for this year and last year");
      $('#this-color').text("This Year");
      $('#prev-color').text("Last Year");
    }

  });

})
