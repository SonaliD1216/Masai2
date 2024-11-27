document.addEventListener("DOMContentLoaded", function() {
    // Get form elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    
    // Get error message elements
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    
    // Function to validate Name (cannot be empty)
    function validateName() {
        if (nameInput.value.trim() === "") {
            nameError.style.display = "block"; // Show error
        } else {
            nameError.style.display = "none"; // Hide error
        }
    }

    // Function to validate Email (must be valid format)
    function validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = "block"; // Show error
        } else {
            emailError.style.display = "none"; // Hide error
        }
    }

    // Function to validate Password (at least 8 characters)
    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block"; // Show error
        } else {
            passwordError.style.display = "none"; // Hide error
        }
    }

    // Event listeners for real-time validation
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    
    // Event listeners for blur (when user clicks away from input field)
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    passwordInput.addEventListener("blur", validatePassword);

    // Form submission validation
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", function(event) {
        // Prevent form submission if there are any validation errors
        validateName();
        validateEmail();
        validatePassword();
        
        if (nameError.style.display === "block" || emailError.style.display === "block" || passwordError.style.display === "block") {
            event.preventDefault(); // Prevent form submission
            alert("Please correct the errors before submitting the form.");
        }
    });
});
