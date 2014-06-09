// Highlight the active link in the navbar
$('.dropdown-menu > li > a[href="' + document.location.pathname + '"]').parent().addClass('active');
$('.nav > li > a[href="' + document.location.pathname + '"]').parent().addClass('active');

// Off-Canvas (Toggles the side-bar for Buzzwords page)
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

/* Custom Tweening */

// Handle flipping the little imagess in the footer
$(".flipper").mouseenter(function() {
  $(this).transition({
    perspective: '100px',
    rotateY: '180deg'
  });
});

// Tween our badge icons by scaling up and down on mouseover
$(".badge-icon img").mouseenter(function() {
  $(this).transition({scale: 1.1}, 150, 'ease');
});
$(".badge-icon img").mouseleave(function() {
  $(this).transition({scale: 1}, 150, 'ease');
});


/* Minigame Microsite Behavior */
$(document).ready(function() {
  var minigamePath = "/games/minigames/";
  var minigamePages = ["minifish/", "mininuts/"];
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
      if (minigamePages[i] === document.URL.split("/minigames/")[1]) {
        return i;
      }
    }
    return -1;
  }
});
