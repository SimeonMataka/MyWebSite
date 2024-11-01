
var typed = new Typed(".text", {
    strings: ["Networking","Programming" , "Cybersecurity" , "Web Development", "Machine Learning", "Systems Development"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:500,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    function activateLink(link) {
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        link.classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            activateLink(link);
        });
    });

    function onScroll() {
        let currentSection = sections[0];
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section;
            }
        });

        const currentLink = document.querySelector(`.navbar a[href="#${currentSection.id}"]`);
        activateLink(currentLink);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
            activateLink(link);
        });
    });

    window.addEventListener("scroll", onScroll);

    // Initial call to highlight the section in view on page load
    onScroll();

    // Optionally, add code to detect the active section based on scrolling
    // window.addEventListener("scroll", function() {
    //     const fromTop = window.scrollY;
    //     navLinks.forEach(link => {
    //         const section = document.querySelector(link.getAttribute("href"));
    //         if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
    //             activateLink(link);
    //         }
    //     });
    // });
});

