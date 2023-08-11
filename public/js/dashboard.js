const newPostRedirect = async () => {
    document.location.replace('/dashboard/new-post');
};

document.getElementById('new-post-btn').addEventListener('click', newPostRedirect);