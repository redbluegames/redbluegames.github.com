// Highlight the active link in the navbar
$('.nav > li > a[href="' + document.location.pathname + '"]').parent().addClass('active');

// Off-Canvas (Toggles the side-bar for Buzzwords page)
$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

// Handle flipping the little imagess in the footer
$(".flipper").mouseenter(function() {
  $(this).transition({
    perspective: '100px',
    rotateY: '180deg'
  });
});

/* Minigame Microsite Behavior */
$(document).ready(function() {
  var wrappers = $('.minigame-wrapper');
  var activeIndex = LookUpIndex();
  DisplayIndex(activeIndex);

  $('#left').click(clickLeft);
  $('#right').click(clickRight);

  function clickLeft() {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = wrappers.length-1;
    }
    window.location.hash = wrappers.get(activeIndex).getAttribute('id');
    DisplayIndex (activeIndex);
  }

  function clickRight() {
    activeIndex++;
    if (activeIndex >= wrappers.length) {
      activeIndex = 0;
    }
    window.location.hash = wrappers.get(activeIndex).getAttribute('id');
    DisplayIndex (activeIndex);
  }

  function LookUpIndex ()
  {
    for (var i = 0; i < wrappers.length; i++) {
      if (wrappers.get(i).getAttribute('id') === window.location.hash.split('#')[1]) {
        return i;
      }
    }
    return 0;
  }

  function DisplayIndex (index)
  {
    for (var i = 0; i < wrappers.length; i++) {
      var jqueryObj = $(wrappers.get(i));
      if (i == index) {
        $(jqueryObj).removeClass("hidden");
      } else {
        $(jqueryObj).addClass("hidden");
      }
    }
  }

});
