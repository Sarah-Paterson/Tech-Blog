const newPostForm = async (event) => {
    event.preventDefault();
    console.log('clicked!');

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/users/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post.');
      }
    }
};

document.getElementById('new-post-submit-btn').addEventListener('click', newPostForm);

const cancelRedirect = async () => {
    document.location.replace('/dashboard');
};

document.getElementById('new-post-cancel-btn').addEventListener('click', cancelRedirect);