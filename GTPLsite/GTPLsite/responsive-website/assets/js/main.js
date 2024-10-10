/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

function revealOnScroll() {
    var reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(function(element) {
      var windowHeight = window.innerHeight;
      var elementTop = element.getBoundingClientRect().top;
      var elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('revealed');
      } else {
        element.classList.remove('revealed');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__points', 1.5, {opacity: 0, y: -300, delay: .2})
gsap.from('.home__rocket', 1.5, {opacity: 0, y: 300, delay: .3})
gsap.from('.home__planet-1', 1.5, {opacity: 0, x: -200, delay: .8})
gsap.from('.home__planet-2', 1.5, {opacity: 0, x: 200, delay: 1})
gsap.from('.home__cloud-1', 1.5, {opacity: 0, y: 200, delay: 1.2})
gsap.from('.home__cloud-2', 1.5, {opacity: 0, x: 200, delay: 1.3})
gsap.from('.home__content', 1.5, {opacity: 0, y: -100, delay: 1.4})
gsap.from('.home__title img', 1.5, {opacity: 0, x: 100, delay: 1.6})

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const header = document.getElementById('header');
  const firstSection = document.querySelector('.home');

  // Function to handle scroll event
  const handleScroll = () => {
    // Get the height of the first section
    const firstSectionHeight = firstSection.offsetHeight;

    // Add the class if the user has scrolled past the first section
    if (window.scrollY > firstSectionHeight) {
      header.classList.add('navbar--scrolled');
    } else {
      header.classList.remove('navbar--scrolled');
    }
  };

  // Attach the scroll event listener to the window
  window.addEventListener('scroll', handleScroll);
});
