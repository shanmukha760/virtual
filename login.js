import authManager from './auth.js';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const result = authManager.login(username, password);
    
    if (result.success) {
        window.location.href = 'dashboard.html';
    } else {
        alert(result.message);
    }
});