const signUpForm = document.querySelector('#signUpForm')
signUpForm.addEventListener("submit", event => {
    event.preventDefault()
    const contactForm = event.target;

    emailjs.send("service_i2fp6ip", "contact_form_newcastlesc", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_text": contactForm.messagetext.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            // Modal to acknowledge receipt of message
            $(".acknowledgement-message").text("Thanks for being in touch " + contactForm.name.value)
            $("#acknowledgementModal").modal("toggle");
        },
        function(error) {
            console.log("FAILED", error);
        })
        return false;  // To block from loading a new page
});