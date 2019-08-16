// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
	$(".custom-select").on('change',function(){
		var textval=$(this).children("option:selected").val();
		console.log(textval);
    $('#opacitySection').css({
      opacity: 0.1
    });
    $('.spinnerBegin').show();
    setTimeout(function(){
      $('#opacitySection').css({
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


//	scrolling

	$(window).load(function(){

    $("#nav-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector:"#nav-menu a"
    });

    $("a[rel='next']").click(function(e){
      e.preventDefault();
      var to=$(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo",to);
    });

  });

	$("Selector").mPageScroll2id({

  /* scroll animation speed in milliseconds: Integer */
  scrollSpeed:1000,

  /* auto-adjust animation speed (according to target element position and window scroll): Boolean */
  autoScrollSpeed:true,

  /* scroll animation easing when page is idle: String */
  scrollEasing:"easeInOutQuint",

  /* scroll animation easing while page is scrolling: String */
  scrollingEasing:"easeOutQuint",

  /* end of page "smooth scrolling" (auto-adjust the scroll-to position when bottom elements are too short): Boolean */
  pageEndSmoothScroll:true,

  /*
  page layout defines scrolling direction: String
  values: "vertical", "horizontal", "auto"
  */
  layout:"vertical",

  /* extra space in pixels for the target element position: Integer */
  offset:0,

  /* highlight the main/default selectors or insert a different set: Boolean, String */
  highlightSelector:false,

  /* class of the clicked element: String */
  clickedClass:pluginPfx+"-clicked",

  /* class of the current target element: String */
  targetClass:pluginPfx+"-target",

  /* class of the highlighted element: String */
  highlightClass:pluginPfx+"-highlight",

  /* force a single highlighted element each time: Boolean */
  forceSingleHighlight:false,

  /* keep element highlighted until next (one element always stays highlighted): boolean */
  keepHighlightUntilNext:false,

  /* highlight elements according to their target and next target position (useful when targets have zero dimensions). Non "auto" layouts only: boolean */
  highlightByNextTarget:false,

  /* disable plugin below [x,y] screen size: boolean, integer, array ([x,y]) */
  disablePluginBelow:false,

  /* enable/disable click events for all selectors */
  clickEvents:true,

  /* append hash to URL/address bar */
  appendHash:false,

  /* enable/disable the default selector: Boolean */
  defaultSelector:false,

  /* highlight elements now and in the future */
  live:true,

  /* set specific live selector(s): String */
  liveSelector:false,

  /* user callback functions: fn */
  onStart:function(){},
  onComplete:function(){}

});


});
