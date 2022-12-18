let loginContainer = document.getElementById("loginContainer");
let signUpContainer = document.getElementById("signUpContainer");
let forgotContainer = document.getElementById("forgotContainer");


const createAccountLinkId = document.getElementById("createAccountLinkId");
const forgotLinkId = document.getElementById("forgotLinkId");
const havingAccountLinkId = document.getElementById("havingAccountLinkId");
const backLinkId = document.getElementById("backLinkId");


// loginForm 

createAccountLinkId.addEventListener("click", function () {
    loginContainer.classList.add("hiddenForm");
    signUpContainer.classList.remove("hiddenForm");
    forgotContainer.classList.add("hiddenForm");
})

forgotLinkId.addEventListener("click", function () {
    loginContainer.classList.add("hiddenForm");
    signUpContainer.classList.add("hiddenForm");
    forgotContainer.classList.remove("hiddenForm");
})

// SignUpForm 

havingAccountLinkId.addEventListener("click", function () {
    loginContainer.classList.remove("hiddenForm");
    signUpContainer.classList.add("hiddenForm");
    forgotContainer.classList.add("hiddenForm");
})

// ForgotForm 

backLinkId.addEventListener("click", function () {
    loginContainer.classList.remove("hiddenForm");
    signUpContainer.classList.add("hiddenForm");
    forgotContainer.classList.add("hiddenForm");
})