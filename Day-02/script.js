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
// Active navigation highlight while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});