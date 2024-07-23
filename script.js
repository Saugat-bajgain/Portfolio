//responsive nev bar
document.addEventListener("DOMContentLoaded", function() {
    let icon = document.querySelector(".icon");
    let menuea = document.querySelector(".menue");

    icon.addEventListener("click", () => {
        menuea.classList.toggle("show");
    });
});
//


// darkmode
let nav = document.querySelector(".nav-header");
let sun = document.querySelector("#i");
let dark = document.querySelector("body");
let white = document.querySelector(".btn");
let color = document.querySelector("a");
sun.addEventListener("click", () => {
    sun.classList.toggle("rotate");
    dark.classList.toggle("dark");
    white.classList.toggle("dark");
    nav.classList.toggle("purple");
});


// for the line which appears on scrolling 
window.onscroll=()=>{
    const navheader=document.querySelector(".nav-header")
    if(document.body.scrollTop > 50|| document.documentElement.scrollTop > 50){
        navheader.style.boxShadow="0 1px 6px rgba(0,0,0,0.1)"
          navheader.style.height="70px"
            navheader.style.lineHeight="70px"
    }else{
        
            navheader.style.boxShadow="none"
              navheader.style.height="90px"
                navheader.style.lineHeight="90px"
    }

}
// typing effect------------*/
var typingEffect=new Typed(".typedtext",{
    strings:["Designer","Developer"],
    loop:true,
    typeSpeed:100,
backSpeed:80,
backDelay:2000
})
// --------------scroll reveal animation---------//
const sr=ScrollReveal({
    origin:"top",
    distance:'80px',
    duration:2000,
    reset:true

})
sr.reveal('.reveal');
// --------------home---------//
sr.reveal('.feature-txt-card',{});
sr.reveal('.featured-name',{delay:300});
sr.reveal('.featured-text-info',{delay:300});
sr.reveal('.featured-text-btn',{delay:300});
sr.reveal('.social-icon',{delay:300});
sr.reveal('.featured-image',{delay:300});

//--------------projects---------//
sr.reveal('.project-box',{interval:300});

sr.reveal('.top-header',{});

// --------------About my introduction---------//
const srleft=ScrollReveal({
    origin:"left",//animation start from left 
    distance:'80px',
    duration:2000,
    reset:true

})
srleft.reveal('.my-info',{delay:100});
srleft.reveal('.contact-information ',{delay:100});

// --------------about skills---------//
const srright=ScrollReveal({
    origin:"right",//animation start from left 
    distance:'80px',
    duration:2000,
    reset:true

})
srleft.reveal('.col ',{delay:100});