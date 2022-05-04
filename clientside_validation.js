


const pconfirm = document.querySelector('input[name="confirmPassword"]');
const password = document.querySelector('input[name="password"]');


const confirmPassword = () => {
    const error = document.querySelector(".error-confirm")

    if(pconfirm.value !== password.value) {
        pconfirm.style.border = "2px solid red";

        error.textContent = "* Passwords do not match";
        error.style.color = "red";
    } else { 
        error.textContent = " "; 
        pconfirm.style.border = ".5px solid gray";
    }
}
pconfirm.addEventListener("blur", confirmPassword);

