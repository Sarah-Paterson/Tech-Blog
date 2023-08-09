async function signIn(event) {
  event.preventDefault();

  // Get the state of elements
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();


  // If everything looks good, send the data to try to log in. Otherwise display error
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Something unexpected happened');
    }
  } else {
    alert('Invalid input');
  }
}

console.log(document.location.origin);
document.getElementById('login-btn').addEventListener('click', signIn);
