const signupForm =
    document.querySelector("#signupForm");

const message =
    document.querySelector("#message");


signupForm.addEventListener("submit", function (e) {

    e.preventDefault();


    const username =
        document.querySelector("#username").value.trim();

    const password =
        document.querySelector("#password").value;

    const confirmPassword =
        document.querySelector("#confirmPassword").value;




    const existingAccount =
        localStorage.getItem("account");


    if (existingAccount) {

        message.textContent =
            "An account already exists. Please login.";

        message.className = "error";

        return;

    }





    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        message.className = "error";

        return;

    }





    if (
        username === "" ||
        password === ""
    ) {

        message.textContent =
            "Please fill in all fields.";

        message.className = "error";

        return;

    }





    const account = {

        username: username,

        password: password

    };





    localStorage.setItem(
        "account",
        JSON.stringify(account)
    );



    message.textContent =
        "✓ Account created successfully!";

    message.className = "success";





    setTimeout(() => {

        window.location.href =
            "login.html";

    }, 1000);

});