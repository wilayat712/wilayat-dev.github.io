
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// 1. MOBILE NAVIGATION

const menuButton =
    document.getElementById("menu-toggle");

const navigation =
    document.getElementById("main-nav");

menuButton.addEventListener("click", function() {

    navigation.classList.toggle("active");

    const isOpen =
        navigation.classList.contains("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuButton.textContent =
        isOpen ? "✕" : "☰";

});


// 2. CLOSE MENU AFTER CLICKING A LINK

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

        menuButton.textContent = "☰";

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// 3. DARK AND LIGHT MODE

const themeButton =
    document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    const lightMode =
        document.body.classList.contains("light-mode");

    themeButton.textContent =
        lightMode ? "🌙 Dark Mode" : "☀️ Light Mode";

});

// CONTACT FORM

const contactForm =
    document.getElementById("contact-form");

const formFeedback =
    document.getElementById("form-feedback");


contactForm.addEventListener("submit", function(event) {

    // Stop the normal form submission
    event.preventDefault();

    // Check whether all fields are valid
    if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;
    }

    // Get the visitor's message
    const visitorName =
        document.getElementById("visitor-name")
        .value.trim();

    // Show success feedback
    formFeedback.textContent =
        "Thank you, " + visitorName +
        "! Your form is valid.";

    formFeedback.className = "success";

    // Clear the form
    contactForm.reset();

});
