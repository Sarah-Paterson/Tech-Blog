
async function createUser(event) {
  event.preventDefault();

  // Get the value of username
  const username = document.getElementById('signup-username').value.trim();

  // save username, and continue on to next step.
  const response = await fetch(`/api/users/signup/${username}`, {
    method: 'GET',
  });
  const res = await response.json();
  const data = await res;
}

document.getElementById('signup-btn').addEventListener('click', createUser);
