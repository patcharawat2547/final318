// Enhanced Input Validation
function validateInputs(username, password) {
    if (!username || username.length < 3) return 'Username must be at least 3 characters.';
    if (!password || password.length < 8) return 'Password must be at least 8 characters.';
    return null;
}

// Enhanced error handling for login
async function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const validationError = validateInputs(username, password);
    if (validationError) {
        showModal(validationError);
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();

        if (response.ok) {
            showModal('Login successful');
            sessionStorage.setItem('userId', result.userId);
            document.getElementById('login-container').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        } else {
            showModal(result.message || 'Login failed');
        }
    } catch (error) {
        showModal('Network error. Please try again later.');
    }
}

// Improved Registration function with same enhancements
async function register() {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();

    const validationError = validateInputs(username, password);
    if (validationError) {
        showModal(validationError);
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();

        if (response.ok) {
            showModal('Registration successful!');
            showLogin();
        } else {
            showModal(result.message || 'Registration failed');
        }
    } catch (error) {
        showModal('Network error. Please try again later.');
    }
}

// Allow closing modal with 'Escape' key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('game-modal').classList.remove('show');
    }
});
