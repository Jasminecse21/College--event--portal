// Registration Form Validation

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {

    registrationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const department = document.getElementById("department").value.trim();
        const year = document.getElementById("year").value;
        const eventName = document.getElementById("event").value;

        const message = document.getElementById("formMessage");

        if (
            name === "" ||
            email === "" ||
            mobile === "" ||
            department === "" ||
            year === "" ||
            eventName === ""
        ) {
            message.textContent = "Please fill in all required fields.";
            message.style.color = "red";
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            message.textContent = "Please enter a valid 10-digit mobile number.";
            message.style.color = "red";
            return;
        }

        message.textContent =
            "Registration successful! Thank you, " + name + ".";

        message.style.color = "green";

        registrationForm.reset();
    });
}


// Contact Form

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const messageText = document.getElementById("message").value.trim();

        const result = document.getElementById("contactMessage");

        if (name === "" || email === "" || messageText === "") {
            result.textContent = "Please fill in all fields.";
            result.style.color = "red";
            return;
        }

        result.textContent = "Your message has been sent successfully!";
        result.style.color = "green";

        contactForm.reset();
    });
}


// Event Category Filter

function filterEvents() {

    const selectedCategory =
        document.getElementById("category").value;

    const events =
        document.querySelectorAll(".event-card");

    events.forEach(function(event) {

        const category =
            event.getAttribute("data-category");

        if (
            selectedCategory === "all" ||
            category === selectedCategory
        ) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }
    });
}