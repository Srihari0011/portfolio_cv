// script.js

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload on form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple validation
    if (name && email && message) {
      alert("Thank you for reaching out! I'll get back to you soon.");
      document.getElementById("contact-form").reset(); // Reset form fields
    } else {
      alert("Please fill in all fields.");
    }
  });
  