// navbar
var burger = document.getElementById('burger');
var navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// protfolio
var modal = document.getElementById('sliderModal');
var modalImg = document.getElementById('modalImage');
var closeBtn = document.querySelector('.close');
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');

var currentImages = [];
var currentIndex = 0;

document.querySelectorAll('.portfolio-section').forEach(section => {
  var images = section.querySelectorAll('img');
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentImages = Array.from(images);
      currentIndex = index;
      openModal(currentImages[currentIndex].src);
    });
  });
});

function openModal(src) {
  modalImg.src = src;
  modal.classList.remove('hidden');
}

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex].src;
});

