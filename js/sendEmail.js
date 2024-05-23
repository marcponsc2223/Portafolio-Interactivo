const btn = document.getElementById('button');
let sendEmailError = document.getElementById('sendEmailError')
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_b5tm61b';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      sendEmailError.style.display = 'block'
      sendEmailError.textContent = 'Message sent successfully.'
    }, (err) => {
      btn.value = 'Send Email';
      sendEmailError.textContent = 'Message has not been sent.'
    });
    setTimeout(() => {
        sendEmailError.style.display = 'none'
    }, 6000);
});