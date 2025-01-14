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
function getScrollThreshold(){
    const screenHeight = window.innerHeight;
    if(screenHeight < 600){
        return 25;
    }
    else if (screenHeight < 1000){
        return 50;
    }
    else{
        return 150;
    }
}

const nav = document.querySelector(".nav");
let threshold = getScrollThreshold();
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    threshold = getScrollThreshold();
    if(Math.abs(lastScrollY - window.scrollY) < threshold){
        return;
    }
    if(lastScrollY < window.scrollY){
        nav.classList.add("nav-hidden")
    }
    else{
        nav.classList.remove("nav-hidden")
    }
    lastScrollY = window.scrollY;
});
