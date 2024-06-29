document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data to a server
    } else {
        alert('Please fill in all fields.');
    }
});
