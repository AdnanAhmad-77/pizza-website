// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Booking Form Submission
const bookingForm = document.getElementById('booking-form');
bookingForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Booking request submitted!');
    bookingForm.reset();
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent!');
    contactForm.reset();
});
