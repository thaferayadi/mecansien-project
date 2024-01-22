function verification() {
    // Reset error messages
    resetErrorMessages();

    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    var numTelInput = document.getElementById('numTel');
    var locationInput = document.getElementById('location');
    var messageInput = document.getElementById('message');

    var emailValue = emailInput.value.trim();
    var passwordValue = passwordInput.value.trim();
    var numTelValue = numTelInput.value.trim();
    var locationValue = locationInput.value.trim();
    var messageValue = messageInput.value.trim();

    // Check if the fields are empty or do not meet specific criteria
    if (!isValidEmail(emailValue)) {
        showError('emailError', 'Veuillez saisir une adresse email valide.');
    }
    if (passwordValue === '' || passwordValue.length < 8) {
        showError('passwordError', 'Le mot de passe doit avoir au moins 8 caractères.');
    }
    if (!isValidPhoneNumber(numTelValue)) {
        showError('numTelError', 'Veuillez saisir un numéro de téléphone valide (10 chiffres).');
    }
    if (locationValue === '') {
        showError('locationError', 'Veuillez saisir une location.');
    }
    if (messageValue === '') {
        showError('messageError', 'Veuillez saisir un message.');
    }

    // If no errors, proceed with further actions
    if (document.querySelectorAll('.error').length === 0) {
        alert('Champs corrects !');
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    return /^[0-9]{10}$/.test(phoneNumber);
}

function showError(id, message) {
    var errorSpan = document.getElementById(id);
    errorSpan.innerHTML = message;
}

function resetErrorMessages() {
    var errorSpans = document.querySelectorAll('.error');
    errorSpans.forEach(function (span) {
        span.innerHTML = '';
    });
}

function supprimer() {
    // Clear form fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('numTel').value = '';
    document.getElementById('location').value = '';
    document.getElementById('message').value = '';

    // Reset error messages
    resetErrorMessages();

    alert('Form cleared!');
}
