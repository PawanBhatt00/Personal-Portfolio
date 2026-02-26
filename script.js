

document.addEventListener("DOMContentLoaded", () => {

    // Set current year in footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Function to handle project click (optional)
    window.showProject = function(name) {
        alert("You clicked on: " + name);
    };

    //  Contact form handling
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent page reload

            // Gather form values
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            // Validate inputs
            if (!name || !email || !message) {
                alert("Please fill all fields!");
                return;
            }

            // Create data object
            const formData = {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            };

            // Get previous submissions from localStorage
            const submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];

            // Add new submission
            submissions.push(formData);

            // Save back to localStorage
            localStorage.setItem("formSubmissions", JSON.stringify(submissions));

            // Reset form
            form.reset();

            // Feedback
            alert("Message saved successfully!");
        });
    }

});