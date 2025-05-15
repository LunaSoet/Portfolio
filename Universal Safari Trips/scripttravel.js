document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const emailInput = document.getElementById('newsletterEmail');
    const messageDiv = document.getElementById('newsletterMessage');

    // Simple email validation
    if (emailInput.value) {
        messageDiv.textContent = 'Thank you for subscribing!';
        messageDiv.style.color = 'green';
        emailInput.value = ''; // Clear the input field
    } else {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red';
    }
});