const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

const confirm_password = document.getElementById("confirm-password");
const confirm_passwordError = document.querySelector("#confirm-password + span.error");

const finalError = document.querySelector(".submit-btn + .error");

const allowedCountries = ["United States", "Canada", "Australia", "India"];
const zipPattern = /^[0-9]{5}(-[0-9]{4})?$/;


email.addEventListener("input", (event) => {
    if(email.validity.valid){
        emailError.textContent = "";
    }else{
        showEmailError();
    }
})

country.addEventListener("input", (event) => {
    if(country.validity.valid && allowedCountries.includes(country.value)){
        countryError.textContent = "";
    }else{
        showCountryError();
    }
})

zip.addEventListener("input", (event) => {
    if(zip.validity.valid && zipPattern.test(zip.value)){
        zipError.textContent = "";
    }else{
        showZipError();
    }
})

password.addEventListener("input", (event) => {
    if(password.validity.valid){
        passwordError.textContent = "";
    }else{
        showPasswordError();
    }
})


confirm_password.addEventListener("input", (event) => {
    if(confirm_password.validity.valid && confirm_password.value === password.value){
        confirm_passwordError.textContent = "";
    }else{
        showConfirmPasswordError();
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(!email.validity.valid || !country.validity.valid || !zip.validity.valid || !password.validity.valid || !confirm_password.validity.valid){
        showError();
    }else{
        finalError.textContent = "";
    }
})

function showError(){
    finalError.textContent = "There are errors in the form, please resolve them.";
}

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
    }
}

function showCountryError(){
    if(country.validity.valueMissing){
        countryError.textContent = "You need to enter a country.";
    }else if(!allowedCountries.includes(country.value)){
        countryError.textContent = "Please enter a valid country.";
    }
}

function showZipError(){
    if(zip.validity.valueMissing){
        zipError.textContent = "You need to enter a zip code.";
    }else if(!zipPattern.test(zip.value)) {
        zipError.textContent = "Please enter a valid zip code.";
    }
}

function showPasswordError(){
    if(password.validity.valueMissing){
        passwordError.textContent = "You need to enter the password.";
    }else if(password.validity.tooShort){
        passwordError.textContent = "Password is too short.";
    }
}

function showConfirmPasswordError(){
    if(confirm_password.validity.valueMissing){
        confirm_passwordError.textContent = "You need to enter the password to confirm.";
    }else if(confirm_password.value !== password.value){
        confirm_passwordError.textContent = "Passwords don't match."
    }
}

