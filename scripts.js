// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form submission (Example)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (email && message) {
      alert('Your message has been sent! Thank you.');
      // You can replace this with actual form submission via AJAX or API.
    } else {
      alert('Please fill in all fields.');
    }
  });