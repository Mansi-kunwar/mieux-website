const scrollContainer = document.getElementById('testimonialScroll');

function scrollLeftSide() {
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightSide() {
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}