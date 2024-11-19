document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("77y65xV8Gy5EZfy6M"); // Replace with your EmailJS user ID

    const submitButton = document.querySelector('.submit-button');
    submitButton.addEventListener('click', function() {
        const emailInput = document.querySelector('.email-input').value;
        const subjectInput = document.querySelector('.subject-input').value;
        const messageInput = document.querySelector('.message-input').value;

        if (emailInput && subjectInput && messageInput) {
            emailjs.send("service_har5yiy", "template_7g60x8s", {
                to_email: "brandon.c.wendell@gmail.com",
                from_email: emailInput,
                subject: subjectInput,
                message: messageInput
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again later.');
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
});