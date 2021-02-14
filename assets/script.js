
const navSlide = () => {
  const mobleNav = document.querySelector(".mobleNav");
  const nav = document.querySelector('.nav-links2');
  const navLinks = document.querySelectorAll('.nav-links2 li');
  
  mobleNav.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    //when on moble nav animation
    mobleNav.classList.toggle("toggle");
  });
};
navSlide();
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
// Scroll JS
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        // can be whatever, 0 refers to the top space you allow
        $('.move').slideUp('slow'); // Hide your element
    } else {
        $('.move').slideDown('slow'); // It's just if you want to show back the element if we're back on top
    }
});
