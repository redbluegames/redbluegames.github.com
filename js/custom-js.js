// Highlight the active link in the navbar
$('.dropdown-menu > li > a[href="' + document.location.pathname + '"]').parent().addClass('active');
$('.nav > li > a[href="' + document.location.pathname + '"]').parent().addClass('active');

// Off-Canvas (Toggles the side-bar for Buzzwords page)
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

// Colorize Footer
$(document).ready(function() {
  var curPath = window.location.pathname;
    if(curPath.indexOf ("mininuts") > 0 || curPath.indexOf ("minifish") > 0 || curPath.indexOf ("company") > 0){
      $('.footer').addClass('blue-footer');
    } else {
      $('.footer').addClass('red-footer');
    }
});

/* Custom Tweening */

/*
// Handle our bio pics sliding in on scroll

// Snagged from https://coderwall.com/p/fnvjvg
$.fn.inView = function(){
    //Window Object
    var win = $(window);
    //Object to Check
    obj = $(this);
    //the top Scroll Position in the page
    var scrollPosition = win.scrollTop();
    //the end of the visible area in the page, starting from the scroll position
    var visibleArea = win.scrollTop() + win.height();
    //the end of the object to check
    var objEndPos = (obj.offset().top + obj.outerHeight());
    return(visibleArea-600 >= objEndPos && scrollPosition <= objEndPos);
};

$(window).scroll(function(){
    if ($(".bio").inView() && !$(".bio").hasClass("animated")) {
     $(".bio").removeClass("hidden");
     $(".bio").addClass("animated");
    }
});
*/

// Pop in engine icons
$(document).ready (function () {
  $('.android-icon').addClass("hidden");
  $('.unity-icon').addClass("hidden");
  $(".vicious-icon").addClass("animated bounceIn");
  setTimeout(function () {
    $('.android-icon').removeClass("hidden");
    $('.android-icon').addClass('animated bounceIn');
  }, 100);
  setTimeout(function () {
    $('.unity-icon').removeClass("hidden");
    $('.unity-icon').addClass('animated bounceIn');
  }, 200);
});

// Tween our badge icons by scaling up and down on mouseover
$(".wiggle-on-hover").mouseenter(function() {
  $(this).addClass('animated rubberBand');
});
$(".wiggle-on-hover").mouseleave(function() {
  $(this).removeClass('animated rubberBand');
});

/* Minigame Microsite Behavior */
$(document).ready(function() {
  var minigamePath = "/games/promos/";
  var minigamePages = ["minifish/", "mininuts/", "ministackem/", "sparklite/"];
  var activeIndex = LookUpIndex();

  if (activeIndex != -1) {
    $('.dropdown > a').addClass("active");
  }

  $('#left').click(clickLeft);
  $('#right').click(clickRight);

  function clickLeft() {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = minigamePages.length-1;
    }
    window.location.href = minigamePath + minigamePages[activeIndex];
  }

  function clickRight() {
    activeIndex++;
    if (activeIndex >= minigamePages.length) {
      activeIndex = 0;
    }
    window.location.href = minigamePath + minigamePages[activeIndex];
  }

  function LookUpIndex ()
  {
    for (var i = 0; i < minigamePages.length; i++) {
      if (minigamePages[i] === escape(document.URL.split("/promos/")[1])) {
        return i;
      }
    }
    return -1;
  }
});
