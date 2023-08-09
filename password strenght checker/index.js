// Variables
const show_pass = document.querySelector('.show-pass');
const password_input = document.querySelector('.password-input');
const list_item = document.querySelectorAll('.list-item');

// Show password toggle
show_pass.addEventListener('click', () => {
    show_pass.classList.toggle('fa-eye');
    show_pass.classList.toggle('fa-eye-slash');

    password_input.type = password_input.type === 'password' ? 'text' : 'password';
});

// validation requirements
const validationRegex = [
    /.{8,}/,      // min 8 letters
    /[0-9]/,      // numbers from 0-9
    /[a-z]/,      // letters from a-z (lowercase)
    /[A-Z]/,      // letters from A-Z (uppercase)
    /[^A-Za-z0-9]/ // special chars
];

// keyup: to capture user input through the keyboard
password_input.addEventListener('keyup', () => {
    validationRegex.forEach((regex, i) => {
        let isValid = regex.test(password_input.value);
        if (isValid) {
            list_item[i].classList.add('checked');
        } else {
            list_item[i].classList.remove('checked');
        }
    });
});


const card = document.querySelector(".card");
const flipToBackBtn = document.getElementById("flip-card-btn-turn-to-back");
const flipToFrontBtn = document.getElementById("flip-card-btn-turn-to-front");

flipToBackBtn.addEventListener("click", () => {
    card.classList.add("flipped");
});

flipToFrontBtn.addEventListener("click", () => {
    card.classList.remove("flipped");
});
