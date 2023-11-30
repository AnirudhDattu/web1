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

var scrollToTopButton = document.getElementById("scrollToTopButton");

// Add a click event listener to the button
scrollToTopButton.addEventListener("click", function() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0, // Change this to 0
        behavior: "smooth"
    });
});


// -----------------------------------------------------------------------------------------------------------------

var helpLink = document.getElementById("helpLink");

// Add a click event listener to the help link
helpLink.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the top position of the footer
    var footerTop = document.getElementById("footer").offsetTop;

    // Scroll to the footer position smoothly
    window.scrollTo({
        top: footerTop,
        behavior: "smooth"
    });
});