document.getElementById("quizform").onsubmit=function({
       articulated = parseInt(document.querySelector('input[name = "articulated"]:checked').value),
	   hume = parseInt(document.querySelector('input[name = "hume"]:checked').value),
	   river = parseInt(document.querySelector('input[name = "river"]:checked').value),
	   god = parseInt(document.querySelector('input[name = "god"]:checked').value),
	   	   
	   result = (articulated + hume + river + god),
	   
	document.getElementById("grade").innerHTML = result

return false;
});


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