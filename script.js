document.getElementById("login-button").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email.";
        errorMessage.style.display = "block";
    } else if (password !== "harshil3736") {
        errorMessage.textContent = "Incorrect password.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        window.location.href = "Home.html";
    }
});
