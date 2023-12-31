const form = document.querySelector("form");

function errorMsg(field, errorText) {
    field.classList.add("error");

    var errorElement = document.createElement("small");
        errorElement.classList.add("error-text");
        errorElement.innerText = errorText;
    field.closest(".form-block").appendChild(errorElement);
}


function validateForm(e) {
    e.preventDefault();

    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();


    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

    var errorFields = document.querySelectorAll(".form-block .error");
        errorFields.forEach(function (field) {
            field.classList.remove("error");
        });

    var errorTexts = document.querySelectorAll(".error-text");
        errorTexts.forEach(function (errorText) {
            errorText.remove();
        });

    var errorSpans = document.querySelectorAll(".error-icon");
        errorSpans.forEach(function (field) {
            field.remove();
        });


    if(firstName === ""){
        errorMsg(firstNameInput, "First Name cannot be empty");
    }

    if(lastName === ""){
        errorMsg(lastNameInput, "Last Name cannot be empty");
    }

    if(!emailPattern.test(email)){
        errorMsg(emailInput, "Look like this is not an email");
    }

    if(password === ""){
        errorMsg(passwordInput, "Password cannot be empty");
    }

    var checkErrors = document.querySelectorAll(".form-block .error");
    if(checkErrors.length !== 0){
        return;
    }

    form.submit();
}

form.addEventListener("submit", validateForm);
