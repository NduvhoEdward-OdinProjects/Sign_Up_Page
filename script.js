let password = document.getElementById("password");
let comfirmPassword = document.getElementById("comfirmPassword");
let passwordMismatchMsg = document.getElementById("passwordMismatchMsg");

comfirmPassword.addEventListener("input", function(event){
    if (comfirmPassword.value != password.value) {
        console.log(event);
        passwordMismatchMsg.style.display = 'block';
    } else {
        passwordMismatchMsg.style.display = 'none';
    }
})