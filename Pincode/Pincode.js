// Get form and message elements
const pinForm = document.getElementById("pinForm");
const usernameInput = document.getElementById("usernameInput");
const pinInput = document.getElementById("pinInput");
const registrationModeInput = document.getElementById("registrationMode");
const message = document.getElementById("message");

// Function to store user data in local storage
function storeUserData(username, pin) {
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    userData[username] = pin;
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Function to retrieve user data from local storage
function retrieveUserData() {
    return JSON.parse(localStorage.getItem('userData')) || {};
}

// Add an event listener to the form for PIN submission
pinForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const username = usernameInput.value;
    const enteredPIN = pinInput.value;
    const registrationMode = registrationModeInput.value === "true";

    if (registrationMode) {
        // Registration mode: Create a new username and PIN
        const userData = retrieveUserData();

        if (userData[username]) {
            message.textContent = "Registration Successful! You can now use your existing PIN to log in.";
            pinInput.value = ""; // Clear the input field
        } else {
            storeUserData(username, enteredPIN);
            message.textContent = "Registration Successful! You can now use your new PIN to log in.";
            pinInput.value = ""; // Clear the input field
            registrationModeInput.value = "false"; // Switch back to login mode
        }
    } else {
        // Login mode: Check if the username and PIN match
        const userData = retrieveUserData();
        const storedPIN = userData[username];

        if (storedPIN === enteredPIN) {
            message.textContent = "Login Successful!";
            // Redirect to your main website page or unlock the content
            window.location.href = "main.html"; // Replace "main.html" with your actual main page URL
        } else {
            message.textContent = "Incorrect username or PIN. Please try again.";
            pinInput.value = ""; // Clear the input field
        }
    }
});
