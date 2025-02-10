
document.getElementById("myForm").addEventListener("submit", function(event) {
    let isValid = true;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    }
    if (!isValid) {
        event.preventDefault();
    }
});
