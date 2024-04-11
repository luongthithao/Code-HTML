var emailSignUp = document.querySelector(".input-signup-username");
var passSignUp = document.querySelector(".input-signup-password");
var btnSignUp = document.querySelector(".signup__signInButton");

btnSignUp.addEventListener("click", function () {
    if (emailSignUp.value === "" || passSignUp.value === ""){
        alert("Please enter email or password!!");

    }
    else{
        var user = {
            email: emailSignUp.value,
            password: passSignUp.value 
        }
    }
    let jsonUser = JSON.stringify(user);
    localStorage.setItem(emailSignUp.value, jsonUser);

        
})


































// validation form register and register user local storage
// const inputUsernameRegister = document.querySelector(".input-signup-username");
// const inputPasswordRegister = document.querySelector(".input-signup-password");
// const btnRegister = document.querySelector(".signup_signInButton");

// // validation form register and register user local storage

// btnRegister.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//         inputUsernameRegister.value === "" ||
//         inputPasswordRegister.value === ""
//     ) {
//         alert("Please enter username or password");
//     } else {
//         // array user
//         const user = {
//             username: inputUsernameRegister.value,
//             password: inputPasswordRegister.value,
//         };
//         let json = JSON.stringify(user);
//         localStorage.setItem(inputUsernameRegister.value, json);
//         window.location.href = "login.html";
//     }
// });