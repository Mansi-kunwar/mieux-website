// contact us page - form

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const query = document.getElementById('query').value.trim();
    const response = document.getElementById('responseMessage');
  
    if (!name || !email || !phone || !query) {
      response.textContent = "Please fill out all fields.";
      response.style.color = "red";
      return;
    }
  
    // Here, you would normally send data to a server
    console.log("Form Submitted:", { name, email, phone, query });
  
    response.textContent = "Thank you! Your query has been submitted.";
    response.style.color = "green";
  
    // Clear the form
    document.getElementById('contactForm').reset();
  });
  