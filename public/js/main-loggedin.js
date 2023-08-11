const dashboardRedirect = async () => {
    document.location.replace('/dashboard');
};

document.querySelector('.dashboard-btn').addEventListener('click', dashboardRedirect);