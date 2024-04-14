document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create an object to store feedback data
        const feedbackData = {
            name: name,
            email: email,
            message: message
        };

        // Convert feedbackData object to JSON string
        const feedbackDataJSON = JSON.stringify(feedbackData);

        // Store feedbackDataJSON in local storage
        localStorage.setItem('feedbackData', feedbackDataJSON);

        // Reset form inputs
        form.reset();

        // Display success message or perform any other actions
        alert('Feedback submitted successfully!');
    });
});
