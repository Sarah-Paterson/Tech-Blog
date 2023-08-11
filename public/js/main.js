const mainRedirect = async () => {
    document.location.replace('/');
};

document.querySelector('.home-btn').addEventListener('click', mainRedirect);
