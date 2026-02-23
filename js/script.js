// DOM READY

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU TOGGLE

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // STICKY NAVBAR (Optimized)

    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("sticky", window.scrollY > 50);
        });
    }

    // SMOOTH SCROLL

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // SIMPLE FORM VALIDATION + SUCCESS

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // prevent default first

            const inputs = form.querySelectorAll("input[required], textarea[required]");
            let valid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    valid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (!valid) {
                alert("Please fill all required fields!");
            } else {
                alert("Form submitted successfully!");
                form.reset();
            }
        });
    }

    // SCROLL ANIMATION FOR CARDS

    const cards = document.querySelectorAll(".card");

    if (cards.length > 0) {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, {
            threshold: 0.2
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

});