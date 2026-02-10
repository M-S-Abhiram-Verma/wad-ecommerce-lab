/* document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobile = document.getElementById("mobile").value;

    // Reset error messages
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("mobileError").style.display = "none";

    let isValid = true;

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu)$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
        document.getElementById("mobileError").style.display = "block";
        isValid = false;
    }

    // Show success message if all validations pass
    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
        setTimeout(function() {
            window.location.href = "login.html"; // Redirect to login page
        }, 2000); // Redirect after 2 seconds
    }
}); */

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
    const mobileInput = document.getElementById("mobile");
    const mobileError = document.getElementById("mobileError");
    const successMessage = document.getElementById("successMessage");

    // Email Validation (Real-time)
    emailInput.addEventListener("input", function () {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com)$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    });

    // Password Match Validation (Real-time)
    confirmPasswordInput.addEventListener("input", function () {
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    });

    // Mobile Number Validation (Real-time)
    mobileInput.addEventListener("input", function () {
        if (mobileInput.value.length !== 10 || isNaN(mobileInput.value)) {
            mobileError.style.display = "block";
        } else {
            mobileError.style.display = "none";
        }
    });

    // Form Submission Handling
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (
            emailError.style.display === "none" &&
            passwordError.style.display === "none" &&
            mobileError.style.display === "none"
        ) {
            successMessage.style.display = "block";
            setTimeout(function () {
                window.location.href = "login.html";
            }, 2000);
        }
    });
});
