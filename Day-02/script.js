// Select webpage elements using the DOM
const aboutButton = document.getElementById("aboutButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const scrollTopButton = document.getElementById("scrollTopButton");

// Button event: display a message when the About button is clicked
aboutButton.addEventListener("click", function () {
    console.log("Know More About Me button clicked");
});

// Contact form event and DOM manipulation
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been received successfully.";

    formMessage.classList.add("success-message");

    contactForm.reset();
});

// Show or hide the scroll-to-top button
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
});

// Scroll smoothly to the top when clicked
scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});