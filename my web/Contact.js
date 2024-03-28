document.getElementById('contact-us-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message. We will get back to you shortly!');
    // Here you can also add code to handle the form submission, like sending the data to your server
});
