document.getElementById("togglePass").addEventListener("click", function () {
    const passField = document.getElementById("password");
    if (passField.type === "password") {
        passField.type = "text";
        this.textContent = "Hide";
    } else {
        passField.type = "password";
        this.textContent = "Show";
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");

    let isValid = true;

    // Email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
        emailError.classList.remove("d-none");
        isValid = false;
    } else {
        emailError.classList.add("d-none");
    }

    // Password validation
    if (!pass) {
        passError.classList.remove("d-none");
        isValid = false;
    } else {
        passError.classList.add("d-none");
    }

    if (isValid) {
        // Hardcoded login example (you can replace with backend API)
        if (email === "admin@gmail.com" && pass === "admin123") {
            window.location.href = "admin-dashboard.html";
        } else {
            alert("Incorrect login details!");
        }
    }
});
