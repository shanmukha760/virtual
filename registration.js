import authManager from './auth.js';

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation
    if (!fullName || !email || !username || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Register the user
    const result = authManager.register(fullName, email, username, password);

    if (result.success) {
        alert(result.message);
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert(result.message);
    }
});