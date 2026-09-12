const loginForm = document.querySelector("#loginForm");

const message = document.querySelector("#message");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username =
        document.querySelector("#username").value.trim();

    const password =
        document.querySelector("#password").value;

    const account =
        JSON.parse(localStorage.getItem("account"));

    if (!account) {

        message.textContent =
            "No account found. Please sign up first.";

        message.className = "error";

        return;
    }

    if (
        username === account.username &&
        password === account.password
    ) {

        message.textContent =
            "✓ Login successful!";

        message.className = "success";

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        setTimeout(() => {

            window.location.href =
                "dashboad.html";

        }, 800);

    }

    else {

        message.textContent =
            "Incorrect username or password.";

        message.className = "error";

    }

});
