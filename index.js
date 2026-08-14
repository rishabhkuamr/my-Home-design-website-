// DOM Elements
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const contactForm = document.getElementById('contactForm');

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded successfully!');
  addInteractivity();
  handleContactForm();
});

// Add interactivity
function addInteractivity() {
  // Add hover effect to heading
  if (heading) {
    heading.addEventListener('mouseenter', function() {
      this.style.color = '#e74c3c';
      this.style.transform = 'scale(1.05)';
      this.style.transition = 'all 0.3s ease';
    });

    heading.addEventListener('mouseleave', function() {
      this.style.color = '#2c3e50';
      this.style.transform = 'scale(1)';
    });
  }

  // Add fade-in effect to paragraph
  if (paragraph) {
    paragraph.style.opacity = '0';
    setTimeout(function() {
      paragraph.style.transition = 'opacity 1s ease';
      paragraph.style.opacity = '1';
    }, 100);
  }
}

// Handle contact form submission
function handleContactForm() {
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const formMessage = document.getElementById('formMessage');
      
      // Validate form
      if (name && email && subject && message) {
        // Simulate form submission
        logInfo(`Form submitted: ${name} (${email})`);
        
        // Show success message
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 3 seconds
        setTimeout(function() {
          formMessage.className = 'form-message';
        }, 3000);
      } else {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.className = 'form-message error';
      }
    });
  }
}

// Utility function to log information
function logInfo(message) {
  console.log(`[INFO] ${message}`);
}

// Call on page load
logInfo('JavaScript initialized');
