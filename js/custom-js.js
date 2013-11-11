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
