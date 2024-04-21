function validateForm() {
    let mobNumber = document.loginForm.mobNumber.value.trim();
    let password = document.loginForm.password.value.trim();

    let numberError = document.querySelector('#numberError');
    let passwordError = document.querySelector('#passwordError');

    if (mobNumber === "") {
        numberError.innerHTML = 'Please enter the mobile number';
        document.loginForm.mobNumber.focus();
        return false; // Prevent form submission
    }
    if (mobNumber.length !== 10) {
        numberError.innerHTML = 'Please enter a valid 10-digit mobile number';
        document.loginForm.mobNumber.focus();
        return false;
    }
    if (password === "") {
        passwordError.innerHTML = 'Please enter the password';
        document.loginForm.password.focus();
        return false;
    }

    // If all validation passes, allow form submission
    return true;
}

// Clear error messages when the user starts typing \\
document.addEventListener('DOMContentLoaded', function () {
    let mobilenumberInput = document.querySelector('input[name="mobNumber"]');
    let numberError = document.querySelector('#numberError');

    mobilenumberInput.addEventListener('input', function () {
        numberError.innerHTML = '';
    });
});
