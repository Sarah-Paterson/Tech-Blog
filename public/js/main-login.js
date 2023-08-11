const loginBtn = document.querySelector('.login-btn');

const loginRedirect = async () => {
    document.location.replace('/login');
};
  
loginBtn.addEventListener('click', loginRedirect);