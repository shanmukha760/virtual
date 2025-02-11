class AuthManager {
    constructor() {
        // Load users from localStorage or initialize with default users
        this.users = JSON.parse(localStorage.getItem('users')) || [
            { username: 'admin', password: 'password', role: 'admin' },
            { username: 'maha', password: 'kiddo', role: 'student' }
        ];
    }

    register(fullName, email, username, password) {
        const userExists = this.users.some(u => u.username === username);
        if (userExists) {
            return {
                success: false,
                message: 'Username already exists.'
            };
        }

        // Add the new user to the users array
        this.users.push({ fullName, email, username, password, role: 'student' });

        // Save users to localStorage
        localStorage.setItem('users', JSON.stringify(this.users));

        return {
            success: true,
            message: 'Registration successful! Redirecting to login page...'
        };
    }

    login(username, password) {
        const user = this.users.find(u => 
            u.username === username && u.password === password
        );

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return {
                success: true, 
                role: user.role,
                message: 'Login Successful'
            };
        }

        return {
            success: false,
            message: 'Invalid Credentials'
        };
    }

    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

const authManager = new AuthManager();
export default authManager;