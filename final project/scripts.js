// Function to reveal more content
function revealMore(button) {
    const hiddenContent = button.nextElementSibling;
    hiddenContent.classList.toggle('show');
}

// Form validation
function validateForm(event) {
    event.preventDefault();

    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Reset previous error messages
    document.querySelectorAll('.error').forEach(e => e.style.display = 'none');

    // Name validation
    if (!name.value) {
        document.getElementById("nameError").style.display = 'block';
        isValid = false;
    }

    // Email validation
    if (!email.value || !validateEmail(email.value)) {
        document.getElementById("emailError").style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (!message.value) {
        document.getElementById("messageError").style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can process the form submission here, e.g., send an email or API call.
    }
}

// Simple email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
