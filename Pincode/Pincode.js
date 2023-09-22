// Define the correct PIN code
const correctPIN = "1234"; // Change this to your desired PIN

// Get form and message elements
const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const message = document.getElementById("message");

// Add an event listener to the form for PIN submission
pinForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const enteredPIN = pinInput.value;

    if (enteredPIN === correctPIN) {
        // Redirect to your main website page or unlock the content
        window.location.href = "main.html"; // Replace "main.html" with your actual main page URL
    } else {
        // Display an error message
        message.textContent = "Incorrect PIN. Please try again.";
        pinInput.value = ""; // Clear the input field
    }
});
