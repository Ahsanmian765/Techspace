function togglePassword() {
    const passwordField = document.getElementById("password");
    const showPasswordText = document.querySelector(".show-password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordText.textContent = "Hide";
    } else {
        passwordField.type = "password";
        showPasswordText.textContent = "Show";
    }
}

document.getElementById("register-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission for validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert(`Registration successful!\n\nName: ${name}\nEmail: ${email}`);
        // Clear the input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    } else {
        alert("Please fill in all fields.");
    }
});