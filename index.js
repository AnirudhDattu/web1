function validate(event) {
    event.preventDefault();
    const emailInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);

    if (emailValue !== 'anirudh' || passwordValue !== '111') {
        alert('Invalid email or password');
        return false;
    }

    console.log('Redirecting to home.html');
    // Redirect to another page on successful login
    window.location.href = 'home.html';
}

const submitButton = document.querySelector('.login__submit');
submitButton.addEventListener('click', validate);