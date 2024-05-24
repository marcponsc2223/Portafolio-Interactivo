const btn = document.getElementById('button');
var sendEmailError = document.getElementById('sendEmailError')
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_b5tm61b';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      sendEmailErrorFunc('Message sent successfully.')
    }, (err) => {
      sendEmailErrorFunc('Message has not been sent.')
    });
    hideEmailError()
});


function sendEmailErrorFunc(err) {
  sendEmailError.style.display = 'block'
  sendEmailError.textContent = err
}

function hideEmailError() {
  setTimeout(() => {
    sendEmailError.style.display = 'none'
}, 6000);
}