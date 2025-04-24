const wrapper = document.getElementById("reviewsWrapper");

function slideLeft() {
  wrapper.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

function slideRight() {
  wrapper.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}












