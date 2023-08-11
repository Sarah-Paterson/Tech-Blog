const signupBtn = document.querySelector('.signup-btn');

const signupRedirect = async () => {
    document.location.replace('/signup');
};
  
signupBtn.addEventListener('click', signupRedirect);