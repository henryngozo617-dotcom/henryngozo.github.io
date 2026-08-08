// ===============================
// SIMPLE SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {

    observer.observe(section);

});


// ===============================
// WELCOME MESSAGE
// ===============================

console.log("Welcome to Henry Ngozo's website!");


// ===============================
// CURRENT YEAR
// ===============================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} Henry Ngozo. All Rights Reserved.`;

}