const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail == 'user@baap.com' && userPassword == 'amarami') {
        window.location.href = 'banking.html'
    }
    else {
        const loginError = document.getElementById('login-error');
        loginError.style.display = 'block';
        // alert('Please insert your valid email and password')
    }

})