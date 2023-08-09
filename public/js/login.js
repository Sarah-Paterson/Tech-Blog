const loginForm = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupForm = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#signup-username').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  }
};

const loginRedirect = async () => {
  document.location.replace('/login');
};

const signupRedirect = async () => {
  document.location.replace('/signup');
};


document.getElementById('signup-login-btn').addEventListener('click', loginRedirect);
document.getElementById('login-signup-btn').addEventListener('click', signupRedirect);
document.getElementById('login-btn').addEventListener('click', loginForm);
document.getElementById('signup-btn').addEventListener('click', signupForm);
