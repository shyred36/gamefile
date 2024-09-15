// Form validation function
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var game = document.getElementById('game').value;
    var platform = document.getElementById('platform').value;

    // Regular expression for email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate the fields
    if (username === '') {
        showMessage('Please enter your Gamer Name.');
    } else if (!emailPattern.test(email)) {
        showMessage('Please enter a valid email address.');
    } else if (game === '') {
        showMessage('Please select a game.');
    } else if (platform === '') {
        showMessage('Please select a platform.');
    } else {
        showMessage('Registration successful!', 'green');
        // this.submit(); // Uncomment this if you want to allow form submission after validation
    }
});

// Function to display messages
function showMessage(message, color = 'red') {
    var messageElement = document.getElementById('formMessage');
    messageElement.style.color = color;
    messageElement.textContent = message;
}
