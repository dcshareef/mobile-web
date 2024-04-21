function validateForm() {
    let fullname = document.registerForm.fullname.value.trim();
    let mobNumber = document.registerForm.mobNumber.value.trim();
    let pinCode = document.registerForm.pinCode.value.trim();
    let state = document.registerForm.state.value.trim();
    let town = document.registerForm.town.value.trim();
    let district = document.registerForm.district.value.trim();
    let password = document.registerForm.password.value.trim();
    let password1 = document.registerForm.password1.value.trim();

    let fullnameError = document.querySelector('#fullnameError');
    let numberError = document.querySelector('#numberError');
    let pincodeError = document.querySelector('#pincodeError');
    let stateError = document.querySelector('#stateError');
    let townError = document.querySelector('#townError');
    let districtError = document.querySelector('#districtError');
    let passwordError = document.querySelector('#passwordError');
    let password1Error = document.querySelector('#password1Error');
    let agreeCheckbox = document.querySelector('#agreeCheckbox');
    let agreeError = document.querySelector('#agreeError');

    if (fullname === "") {
        fullnameError.innerHTML = 'Please enter the fullname';
        document.registerForm.fullname.focus();
        return false;
    }if (fullname.length <6) {
        fullnameError.innerHTML = 'fullname must contain atleast 6 characters';
        document.registerForm.fullname.focus();
        return false;
    }if (mobNumber === "") {
        numberError.innerHTML = 'Please enter the mobile number';
        document.registerForm.mobNumber.focus();
        return false;
    }if (mobNumber.length <10 || mobNumber.length >10) {
        numberError.innerHTML = 'please enter a valid number';
        document.registerForm.mobNumber.focus();
        return false;
    }if (pinCode === "") {
        pincodeError.innerHTML = 'Please enter the pincode';
        document.registerForm.pinCode.focus();
        return false;
    }if (state === "") {
        stateError.innerHTML = 'Please select the state';
        document.registerForm.state.focus();
        return false;
    }if (town === "") {
        townError.innerHTML = 'Please enter the town';
        document.registerForm.town.focus();
        return false;
    }if (district === "") {
        districtError.innerHTML = 'Please enter the district name';
        document.registerForm.district.focus();
        return false;
    }if (password === "") {
        document.registerForm.password.focus();
        return false;
    }if (password.length < 8) {
        passwordError.innerHTML = 'Password must be at least 8 characters';
        document.registerForm.password.focus();
        return false;
    }
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.innerHTML = 'Password must be at least 8 characters long, include at least letter, one number';
        document.registerForm.password.focus();
        return false;
    }if (password1 === "") {
        password1Error.innerHTML = 'Please confirm the password';
        document.registerForm.password1.focus();
        return false;
    }if (password !== password1) {
        password1Error.innerHTML = 'Password is not matching';
        document.registerForm.password1.focus();
        return false;
    }if (!agreeCheckbox.checked) {
        agreeError.innerHTML = 'Please agree to the terms';
        return false;
    }
    return true;
}

// Clear error messages when the user starts typing \\
document.addEventListener('DOMContentLoaded', function () {
    let fullnameInput = document.querySelector('input[name="fullname"]');
    let mobilenumberInput = document.querySelector('input[name="mobNumber"]');
    let pincodeInput = document.querySelector('input[name="pinCode"]');
    let stateInput = document.querySelector('input[name="state"]');
    let townInput = document.querySelector('input[name="town"]');
    let districtInput = document.querySelector('input[name="district"]');
    let passwordInput = document.querySelector('input[name="password"]');
    let password1Input = document.querySelector('input[name="password1"]');

    let fullnameError = document.querySelector('#fullnameError');
    let numberError = document.querySelector('#numberError');
    let pincodeError = document.querySelector('#pincodeError');
    let stateError = document.querySelector('#stateError');
    let townError = document.querySelector('#townError');
    let districtError = document.querySelector('#districtError');
    let passwordSuggestion = document.querySelector('#passwordSuggestion');
    let passwordError = document.querySelector('#passwordError');
    let password1Error = document.querySelector('#password1Error');

    fullnameInput.addEventListener('input', function () {
        fullnameError.innerHTML = '';
    });

    mobilenumberInput.addEventListener('input', function () {
        numberError.innerHTML = '';
    });

    pincodeInput.addEventListener('input', function () {
        pincodeError.innerHTML = '';
    });

    stateInput.addEventListener('input', function () {
        stateError.innerHTML = '';
    });

    townInput.addEventListener('input', function () {
        townError.innerHTML = '';
    });

    districtInput.addEventListener('input', function () {
        districtError.innerHTML = '';
    });

    passwordInput.addEventListener('input', function () {
        passwordError.innerHTML = '';
        passwordSuggestion.innerHTML = '';
    });

    password1Input.addEventListener('input', function () {
        password1Error.innerHTML = '';
    });
});