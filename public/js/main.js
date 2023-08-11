const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');

const mainRedirect = async () => {
    document.location.replace('/');
};

const dashboardRedirect = async () => {
    document.location.replace('/dashboard');
};

const loginRedirect = async () => {
  document.location.replace('/login');
};

const signupRedirect = async () => {
  document.location.replace('/signup');
};

document.querySelector('.home-btn').addEventListener('click', mainRedirect);
document.querySelector('.dashboard-btn').addEventListener('click', dashboardRedirect);
signupBtn.addEventListener('click', signupRedirect);
loginBtn.addEventListener('click', loginRedirect);
