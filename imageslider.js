var carousel = $(".carousel"),
    currdeg = 0,
    autoplayInterval;

function rotateCarousel() {
  currdeg -= 60;
  carousel.css({
    "transform": "rotateY(" + currdeg + "deg)",
    "-webkit-transform": "rotateY(" + currdeg + "deg)",
    "-moz-transform": "rotateY(" + currdeg + "deg)",
    "-o-transform": "rotateY(" + currdeg + "deg)"
  });
}

function startAutoplay() {
  autoplayInterval = setInterval(rotateCarousel, 2000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Pause on hover
// carousel.on("mouseenter", stopAutoplay).on("mouseleave", startAutoplay);
