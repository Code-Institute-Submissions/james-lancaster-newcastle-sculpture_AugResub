function sendMail(contactForm) {
    emailjs.send("service_i2fp6ip", "contact_form_newcastlesc", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_text": contactForm.messagetext.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILURE", error);
        }
    );
    return false;  // To block from loading a new page
}

// Modal 
$("#btnThanksModal").click(function(){
    if ($(this).hasClass('emailSent')) {
      $('#thanksModal').modal();
  });
