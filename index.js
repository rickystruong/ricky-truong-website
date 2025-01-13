// Transition: Appear
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
        } 
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Navigation Bar
const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY){
        nav.classList.add("nav-hidden")
    }
    else{
        nav.classList.remove("nav-hidden")
    }
    lastScrollY = window.scrollY;
});

// Scroll Behavior at Top and Bottom of Page
document.body.addEventListener('touchstart', function(event) {
    if (window.scrollY === 0) {
        event.preventDefault();
    }
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        event.preventDefault();
    }
}, { passive: false });
