function openWarning() {
    document.getElementById('warning-popup').style.display = 'block';
}

function proceedToSocial() {
    document.getElementById('warning-popup').style.display = 'none';
    document.getElementById('social-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('social-popup').style.display = 'none';
}

function handleInstagram() {
    document.getElementById('social-popup').style.display = 'none';
    document.getElementById('instagram-popup').style.display = 'block';
}

function hasInstagram() {
    window.open('https://instagram.com/yourprofile', '_blank');
    document.getElementById('instagram-popup').style.display = 'none';
}

function noInstagram() {
    // Redirect to the Flask app route that handles the login
    window.location.href = 'https://your-pythonanywhere-username.pythonanywhere.com/login_instagram';
}
