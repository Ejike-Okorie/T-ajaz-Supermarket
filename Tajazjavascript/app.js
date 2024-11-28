// JavaScript for Hero Slider
const slider = document.querySelector('.hero-slider');
const slides = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to update slider position
function updateSliderPosition() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

// Function for next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSliderPosition();
}

// Function for previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSliderPosition();
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Automatic sliding
setInterval(nextSlide, 4000); // Change slides every 5 seconds


// ---------------------------------
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});



// ---------------------- login  and sign up form 
// Function to open a modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Function to close a modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modals when clicking outside the content
window.addEventListener('click', (e) => {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const contactusModal = document.getElementById('contactusModal');
  if (e.target === loginModal) loginModal.style.display = 'none';
  if (e.target === signupModal) signupModal.style.display = 'none';
  if (e.target === contactusModal) contactusModal.style.display = 'none';
});

