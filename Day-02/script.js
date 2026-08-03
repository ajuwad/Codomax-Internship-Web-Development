// Select webpage elements using the DOM
const aboutButton = document.getElementById("aboutButton");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const scrollTopButton = document.getElementById("scrollTopButton");

// Button event: display a message when the About button is clicked
aboutButton.addEventListener("click", function () {
    console.log("Know More About Me button clicked");
});

// ==========================
// DAY 10 - FORM VALIDATION
// ==========================

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

function showError(input, errorElement, message) {
    input.classList.add("input-error");
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove("input-error");
    errorElement.textContent = "";
}

function isValidEmail(email) {
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const subjectValue = subjectInput.value.trim();
    const messageValue = messageInput.value.trim();

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(subjectInput, subjectError);
    clearError(messageInput, messageError);

    formMessage.textContent = "";
    formMessage.className = "";

    if (nameValue.length < 3) {
        showError(
            nameInput,
            nameError,
            "Please enter at least 3 characters."
        );

        formIsValid = false;
    }

    if (!isValidEmail(emailValue)) {
        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        formIsValid = false;
    }

    if (subjectValue.length < 3) {
        showError(
            subjectInput,
            subjectError,
            "Please enter a valid subject."
        );

        formIsValid = false;
    }

    if (messageValue.length < 10) {
        showError(
            messageInput,
            messageError,
            "The message must contain at least 10 characters."
        );

        formIsValid = false;
    }

    if (!formIsValid) {
        formMessage.textContent =
            "Please correct the errors before submitting.";

        formMessage.className = "form-failure";
        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";

    formMessage.className = "form-success";

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