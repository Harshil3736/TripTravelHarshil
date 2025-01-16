document.getElementById("signup-button").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("signup-message");

    // Example email and password validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "" || !emailPattern.test(email) || password.length < 6) {
        alert("Please fill out all fields with valid information.");
        return;
    }

    // Mock account creation (replace with backend API in a real system)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    message.style.display = "block";
});
