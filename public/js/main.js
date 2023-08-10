const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const logoutBtn = document.querySelector('.logout-btn');

const auth = (req, res, next) => {
    if (req.session.loggedIn) {
        loginBtn.classList.add('is-hidden');
        signupBtn.classList.add('is-hidden');
    } else {
        logoutBtn.classList.add('is-hidden');
    }
};

const mainRedirect = async () => {
    document.location.replace('/');
};

const dashboardRedirect = async () => {
    document.location.replace('/dashboard-main');
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