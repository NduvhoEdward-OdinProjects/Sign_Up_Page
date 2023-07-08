let password = document.getElementById("password");
let comfirmPassword = document.getElementById("comfirmPassword");
let passwordFields = document.querySelectorAll(".passwords input");
let mismatchMsg = document.querySelector("form .passwords .passwordMismatchMsg p");

comfirmPassword.addEventListener("input", function(event){
    if (comfirmPassword.value==="") {
        mismatchMsg.classList.remove("showMismatchMsg")
        mismatchMsg.classList.add("hideMismatchMsg")
        return;
    }
    if (comfirmPassword.value != password.value) {
        mismatchMsg.classList.remove("hideMismatchMsg")
        mismatchMsg.classList.add("showMismatchMsg")

        password.classList.add("passwordMismatch");
        password.classList.remove("passwordMatch");
        comfirmPassword.classList.add("passwordMismatch");
        comfirmPassword.classList.remove("passwordMatch");
    } else {
        mismatchMsg.classList.remove("showMismatchMsg")
        mismatchMsg.classList.add("hideMismatchMsg")

        password.classList.remove("passwordMismatch");
        password.classList.add("passwordMatch");
        comfirmPassword.classList.remove("passwordMismatch");
        comfirmPassword.classList.add("passwordMatch");

    }
});

