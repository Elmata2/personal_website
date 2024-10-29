// Initialize EmailJS
(function() {
  emailjs.init(nvGFGJd1uYf-aeNf0); // Replace "YOUR_USER_ID" with your EmailJS User ID
})();

// Add event listener to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Prepare the email parameters
  const emailParams = {
    from_name: this.fullname.value, // Maps to {{from_name}}
    reply_to: this.email.value,     // Maps to {{reply_to}}
    message: this.message.value     // Maps to {{message}}
  };

  // Send the form via EmailJS
  emailjs.send(service_5kckep6, template_h00ugka, emailParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Error: ' + JSON.stringify(error));
    });
});
